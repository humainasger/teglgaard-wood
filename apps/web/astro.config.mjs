// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://teglgaardwood.dk',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    port: 4321,
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
