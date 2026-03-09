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
          translations: { 'zh-cn': '返回 FileUni 官网' },
          link: 'https://fileuni.com',
        },
        {
          label: 'Documentation',
          translations: { 'zh-cn': '使用文档' },
          items: [
            { label: 'Introduction', translations: { 'zh-cn': '产品介绍' }, link: '/introduction/' },
            { label: 'Quick Start', translations: { 'zh-cn': '快速开始' }, link: '/quickstart/' },
            {
              label: 'Install FileUni',
              translations: { 'zh-cn': '下载与安装' },
              link: 'https://fileuni.com/download',
            },
            { label: 'Install as Service', translations: { 'zh-cn': '安装为系统服务' }, link: '/install-service/' },
            { label: 'Features', translations: { 'zh-cn': '功能特性' }, link: '/features/' },
            { label: 'File Management', translations: { 'zh-cn': '文件管理' }, link: '/file-management/' },
            { label: 'Sharing', translations: { 'zh-cn': '文件分享' }, link: '/sharing/' },
            { label: 'User Management', translations: { 'zh-cn': '用户管理' }, link: '/user-management/' },
            { label: 'Reset Admin Password', translations: { 'zh-cn': '重置管理员密码' }, link: '/get-admin-passwd/' },
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
