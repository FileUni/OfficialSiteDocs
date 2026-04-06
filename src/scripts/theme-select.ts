import { defineBinaryThemeToggleElement } from '../i18n/core';

export function initDocsThemeSelect(): void {
  defineBinaryThemeToggleElement({
    tagName: 'starlight-theme-select',
    buttonSelector: 'button.fu-theme-toggle',
    themeCookieKey: 'theme',
    themeStrategy: 'data-theme',
    getCookieApi: () => window.FileUniPreferenceCookie ?? null,
  });
}
