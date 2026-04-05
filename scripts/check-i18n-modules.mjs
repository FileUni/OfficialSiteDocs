import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const i18nRoot = path.join(projectRoot, 'src/i18n');
const docsContentRoot = path.join(projectRoot, 'src/content/docs');

function collectJsonFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const nextPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectJsonFiles(nextPath, acc);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.json')) {
      acc.push(nextPath);
    }
  }
  return acc;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function extractPlaceholders(value) {
  const placeholders = new Set();
  if (typeof value !== 'string') {
    return placeholders;
  }
  for (const match of value.matchAll(/\{\{\s*([a-zA-Z0-9_.-]+)\s*\}\}/g)) {
    placeholders.add(match[1]);
  }
  for (const match of value.matchAll(/(?<!\{)\{([a-zA-Z0-9_.-]+)\}(?!\})/g)) {
    placeholders.add(match[1]);
  }
  return placeholders;
}

function importLocalModule(relativePath) {
  const absolutePath = path.join(projectRoot, relativePath);
  return import(pathToFileURL(absolutePath).href);
}

const i18nJsonFiles = existsSync(i18nRoot) ? collectJsonFiles(i18nRoot) : [];
if (i18nJsonFiles.length > 0) {
  const listed = i18nJsonFiles
    .map((filePath) => path.relative(projectRoot, filePath))
    .sort()
    .join('\n');
  throw new Error(`legacy i18n json files remain:\n${listed}`);
}

const [core, docsLocales, siteLinks] = await Promise.all([
  importLocalModule('src/i18n/core.ts'),
  importLocalModule('src/i18n/locales.ts'),
  importLocalModule('src/i18n/site-links.ts'),
]);

assert(docsLocales.DOCS_DEFAULT_LOCALE === core.DEFAULT_LOCALE, 'docs default locale must match shared default locale');
assert(
  docsLocales.DOCS_LOCALE_OPTIONS.length === core.SUPPORTED_LOCALES.length,
  'docs locale option count must match shared supported locale count',
);

for (const locale of core.SUPPORTED_LOCALES) {
  const option = docsLocales.DOCS_LOCALE_OPTIONS.find((item) => item.code === locale);
  assert(option, `docs locale option missing for ${locale}`);
  assert(option.label === core.LOCALE_METADATA[locale].label, `docs locale label mismatch for ${locale}`);
  assert(option.flag === core.LOCALE_METADATA[locale].flag, `docs locale flag mismatch for ${locale}`);
  assert(option.pathPrefix === core.LOCALE_METADATA[locale].pathPrefix, `docs locale path prefix mismatch for ${locale}`);
  assert(
    [...extractPlaceholders(option.label)].join('|') === [...extractPlaceholders(core.LOCALE_METADATA[locale].label)].join('|'),
    `docs locale label placeholder mismatch for ${locale}`,
  );

  const docsUrl = siteLinks.getDocsUrl(locale, '/quickstart');
  const siteUrl = siteLinks.getSiteUrl(locale, '/download');
  assert(docsUrl.includes('/quickstart'), `docs quickstart URL missing expected path for ${locale}`);
  assert(siteUrl.includes('/download'), `site download URL missing expected path for ${locale}`);
}

assert(docsLocales.getDocsLocaleFromPath('/zh-CN/quickstart') === 'zh-CN', 'docs path locale detection failed for zh-CN');
assert(docsLocales.getDocsLocaleFromPath('/quickstart') === 'en', 'docs path locale detection failed for default locale');
assert(docsLocales.toDocsLocalePath('/quickstart', 'fr') === '/fr/quickstart/', 'docs locale path translation failed for fr');

const baseDocsFiles = readdirSync(docsContentRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
  .map((entry) => entry.name)
  .sort();

for (const locale of core.SUPPORTED_LOCALES.filter((item) => item !== core.DEFAULT_LOCALE)) {
  const localeDir = path.join(docsContentRoot, locale);
  assert(existsSync(localeDir), `docs content directory missing for ${locale}`);
  const localeFiles = readdirSync(localeDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort();

  assert(
    baseDocsFiles.join('|') === localeFiles.join('|'),
    `docs content file mismatch for ${locale}\nexpected: ${baseDocsFiles.join(', ')}\nactual: ${localeFiles.join(', ')}`,
  );
}

console.log('i18n module check passed.');
