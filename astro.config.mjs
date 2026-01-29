import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import edgeoneAdapter from "@edgeone/astro";
import tailwind from "@astrojs/tailwind";


import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://www.plumesky.com',
  adapter: edgeoneAdapter(),
  integrations: [react(), tailwind(), sitemap()]
});