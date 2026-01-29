// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://teglgaardwood.dk',
  output: 'static',
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da', 'de', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    port: 5476,
    host: false
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  compressHTML: true
});
