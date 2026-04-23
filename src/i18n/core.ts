export {
  DEFAULT_LOCALE,
  LANGUAGE_COOKIE_KEY,
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
} from '@fileuni/ts-shared/localization';

export {
  createLocaleMenuControlStyle,
  createStaticLocaleMenuItems,
  resolveCurrentPathLocale,
  LOCALE_MENU_CLASSNAMES,
  LOCALE_MENU_METRICS,
  LOCALE_MENU_OPTIONS,
  LOCALE_MENU_TRANSLATION_ICON_PATHS,
  definePathLocaleDropdownElement,
  type StaticLocaleMenuItem,
  type LocaleMenuOption,
} from '@fileuni/ts-shared/language-menu';

export {
  THEME_TOGGLE_CLASSNAMES,
  defineBinaryThemeToggleElement,
  createThemeToggleControlStyle,
} from '@fileuni/ts-shared/theme-toggle';

export {
  buildThemeHeadBootstrap,
  getNextBinaryTheme,
  initPathLocaleThemeBootstrap,
  parseBrowserThemePreference,
  type ThemeHeadBootstrap,
  type ThemeHeadBootstrapOptions,
} from '@fileuni/ts-shared/theme-system';
