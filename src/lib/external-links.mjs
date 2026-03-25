export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = ['en', 'zh-cn', 'es', 'de', 'fr', 'ru', 'ja'];

const SITE_BASE_URL = 'https://fileuni.com';
const DOCS_BASE_URL = 'https://docs.fileuni.com';

const SITE_PREFIX_BY_LOCALE = {
  en: '',
  'zh-cn': '/zh-cn',
  es: '/es',
  de: '/de',
  fr: '/fr',
  ru: '/ru',
  ja: '/ja',
};

const DOCS_PREFIX_BY_LOCALE = {
  en: '',
  'zh-cn': '/zh-cn',
  es: '/es',
  de: '/de',
  fr: '/fr',
  ru: '/ru',
  ja: '/ja',
};

function normalizePath(pathname = '') {
  const trimmed = String(pathname).trim();
  if (!trimmed || trimmed === '/') {
    return '/';
  }
  return `/${trimmed.replace(/^\/+|\/+$/g, '')}`;
}

export function getSiteUrl(locale, pathname = '/') {
  const prefix = SITE_PREFIX_BY_LOCALE[locale] ?? SITE_PREFIX_BY_LOCALE[DEFAULT_LOCALE];
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/') {
    return `${SITE_BASE_URL}${prefix || '/'}`;
  }
  return `${SITE_BASE_URL}${prefix}${normalizedPath}`;
}

export function getDocsUrl(locale, pathname = '/') {
  const prefix = DOCS_PREFIX_BY_LOCALE[locale] ?? DOCS_PREFIX_BY_LOCALE[DEFAULT_LOCALE];
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/') {
    return `${DOCS_BASE_URL}${prefix || '/'}`;
  }
  return `${DOCS_BASE_URL}${prefix}${normalizedPath}`;
}
