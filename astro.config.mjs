import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'vi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
