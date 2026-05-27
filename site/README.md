# Four Winds Roots Pharmacy — Astro Site Scaffold

**Status: Owner review scaffold — not production-ready.**

This is a structural scaffold for the Four Winds Roots Pharmacy website. It establishes the
design tokens, page routes, layout, and component inventory. All page content is placeholder
text — the real copy, photos, and confirmed data will be added in the next phase after owner
review.

## What's here

- `src/styles/` — design tokens (colours, typography, spacing) from `design/brand-direction.md`
- `src/layouts/BaseLayout.astro` — full accessible site shell: header, nav, footer, mobile action bar
- `src/pages/` — 12 page stubs with SEO titles and IA key-block comments
- `src/components/` — stubs for all components in `design/component-inventory.md`
- `src/data/schema.json` — Pharmacy JSON-LD structured data (with TODO markers for owner confirmation)
- `public/admin/` — Decap CMS stub (requires Netlify Identity setup before use)

## How to run locally

```bash
cd site
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser.

## Before go-live: owner confirmation needed

Search the codebase for `TODO:` comments — each marks something that needs owner input:

- Confirm business hours (all days including holidays)
- Confirm OCP registration number
- Confirm pharmacist name(s)
- Confirm final domain (`fourwindsrootspharmacy.ca` is currently a placeholder)
- Confirm delivery coverage area and time windows
- Provide GBP review URL for the ReviewRequestLink component
- Confirm optical and wellness service list
- Confirm languages spoken at the pharmacy
- Commission logo and take pharmacy photos (storefront, interior, optical area, team)
- Have PHIPA consent language on all forms reviewed before go-live

## Parent monorepo docs

This site lives inside the broader project monorepo. See:

- `../design/brand-direction.md` — colour palette, typography, brand voice
- `../design/information-architecture.md` — sitemap and page-by-page plan
- `../design/component-inventory.md` — full component list and requirements
- `../design/compliance-checklist.md` — AODA, PHIPA, and OCP compliance requirements
- `../research/local-seo/keyword-strategy.md` — keyword targets and on-page SEO plan
