import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import * as esbuild from 'esbuild';

const ROOT = new URL('..', import.meta.url);
const DIST_DIR = new URL('./dist/', ROOT);

const JS_TARGET = 'es2019';

/**
 * Check if a script type attribute value represents JavaScript that should be transpiled.
 * Returns true for empty, 'module', 'text/javascript', or 'application/javascript'.
 */
const isJavaScriptType = (typeValue) => {
  if (!typeValue) return true;
  const normalized = String(typeValue).trim().toLowerCase();
  if (!normalized) return true;
  return (
    normalized === 'module' ||
    normalized === 'text/javascript' ||
    normalized === 'application/javascript'
  );
};

/**
 * Recursively walk a directory tree and return all file paths.
 */
const walk = async (dirPath) => {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await walk(fullPath)));
      continue;
    }
    results.push(fullPath);
  }
  return results;
};

/**
 * Transpile JavaScript code to the es2019 target using ESBuild.
 */
const transformJs = async (code, sourcefile) => {
  const result = await esbuild.transform(code, {
    loader: 'js',
    target: JS_TARGET,
    format: 'esm',
    legalComments: 'none',
    sourcefile,
  });
  return result.code;
};

/**
 * Find and rewrite all inline <script> tags in an HTML file to the es2019 target.
 * Skips external scripts (with src attribute) and non-JavaScript types.
 */
const rewriteInlineScripts = async (htmlPath) => {
  const original = await fs.readFile(htmlPath, 'utf8');
  let changed = false;

  const scriptTagRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let rewritten = '';
  let lastIndex = 0;
  let match;

  while ((match = scriptTagRe.exec(original)) !== null) {
    const [full, attrsRaw, contentRaw] = match;
    const start = match.index;
    const end = start + full.length;

    rewritten += original.slice(lastIndex, start);
    lastIndex = end;

    const attrs = attrsRaw || '';
    const hasSrc = /\bsrc\s*=\s*/i.test(attrs);
    if (hasSrc) {
      rewritten += full;
      continue;
    }

    const typeMatch = attrs.match(/\btype\s*=\s*(['"])(.*?)\1/i);
    const typeValue = typeMatch ? typeMatch[2] : '';
    if (!isJavaScriptType(typeValue)) {
      rewritten += full;
      continue;
    }

    const content = contentRaw || '';
    if (!content.trim()) {
      rewritten += full;
      continue;
    }

    try {
      const out = await transformJs(content, htmlPath);
      rewritten += `<script${attrs}>${out}</script>`;
      changed = true;
    } catch {
      // If transformation fails, keep original script to avoid breaking the page.
      rewritten += full;
    }
  }

  rewritten += original.slice(lastIndex);

  if (changed) {
    await fs.writeFile(htmlPath, rewritten, 'utf8');
  }
};

/**
 * Walk the dist directory and transpile all .js files and inline scripts in .html files to es2019.
 */
const main = async () => {
  const distPath = path.resolve(fileURLToPath(DIST_DIR));
  const files = await walk(distPath);

  await Promise.all(
    files.map(async (filePath) => {
      if (filePath.endsWith('.js')) {
        const original = await fs.readFile(filePath, 'utf8');
        const out = await transformJs(original, filePath);
        if (out !== original) {
          await fs.writeFile(filePath, out, 'utf8');
        }
        return;
      }
      if (filePath.endsWith('.html')) {
        await rewriteInlineScripts(filePath);
      }
    }),
  );
};

await main();
