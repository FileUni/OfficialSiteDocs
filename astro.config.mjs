import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://docs.fileuni.com',
  output: 'static',
  session: {
    driver: 'null',
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    starlight({
      title: 'FileUni Docs',
      description: 'Official documentation for FileUni.',
      favicon: '//fileuni.com/favicon.svg',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      sidebar: [
        {
          label: 'Back to FileUni',
          link: 'https://fileuni.com',
        },
        {
          label: 'Documentation',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Quick Start', slug: 'quickstart' },
            { label: 'Features', slug: 'features' },
            { label: 'File Management', slug: 'file-management' },
            { label: 'Sharing', slug: 'sharing' },
            { label: 'User Management', slug: 'user-management' },
            { label: 'Reset Admin Password', slug: 'get-admin-passwd' },
          ],
        },
      ],
      components: {
        Header: './src/components/Header.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/fileuni/official-site-docs/edit/main/src/content/docs/',
      },
      social: {
        github: 'https://github.com/fileuni/official-site-docs',
      },
      pagination: true,
      lastUpdated: true,
      customCss: ['./src/styles/fileuni-theme.css'],
    }),
  ],
});
