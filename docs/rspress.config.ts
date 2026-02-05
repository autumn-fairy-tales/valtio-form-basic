import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  route: {
    cleanUrls: true,
  },
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Fairys Valtio Form',
    },
  ],
  lang: 'zh',
  base: process.env.NODE_ENV === 'production' ? '/valtio-form-basic/' : '/',
  root: path.join(__dirname, 'docs'),
  title: 'Fairys Valtio Form',
  icon: '/logo.png',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  logo: {
    light: '/logo.png',
    dark: '/logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/autumn-fairy-tales/valtio-form-basic',
      },
    ],
  },
});
