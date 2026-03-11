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
          sidebar: [
            {
              label: 'Back to FileUni',
              link: 'https://fileuni.com',
            },
            {
              label: 'Documentation',
              items: [
                { label: 'System Requirements', slug: 'system-requirements' },
                { label: 'Quick Start', slug: 'quickstart' },
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
          label: '简体中文',
          lang: 'zh-CN',
          sidebar: [
            {
              label: '返回 FileUni 官网',
              link: 'https://fileuni.com/zh-cn/',
            },
            {
              label: '使用文档',
              items: [
                { label: '系统最低要求', slug: 'zh-cn/system-requirements' },
                { label: '快速开始', slug: 'zh-cn/quickstart' },
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
