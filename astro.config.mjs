// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://nowcitylabs.com',

  integrations: [
    tailwind({
      applyBaseStyles: false, // we'll manage our own base in src/styles/global.css
    }),
    preact(),
  ],

  output: "hybrid",

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare()
});