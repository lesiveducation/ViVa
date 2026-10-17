import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lesiveducation.github.io',
  base: '/ViVa',
  // Конструктор пока на демо-ценах: не отдаём его поисковикам.
  integrations: [sitemap({ filter: (page) => !page.includes('/konstruktor/') })],
});
