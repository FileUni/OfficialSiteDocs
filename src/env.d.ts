declare module 'virtual:starlight/components/LanguageSelect' {
  const LanguageSelect: typeof import('@astrojs/starlight/components/LanguageSelect.astro').default;
  export default LanguageSelect;
}

declare module 'virtual:starlight/components/Search' {
  const Search: typeof import('@astrojs/starlight/components/Search.astro').default;
  export default Search;
}

declare module 'virtual:starlight/components/SiteTitle' {
  const SiteTitle: typeof import('@astrojs/starlight/components/SiteTitle.astro').default;
  export default SiteTitle;
}

declare module 'virtual:starlight/components/ThemeSelect' {
  const ThemeSelect: typeof import('@astrojs/starlight/components/ThemeSelect.astro').default;
  export default ThemeSelect;
}

declare global {
  interface Window {
    FileUniPreferenceCookie?: {
      read: (name: string) => string | null;
      write: (name: string, value: string) => void;
      parseTheme?: (value: string | null | undefined) => string | null;
      parseLang?: (value: string | null | undefined) => string | null;
    };
    StarlightThemeProvider?: {
      updatePickers(theme?: string): void;
    };
  }
}

export {};
