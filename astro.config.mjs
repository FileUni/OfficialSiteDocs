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
      favicon: '/favicon.svg',
      head: [
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: 'any' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#2563EB' } },
      ],
      locales: {
        root: {
          label: '🇬🇧 English',
          lang: 'en',
          sidebar: [
            {
              label: 'Back to FileUni',
              link: 'https://fileuni.com',
            },
            {
              label: 'Documentation',
              items: [
                { label: 'Quick Start', slug: 'quickstart' },
                { label: 'System Requirements', slug: 'system-requirements' },
                { label: 'Install FileUni', link: 'https://fileuni.com/download' },
                { label: 'Features', slug: 'features' },
                { label: 'Access and File Operations', slug: 'file-management' },
                { label: 'Install as Service', slug: 'install-service' },
                { label: 'Reset Admin Password', slug: 'get-admin-passwd' },
                { label: 'External Dependencies', slug: 'external-dependencies' },
              ],
            },
          ],
        },
        'zh-cn': {
          label: '🇨🇳 简体中文',
          lang: 'zh-CN',
          sidebar: [
            {
              label: '返回 FileUni 官网',
              link: 'https://fileuni.com/zh-cn/',
            },
            {
              label: '使用文档',
              items: [
                { label: '快速开始', slug: 'zh-cn/quickstart' },
                { label: '系统最低要求', slug: 'zh-cn/system-requirements' },
                { label: '下载与安装', link: 'https://fileuni.com/zh-cn/download' },
                { label: '功能特性', slug: 'zh-cn/features' },
                { label: '访问方式与文件操作', slug: 'zh-cn/file-management' },
                { label: '安装为系统服务', slug: 'zh-cn/install-service' },
                { label: '重置管理员密码', slug: 'zh-cn/get-admin-passwd' },
                { label: '外部依赖', slug: 'zh-cn/external-dependencies' },
              ],
            },
          ],
        },
        es: {
          label: '🇪🇸 Español',
          lang: 'es',
          sidebar: [
            {
              label: 'Volver a FileUni',
              link: 'https://fileuni.com/es/',
            },
            {
              label: 'Documentación',
              items: [
                { label: 'Guía rápida', slug: 'es/quickstart' },
                { label: 'Requisitos del sistema', slug: 'es/system-requirements' },
                { label: 'Descargar FileUni', link: 'https://fileuni.com/es/download' },
                { label: 'Funciones', slug: 'es/features' },
                { label: 'Acceso y operaciones de archivos', slug: 'es/file-management' },
                { label: 'Instalar como servicio', slug: 'es/install-service' },
                { label: 'Restablecer contraseña de admin', slug: 'es/get-admin-passwd' },
                { label: 'Dependencias externas', slug: 'es/external-dependencies' },
              ],
            },
          ],
        },
        de: {
          label: '🇩🇪 Deutsch',
          lang: 'de',
          sidebar: [
            { label: 'Back to FileUni', link: 'https://fileuni.com/de/' },
            {
              label: 'Documentation',
              items: [
                { label: 'Quick Start', slug: 'de/quickstart' },
                { label: 'System Requirements', slug: 'de/system-requirements' },
                { label: 'Download FileUni', link: 'https://fileuni.com/de/download' },
                { label: 'Features', slug: 'de/features' },
                { label: 'Access and File Operations', slug: 'de/file-management' },
                { label: 'Install as Service', slug: 'de/install-service' },
                { label: 'Reset Admin Password', slug: 'de/get-admin-passwd' },
                { label: 'External Dependencies', slug: 'de/external-dependencies' },
              ],
            },
          ],
        },
        fr: {
          label: '🇫🇷 Français',
          lang: 'fr',
          sidebar: [
            { label: 'Back to FileUni', link: 'https://fileuni.com/fr/' },
            {
              label: 'Documentation',
              items: [
                { label: 'Quick Start', slug: 'fr/quickstart' },
                { label: 'System Requirements', slug: 'fr/system-requirements' },
                { label: 'Download FileUni', link: 'https://fileuni.com/fr/download' },
                { label: 'Features', slug: 'fr/features' },
                { label: 'Access and File Operations', slug: 'fr/file-management' },
                { label: 'Install as Service', slug: 'fr/install-service' },
                { label: 'Reset Admin Password', slug: 'fr/get-admin-passwd' },
                { label: 'External Dependencies', slug: 'fr/external-dependencies' },
              ],
            },
          ],
        },
        ru: {
          label: '🇷🇺 Русский',
          lang: 'ru',
          sidebar: [
            { label: 'Back to FileUni', link: 'https://fileuni.com/ru/' },
            {
              label: 'Documentation',
              items: [
                { label: 'Quick Start', slug: 'ru/quickstart' },
                { label: 'System Requirements', slug: 'ru/system-requirements' },
                { label: 'Download FileUni', link: 'https://fileuni.com/ru/download' },
                { label: 'Features', slug: 'ru/features' },
                { label: 'Access and File Operations', slug: 'ru/file-management' },
                { label: 'Install as Service', slug: 'ru/install-service' },
                { label: 'Reset Admin Password', slug: 'ru/get-admin-passwd' },
                { label: 'External Dependencies', slug: 'ru/external-dependencies' },
              ],
            },
          ],
        },
        ja: {
          label: '🇯🇵 日本語',
          lang: 'ja',
          sidebar: [
            { label: 'Back to FileUni', link: 'https://fileuni.com/ja/' },
            {
              label: 'Documentation',
              items: [
                { label: 'Quick Start', slug: 'ja/quickstart' },
                { label: 'System Requirements', slug: 'ja/system-requirements' },
                { label: 'Download FileUni', link: 'https://fileuni.com/ja/download' },
                { label: 'Features', slug: 'ja/features' },
                { label: 'Access and File Operations', slug: 'ja/file-management' },
                { label: 'Install as Service', slug: 'ja/install-service' },
                { label: 'Reset Admin Password', slug: 'ja/get-admin-passwd' },
                { label: 'External Dependencies', slug: 'ja/external-dependencies' },
              ],
            },
          ],
        },
      },
      components: {
        Header: './src/components/Header.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/FileUni/OfficialSiteDocs/edit/main/',
      },
      social: {
        github: 'https://github.com/FileUni/OfficialSiteDocs',
      },
      pagination: true,
      lastUpdated: true,
      customCss: ['./src/styles/fileuni-theme.css'],
    }),
  ],
});
