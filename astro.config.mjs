import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// import algolia from "./src/utils/algolia.ts"
// import react from '@astrojs/react';




// https://astro.build/config
export default defineConfig({
  site: 'https://haxck.com',
  integrations: [mdx(), sitemap(), icon(), vue()],

  markdown: {
    remarkPlugins: [],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});