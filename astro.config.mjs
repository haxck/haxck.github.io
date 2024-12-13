import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwind from "@astrojs/tailwind";
// import algolia from "./src/utils/algolia.ts"
// import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://blog.haxck.com',
  redirects: {
    '/': '/posts/'
  },
  integrations: [mdx(), sitemap(), tailwind(),icon()],
});