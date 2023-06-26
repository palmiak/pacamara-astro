import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpine()]
});