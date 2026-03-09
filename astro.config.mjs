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
                { label: 'Introduction', slug: 'introduction' },
                { label: 'Quick Start', slug: 'quickstart' },
                { label: 'Install FileUni', link: 'https://fileuni.com/download' },
                { label: 'Install as Service', slug: 'install-service' },
                { label: 'Features', slug: 'features' },
                { label: 'File Management', slug: 'file-management' },
                { label: 'Sharing', slug: 'sharing' },
                { label: 'User Management', slug: 'user-management' },
                { label: 'Reset Admin Password', slug: 'get-admin-passwd' },
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
                { label: '产品介绍', slug: 'zh-cn/introduction' },
                { label: '快速开始', slug: 'zh-cn/quickstart' },
                { label: '下载与安装', link: 'https://fileuni.com/zh-cn/download' },
                { label: '安装为系统服务', slug: 'zh-cn/install-service' },
                { label: '功能特性', slug: 'zh-cn/features' },
                { label: '文件管理', slug: 'zh-cn/file-management' },
                { label: '文件分享', slug: 'zh-cn/sharing' },
                { label: '用户管理', slug: 'zh-cn/user-management' },
                { label: '重置管理员密码', slug: 'zh-cn/get-admin-passwd' },
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
