import {
  DEFAULT_LOCALE,
  LOCALE_METADATA,
  SUPPORTED_LOCALES,
  getLocaleFromPathname,
  translatePathWithLocale,
  type SupportedLocale,
} from './core';

export type DocsLocale = SupportedLocale;

export type DocsLocaleOption = {
  code: DocsLocale;
  label: string;
  flag: string;
  pathPrefix: string;
};

export const DOCS_DEFAULT_LOCALE = DEFAULT_LOCALE;

export const DOCS_LOCALE_OPTIONS: DocsLocaleOption[] = SUPPORTED_LOCALES.map((locale) => ({
  code: locale,
  label: LOCALE_METADATA[locale].label,
  flag: LOCALE_METADATA[locale].flag,
  pathPrefix: LOCALE_METADATA[locale].pathPrefix,
}));

/**
 * Derive the docs locale from a URL pathname.
 */
export function getDocsLocaleFromPath(pathname: string): DocsLocale {
  return getLocaleFromPathname(pathname);
}

/**
 * Translate a pathname to the specified docs locale.
 */
export function toDocsLocalePath(pathname: string, locale: DocsLocale): string {
  return translatePathWithLocale(pathname, locale);
}
