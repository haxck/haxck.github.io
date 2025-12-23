import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwind from "@astrojs/tailwind";
// import algolia from "./src/utils/algolia.ts"
// import react from '@astrojs/react';

import { remarkImageModal } from './src/utils/markdown-image-plugin.ts';


// https://astro.build/config
export default defineConfig({
  site: 'https://blog.haxck.com',
  integrations: [mdx(), sitemap(), tailwind(),icon()],
  markdown: {
    remarkPlugins: [remarkImageModal],
  },
});