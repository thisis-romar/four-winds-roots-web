---
title: "Four Winds Roots Pharmacy — Project Overview"
version: "2.0"
last_updated: "2026-06-16"
status: active
category: meta
owner: internal
description: "Monorepo index and onboarding guide for the Four Winds Roots Pharmacy website (Astro site) plus its research and design foundation."
---

# Four Winds Roots Pharmacy — Website Monorepo

A single repository holding the **website** for **Four Winds Roots Pharmacy**
(3932A Keele St, North York, ON M3J 1N8) together with the **research** and **design**
foundation it was built from.

> Status: **Site built — pre-launch cleanup in progress.** The Astro site in `site/` is built
> and deploys to Netlify. A short go-live to-do list remains (real opening hours, domain
> registration, owner content). See **[docs/GUIDANCE.md](docs/GUIDANCE.md)** for the prioritized
> plan and **[FOLLOWUPS.md](FOLLOWUPS.md)** for deploy/SEO gaps.

## Repository layout

```
site/                             The website — an Astro static site (the deployable app)
  src/pages/                      File-based routes (~17 pages)
  src/components/                 Reusable UI (CallButton, HoursTable, SchemaJsonLd, forms…)
  src/layouts/BaseLayout.astro    Accessible site shell (head, header, footer, mobile bar)
  src/data/schema.json            LocalBusiness/Pharmacy JSON-LD source data
  astro.config.mjs                Canonical site URL + integrations
  netlify.toml                    Build + security headers (see Deployment below)

research/                         Market research the site is positioned on
  competitor-audit/audit-report.md  ★ Ranked 18-competitor audit + recommendations
  local-seo/                      Keyword strategy + GBP disambiguation + schema draft
  market-positioning.md           "Independent & community, not big-box" strategy
  phipa-vendor-comparison.md      PHIPA-safe form/booking vendor comparison (for site forms)

design/                          How the site is built
  information-architecture.md     Sitemap + page-by-page plan
  brand-direction.md              Colour, type, voice, logo direction
  compliance-checklist.md         AODA / WCAG 2.2 AA + PHIPA (Ontario) + OCP trust
  component-inventory.md          Reusable building blocks

docs/                            Decisions & guidance
  GUIDANCE.md                     Go-live action plan (URGENT/FIX SOON/MINOR, owner vs dev)
  decisions/ADR-0001-…            Repository-architecture decision (single monorepo, no Nx)
```

## Working on the site

The app lives in `site/`. From the repo root:

```bash
cd site
npm install            # install dependencies
npm run dev            # local dev server (hot reload)
npm run build          # production build → site/dist/
npm run preview        # serve the production build locally
```

Node 20+ recommended. The build output (`site/dist/`) and `node_modules/` are git-ignored.

## Contributor rules (read before editing site content)

- **Never present either pharmacist as a physician.** Do **not** add "Dr." in front of Winston
  Clarke (he is "the pharmacist") or Pamela Clarke (she is "Natural Health Practitioner and
  wellness author"). Ontario regulates how pharmacists use the title "Doctor," and Pamela's
  doctoral certificate is not from a recognised Ontario health regulator. This is the single
  highest-risk area for a pharmacy site — keep it as-is. See `docs/GUIDANCE.md` §6.
- **Do not publish unconfirmed services or facts.** Opening hours, the legal company name, the
  optical/wellness service list, and any compounding claim must be owner-confirmed before they
  go live. Use HTML comments for builder notes — never visitor-visible `TODO:` text.

## Deployment

The Astro site in `site/` deploys to **Netlify**. The trunk branch is **`main`**.

- **Live (preview) URL:** https://charming-zuccutto-52dc64.netlify.app
- **Intended production domain:** `fourwindsrootspharmacy.ca` *(registration pending — set as the
  canonical `site:` in `site/astro.config.mjs`; until registered, search visibility is limited)*
- **Netlify site ID:** `1e8d8d8f-ff38-41a8-8c44-d4a1daf5ef8d` (account: `roots-4-winds-pharmacy`)
- **CI:** `.github/workflows/deploy.yml` runs on push and produces a Netlify deploy

> **Note:** confirm Netlify's *Production branch* is set to **`main`** (Site → Build & deploy →
> Continuous deployment) now that `main` is the repository's trunk.

### Required Netlify build settings (not reliably read from `netlify.toml`)

Set these in **Site → Build & deploy → Build settings**:

| Setting | Value |
|---|---|
| Base directory | `site` |
| Build command | `npm run build` |
| **Publish directory** | **`dist`** |

If the publish directory is empty, Netlify publishes the *base* directory (`site/` itself) and
every route returns 404 even though the deploy shows "ready". (Fixed 2026-05-28 by setting
`build_settings.dir = "dist"` via the Netlify API.)

### Local one-off deploy

```bash
cd site
netlify deploy --dir=dist            # preview (unique URL, doesn't touch production)
netlify deploy --dir=dist --prod     # promote to production
```

## Key facts on file (verified)

- **Name / address:** Four Winds Roots Pharmacy, 3932A Keele St, North York, ON M3J 1N8
- **Phone:** (416) 398-8200 · **Fax:** (416) 398-6745
- **Rating:** 4.9★ (highest among nearby pharmacies surveyed)
- **Distinctive services:** holistic / herb–drug interaction review, blister packs, free delivery,
  medication reviews, optical & wellness
- **Opening hours:** ⚠️ **unconfirmed** — must be verified by phone before launch
