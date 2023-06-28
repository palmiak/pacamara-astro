import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [tailwind(), alpine(), image(), mdx()]
});