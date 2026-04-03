import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';
import { getSiteUrl } from './src/i18n/site-links';

/**
 * OfficialSiteDocs Astro configuration.
 * Defines Starlight multi-locale setup (7 languages), sidebar navigation per locale,
 * custom component overrides, and Cloudflare adapter for SSG deployment.
 */
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
              link: getSiteUrl('en'),
            },
            {
              label: 'Documentation',
              items: [
                { label: 'Quick Start', slug: 'quickstart' },
                { label: 'System Requirements', slug: 'system-requirements' },
                { label: 'Install FileUni', link: getSiteUrl('en', 'download') },
                { label: 'Features', slug: 'features' },
                { label: 'Nextcloud Compatibility', slug: 'nextcloud-compatibility' },
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
              link: getSiteUrl('zh-cn'),
            },
            {
              label: '使用文档',
              items: [
                { label: '快速开始', slug: 'zh-cn/quickstart' },
                { label: '系统最低要求', slug: 'zh-cn/system-requirements' },
                { label: '下载与安装', link: getSiteUrl('zh-cn', 'download') },
                { label: '功能特性', slug: 'zh-cn/features' },
                { label: 'Nextcloud 兼容性', slug: 'zh-cn/nextcloud-compatibility' },
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
              link: getSiteUrl('es'),
            },
            {
              label: 'Documentación',
              items: [
                { label: 'Guía rápida', slug: 'es/quickstart' },
                { label: 'Requisitos del sistema', slug: 'es/system-requirements' },
                { label: 'Descargar FileUni', link: getSiteUrl('es', 'download') },
                { label: 'Funciones', slug: 'es/features' },
                { label: 'Compatibilidad con Nextcloud', slug: 'es/nextcloud-compatibility' },
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
            { label: 'Zurück zu FileUni', link: getSiteUrl('de') },
            {
              label: 'Dokumentation',
              items: [
                { label: 'Schnellstart', slug: 'de/quickstart' },
                { label: 'Systemanforderungen', slug: 'de/system-requirements' },
                { label: 'FileUni herunterladen', link: getSiteUrl('de', 'download') },
                { label: 'Funktionen', slug: 'de/features' },
                { label: 'Nextcloud-Kompatibilität', slug: 'de/nextcloud-compatibility' },
                { label: 'Zugriff und Dateioperationen', slug: 'de/file-management' },
                { label: 'Als Dienst installieren', slug: 'de/install-service' },
                { label: 'Admin-Passwort zurücksetzen', slug: 'de/get-admin-passwd' },
                { label: 'Externe Abhängigkeiten', slug: 'de/external-dependencies' },
              ],
            },
          ],
        },
        fr: {
          label: '🇫🇷 Français',
          lang: 'fr',
          sidebar: [
            { label: 'Retour à FileUni', link: getSiteUrl('fr') },
            {
              label: 'Documentation',
              items: [
                { label: 'Démarrage rapide', slug: 'fr/quickstart' },
                { label: 'Configuration requise', slug: 'fr/system-requirements' },
                { label: 'Télécharger FileUni', link: getSiteUrl('fr', 'download') },
                { label: 'Fonctionnalités', slug: 'fr/features' },
                { label: 'Compatibilité Nextcloud', slug: 'fr/nextcloud-compatibility' },
                { label: 'Accès et opérations sur les fichiers', slug: 'fr/file-management' },
                { label: 'Installer en tant que service', slug: 'fr/install-service' },
                { label: 'Réinitialiser le mot de passe admin', slug: 'fr/get-admin-passwd' },
                { label: 'Dépendances externes', slug: 'fr/external-dependencies' },
              ],
            },
          ],
        },
        ru: {
          label: '🇷🇺 Русский',
          lang: 'ru',
          sidebar: [
            { label: 'Вернуться на FileUni', link: getSiteUrl('ru') },
            {
              label: 'Документация',
              items: [
                { label: 'Быстрый старт', slug: 'ru/quickstart' },
                { label: 'Системные требования', slug: 'ru/system-requirements' },
                { label: 'Скачать FileUni', link: getSiteUrl('ru', 'download') },
                { label: 'Возможности', slug: 'ru/features' },
                { label: 'Совместимость с Nextcloud', slug: 'ru/nextcloud-compatibility' },
                { label: 'Доступ и операции с файлами', slug: 'ru/file-management' },
                { label: 'Установка как сервис', slug: 'ru/install-service' },
                { label: 'Сброс пароля администратора', slug: 'ru/get-admin-passwd' },
                { label: 'Внешние зависимости', slug: 'ru/external-dependencies' },
              ],
            },
          ],
        },
        ja: {
          label: '🇯🇵 日本語',
          lang: 'ja',
          sidebar: [
            { label: 'FileUni に戻る', link: getSiteUrl('ja') },
            {
              label: 'ドキュメント',
              items: [
                { label: 'クイックスタート', slug: 'ja/quickstart' },
                { label: 'システム要件', slug: 'ja/system-requirements' },
                { label: 'FileUni をダウンロード', link: getSiteUrl('ja', 'download') },
                { label: '機能', slug: 'ja/features' },
                { label: 'Nextcloud 互換性', slug: 'ja/nextcloud-compatibility' },
                { label: 'アクセスとファイル操作', slug: 'ja/file-management' },
                { label: 'サービスとしてインストール', slug: 'ja/install-service' },
                { label: '管理者パスワードをリセット', slug: 'ja/get-admin-passwd' },
                { label: '外部依存関係', slug: 'ja/external-dependencies' },
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
