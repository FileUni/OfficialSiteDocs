import { DEFAULT_LOCALE, LOCALE_METADATA, type SupportedLocale } from './core';

const SITE_BASE_URL = 'https://fileuni.com';
const DOCS_BASE_URL = 'https://docs.fileuni.com';

/**
 * Normalize a pathname by trimming whitespace, removing leading/trailing slashes, and ensuring a single leading slash.
 */
function normalizePath(pathname = ''): string {
  const trimmed = String(pathname).trim();
  if (!trimmed || trimmed === '/') {
    return '/';
  }
  return `/${trimmed.replace(/^\/+|\/+$/g, '')}`;
}

/**
 * Get the URL path prefix for a given locale (e.g., '/zh-cn' or '').
 */
function getLocalePrefix(locale: SupportedLocale): string {
  return LOCALE_METADATA[locale].pathPrefix || LOCALE_METADATA[DEFAULT_LOCALE].pathPrefix;
}

/**
 * Build a fully qualified URL to the main site (fileuni.com) for a given locale and optional pathname.
 */
export function getSiteUrl(locale: SupportedLocale, pathname = '/'): string {
  const prefix = getLocalePrefix(locale);
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/') {
    return `${SITE_BASE_URL}${prefix || '/'}`;
  }
  return `${SITE_BASE_URL}${prefix}${normalizedPath}`;
}

/**
 * Build a fully qualified URL to the docs site (docs.fileuni.com) for a given locale and optional pathname.
 */
export function getDocsUrl(locale: SupportedLocale, pathname = '/'): string {
  const prefix = getLocalePrefix(locale);
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/') {
    return `${DOCS_BASE_URL}${prefix || '/'}`;
  }
  return `${DOCS_BASE_URL}${prefix}${normalizedPath}`;
}
