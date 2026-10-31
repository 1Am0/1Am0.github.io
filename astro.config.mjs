// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://1am0.github.io',
  integrations: [mdx(), sitemap()],
  // The stylesheet is small, so inline it to avoid a render-blocking request.
  build: { inlineStylesheets: 'always' },
  vite: {
    // The 3D model viewer (three.js) is ~1 MB but only loads on pages that show a model.
    build: { chunkSizeWarningLimit: 1200 },
  },
  // Code blocks follow the site theme (colors are switched in global.css).
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
  // Fonts are downloaded at build time and served from this site (no third-party requests).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
