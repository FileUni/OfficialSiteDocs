export {
  DEFAULT_LOCALE,
  FILEUNI_LANG_COOKIE_KEY,
  LOCALE_METADATA,
  SUPPORTED_LOCALES,
  buildLocaleUrl,
  buildLocalePath,
  detectLocale,
  detectLocaleFromNavigator,
  getSiteChromeMeta,
  getLocaleFromPath,
  getLocaleFromPathname,
  getPathBasedLocaleOptions,
  isLocaleRootPath,
  normalizeLocale,
  readCookieValue,
  writeCookieValue,
  translatePathWithLocale,
  type LocalePathOption,
  type SiteChromeLocale,
  type SupportedLocale,
} from '@fileuni/ts-shared/locale';

export {
  FILEUNI_CONTROL_METRICS,
  FILEUNI_LANGUAGE_MENU_CLASSNAMES,
  FILEUNI_TRANSLATION_ICON_PATHS,
  FILEUNI_THEME_TOGGLE_CLASSNAMES,
  LOCALE_PICKER_OPTIONS,
  attachDropdownMenu,
  defineBinaryThemeToggleElement,
  definePathLocaleDropdownElement,
  mountPathLocaleDropdown,
  type LocalePickerOption,
} from '@fileuni/ts-shared/controls';

export {
  buildThemeHeadBootstrap,
  getNextBinaryTheme,
  initPathLocaleThemeBootstrap,
  parseBrowserThemePreference,
  type ThemeHeadBootstrap,
  type ThemeHeadBootstrapOptions,
} from '@fileuni/ts-shared/theme';
