import {
  FILEUNI_LANG_COOKIE_KEY,
  getLocaleFromPath,
  initPathLocaleThemeBootstrap,
  parseBrowserThemePreference,
} from '../i18n/core';
import { DOCS_DEFAULT_LOCALE, DOCS_LOCALE_OPTIONS } from '../i18n/locales';

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function initDocsThemeProvider(): void {
  const state = initPathLocaleThemeBootstrap({
    currentLocale: getLocaleFromPath(window.location.pathname, DOCS_LOCALE_OPTIONS, DOCS_DEFAULT_LOCALE),
    defaultLocale: DOCS_DEFAULT_LOCALE,
    localeOptions: DOCS_LOCALE_OPTIONS,
    langCookieKey: FILEUNI_LANG_COOKIE_KEY,
    themeCookieKey: 'theme',
    cookieMaxAgeSeconds: COOKIE_MAX_AGE_SECONDS,
    themeStrategy: 'data-theme',
    respectHash: false,
  });

  window.FileUniPreferenceCookie = {
    read: state.readCookie,
    write: state.writeCookie,
    parseTheme: parseBrowserThemePreference,
    parseLang: state.parseLang,
  };

  window.StarlightThemeProvider = {
    updatePickers(theme = state.theme) {
      const parsedTheme = parseBrowserThemePreference(theme) || 'auto';
      document.querySelectorAll('starlight-theme-select').forEach((picker) => {
        const select = picker.querySelector('select');
        if (select) {
          select.value = parsedTheme;
        }
        picker.querySelectorAll('[data-theme-value]').forEach((option) => {
          if (!(option instanceof HTMLButtonElement)) {
            return;
          }
          const isActive = option.dataset.themeValue === parsedTheme;
          option.classList.toggle('is-active', isActive);
          option.setAttribute('aria-pressed', String(isActive));
        });
      });
    },
  };
}
