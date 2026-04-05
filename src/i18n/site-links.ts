import { buildLocaleUrl, type SupportedLocale } from './core';

const SITE_BASE_URL = 'https://fileuni.com';
const DOCS_BASE_URL = 'https://docs.fileuni.com';

/**
 * Build a fully qualified URL to the main site (fileuni.com) for a given locale and optional pathname.
 */
export function getSiteUrl(locale: SupportedLocale, pathname = '/'): string {
  return buildLocaleUrl(SITE_BASE_URL, locale, pathname);
}

/**
 * Build a fully qualified URL to the docs site (docs.fileuni.com) for a given locale and optional pathname.
 */
export function getDocsUrl(locale: SupportedLocale, pathname = '/'): string {
  return buildLocaleUrl(DOCS_BASE_URL, locale, pathname);
}
