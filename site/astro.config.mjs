import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fourwindsrootspharmacy.ca',
  // TODO: confirm final domain with owner before go-live
  integrations: [
    sitemap(),
  ],
});
