import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://danielajaramilloabogada.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Emit clean-url-friendly .html files (about.html, not about/index.html)
    // to pair with the .htaccess rewrite rules on Hostinger/Apache.
    format: 'file',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // sharp is the default service; kept explicit for clarity on Hostinger builds.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
