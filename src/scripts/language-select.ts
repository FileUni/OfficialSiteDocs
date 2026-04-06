import { FILEUNI_LANG_COOKIE_KEY, definePathLocaleDropdownElement } from '../i18n/core';
import { DOCS_LOCALE_OPTIONS } from '../i18n/locales';

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function initDocsLanguageSelect(): void {
  definePathLocaleDropdownElement({
    tagName: 'starlight-lang-select',
    localeOptions: DOCS_LOCALE_OPTIONS,
    langCookieKey: FILEUNI_LANG_COOKIE_KEY,
    cookieMaxAgeSeconds: COOKIE_MAX_AGE_SECONDS,
    triggerSelector: 'button.fu-lang-toggle',
    menuSelector: '.fu-lang-menu',
    itemSelector: 'button.fu-lang-menu-item',
  });
}
