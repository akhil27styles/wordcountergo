import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wordcountergo.com',
  integrations: [sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    serialize: (item) => {
      if (item.url === 'https://wordcountergo.com/') {
        item.changefreq = 'daily';
        item.priority = 1.0;
      } else if (item.url.includes('/about') || item.url.includes('/contact')) {
        item.changefreq = 'monthly';
        item.priority = 0.5;
      } else if (item.url.includes('/privacy') || item.url.includes('/terms')) {
        item.changefreq = 'yearly';
        item.priority = 0.3;
      }
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
