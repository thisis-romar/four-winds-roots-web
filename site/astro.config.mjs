import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TEMPORARY: pointed at the live Netlify URL so the canonical tag, og:url and sitemap match the
  // address Google can actually crawl. REVERT to 'https://fourwindsrootspharmacy.ca' once the .ca
  // domain is registered and connected to Netlify.
  site: 'https://charming-zuccutto-52dc64.netlify.app',
  integrations: [
    sitemap(),
  ],
});
