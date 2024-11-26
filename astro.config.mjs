import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import algolia from "./src/utils/algolia.ts"


// https://astro.build/config
export default defineConfig({
  site: 'https://blog.haxck.com',
  integrations: [mdx(), sitemap(), tailwind(),algolia()],
});