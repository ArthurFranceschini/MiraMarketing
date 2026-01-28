import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://miramarketing.com',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'pt',
      locales: {
        pt: 'pt-BR',
        es: 'es-ES'
      }
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});