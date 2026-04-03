import { DEFAULT_LOCALE, LOCALE_METADATA, type SupportedLocale } from './core';

const SITE_BASE_URL = 'https://fileuni.com';
const DOCS_BASE_URL = 'https://docs.fileuni.com';

function normalizePath(pathname = ''): string {
  const trimmed = String(pathname).trim();
  if (!trimmed || trimmed === '/') {
    return '/';
  }
  return `/${trimmed.replace(/^\/+|\/+$/g, '')}`;
}

function getLocalePrefix(locale: SupportedLocale): string {
  return LOCALE_METADATA[locale].pathPrefix || LOCALE_METADATA[DEFAULT_LOCALE].pathPrefix;
}

export function getSiteUrl(locale: SupportedLocale, pathname = '/'): string {
  const prefix = getLocalePrefix(locale);
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/') {
    return `${SITE_BASE_URL}${prefix || '/'}`;
  }
  return `${SITE_BASE_URL}${prefix}${normalizedPath}`;
}

export function getDocsUrl(locale: SupportedLocale, pathname = '/'): string {
  const prefix = getLocalePrefix(locale);
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/') {
    return `${DOCS_BASE_URL}${prefix || '/'}`;
  }
  return `${DOCS_BASE_URL}${prefix}${normalizedPath}`;
}
