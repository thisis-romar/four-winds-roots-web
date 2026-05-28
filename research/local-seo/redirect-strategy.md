---
title: "Redirect Strategy — Legacy URL Recovery"
version: "1.0"
last_updated: "2026-05-28"
status: active
category: seo
owner: internal
description: "Rationale and validation plan for site/public/_redirects. Maps stale URLs from legacy Guardian/R.O.O.T.S./Roots directory listings (Yellow Pages, Yelp, PharmacyList, Lumino, Cortico, Medimap, Ontario Health atHome, FedEx) onto the current Astro routes so link equity is preserved and patients land somewhere useful."
---

# Redirect Strategy — Legacy URL Recovery

## Why this exists

`FOLLOWUPS.md` flagged that redirect strategy was never discussed in the 666-message
import. Meanwhile the pharmacy has accumulated a long tail of directory listings
under three current trade-name variants plus the historical Guardian franchise name
(see `gbp-disambiguation.md`). Every one of those listings is a potential stale
backlink. When the new Astro site goes live, any of those URLs that miss the
current route map will 404 — losing both the patient and any link equity Google has
already passed to the address-canonical entity.

This document explains the categories in `site/public/_redirects` (which Astro
copies verbatim to `dist/_redirects` and Netlify processes on every deploy — same
mechanism we use for `_headers`).

## Categories and their directory targets

### 1. Legacy brand/name slugs → `/`

The pharmacy has three confirmed current trade-name variants and one historical
franchise name actively surfacing in search:

| Variant | Confirmed directories (per `gbp-disambiguation.md` Pass 3) |
|---|---|
| "R.O.O.T.S. Four Winds Pharmacy" | FedEx Authorized ShipCentre, PharmacyList.ca |
| "Four Winds Roots Pharmacy" | Lumino Health, Ontario Health atHome |
| "Roots Four Winds Pharmacy" | Yelp (via FedEx cross-reference) |
| "Guardian Four Winds Pharmacy" | Yellow Pages (historical — franchise left) |

Any of these can be guessed-as-slug by a patient or a directory editor backfilling
a website URL ("…probably at fourwindspharmacy.ca or /four-winds-pharmacy on the
canonical domain"). All variants collapse to `/` — the homepage owns the canonical
name in `<h1>`, `<title>`, and `schema.json`, so it's the right landing page for
brand-name traffic regardless of which variant the patient typed.

The Can Pharm Services Inc. entries (Medimap) also map here — the legal entity name
should never be the public-facing landing.

### 2. Service-name variants → `/services/<slug>/`

Directory taxonomies don't match our Astro slugs. Lumino uses "MedsCheck",
Ontario Health atHome uses "vaccinations" and "compounding", Medimap uses generic
"prescription delivery". Each variant maps to the closest current service page.
Notable mappings:

- `vaccinations`, `vaccines`, `immunizations`, `flu-shot`, `travel-health`,
  `paxlovid` → `/services/preventive-care/` (per IA decision to lead with
  "Preventive Care" language while keeping the SEO terms in body copy)
- `medscheck`, `meds-check`, `medication-review` → `/services/medication-reviews/`
- `compounding`, `herbs`, `natural-health`, `wellness` → `/holistic-wellness/`
  (compounding is **not** a confirmed service yet — landing on Holistic Wellness
  lets the patient self-route or convert without making a service claim we can't
  yet substantiate, per `gbp-disambiguation.md` and the IA doc)
- `york-university`, `york-u`, `student-pharmacy` → `/who-we-help/students/`

A defensive splat (`/services/*` → `/services/:splat`) catches any nested
service-page path we haven't enumerated.

### 3. Common typos and capitalization → canonical

Netlify matches the FROM path case-insensitively in practice, but documenting the
title-cased variants (`/About`, `/Contact`, `/Holistic-Wellness`) makes the intent
explicit for the next reviewer. Common typos seen in past stale links:
`holisitc-wellness`, `pharamcy`, `prescritpion-refills`. Cheap insurance.

### 4. Stale `index.html` / `.html` patterns

Old static-site exports and aggressive directory scrapers append `/index.html`,
`.html`, or `.htm` to slugs. The Yellow Pages "Guardian" listing in particular
shows a `.html` pattern in archived crawls. These all 301 to the trailing-slash
canonical Astro form.

### 5. Trailing-slash normalization

Astro's static build emits each route as `/path/index.html`, served canonically
at `/path/` with a trailing slash. Old links from directories may have been
captured without the trailing slash. Without explicit 301s, Netlify will serve
both versions and Google may treat them as duplicate content (or split signals).
We pin every public route's no-slash form to its canonical slash form.

### 6. FedEx co-location intercept → `/contact/`

The pharmacy is a FedEx Authorized ShipCentre at the same address and phone
(confirmed in `gbp-disambiguation.md`). Patients searching the FedEx locator
may end up on slugs like `/fedex` or `/ship-centre`. Routing them to `/contact/`
(where the FedEx co-location is described) converts a shipping search into a
pharmacy touchpoint.

## What is deliberately NOT redirected

- **`/admin/*`** — the Decap CMS surface. Stays at `/admin/` (already noindexed
  via `_headers` and `robots.txt`). No redirect needed.
- **`/404`** — handled by Astro's `404.astro`. We want a real 404 for truly
  unknown paths so search engines drop dead URLs rather than collapsing
  everything into the homepage.
- **External domain consolidation** (e.g., apex → www, or old domain →
  Netlify URL) — handled at the DNS/Netlify domain-config layer, not here.
  See `domain-shortlist.md`.

## Validation plan

### Pre-deploy (local Netlify Dev or branch deploy preview)

1. Run `npm run build` in `site/` and confirm `dist/_redirects` exists and matches
   `site/public/_redirects` byte-for-byte (Astro should copy it unchanged).
2. On the branch-deploy preview URL, smoke-test one rule per category:

   ```sh
   # Category 1 — legacy brand slug
   curl -sI https://<branch>.netlify.app/guardian-four-winds-pharmacy | grep -iE 'HTTP|location'
   # Expect: HTTP/2 301  +  location: /

   # Category 2 — service variant
   curl -sI https://<branch>.netlify.app/medscheck | grep -iE 'HTTP|location'
   # Expect: 301  +  location: /services/medication-reviews/

   # Category 4 — stale index.html
   curl -sI https://<branch>.netlify.app/index.html | grep -iE 'HTTP|location'
   # Expect: 301  +  location: /

   # Category 5 — trailing slash
   curl -sI https://<branch>.netlify.app/about | grep -iE 'HTTP|location'
   # Expect: 301  +  location: /about/

   # Category 6 — FedEx
   curl -sI https://<branch>.netlify.app/fedex | grep -iE 'HTTP|location'
   # Expect: 301  +  location: /contact/
   ```

3. Confirm none of the existing live routes (homepage, all `/services/*`,
   `/who-we-help/*`, `/about/`, `/contact/`, `/holistic-wellness/`,
   `/optical-wellness/`, `/accessibility/`, `/privacy-policy/`) return anything
   other than 200. A redirect rule that accidentally matches a real route is
   the main failure mode to watch for.

### Post-deploy (production)

1. Repeat the `curl -I` smoke tests above against the production domain once it
   cuts over (currently `https://charming-zuccutto-52dc64.netlify.app/`,
   eventually the chosen domain from `domain-shortlist.md`).
2. **Google Search Console — URL Inspection.** For each historical canonical
   that Search Console reports as indexed under a legacy slug, run URL
   Inspection on the old slug, confirm the "Page with redirect" status, then
   request indexing of the new target. Priority order:
   - Any URL containing `guardian` (Yellow Pages backlinks)
   - `r-o-o-t-s` variants (PharmacyList, FedEx-derived backlinks)
   - `four-winds-pharmacy` (the highest-volume guessed slug)
3. **Bing Webmaster Tools** — same URL-inspection flow; Bing is a non-trivial
   share of the seniors-age demographic.
4. **30-day directory recheck.** Per `gbp-disambiguation.md` step 5, re-audit
   Yellow Pages, Yelp, Lumino, Cortico, PharmacyList 30 days post-launch. For
   any directory still showing a slug-style URL that we didn't enumerate, add a
   rule and redeploy.

### Ongoing monitoring

- In Search Console, watch the **Pages → Page indexing → Page with redirect**
  report. Sudden spikes here are healthy (means old URLs are being recrawled
  and the redirects are being honored). A spike in **Not found (404)** for
  slugs we didn't catch is the signal to add a rule.
- Plausible (or whichever analytics ships) — watch for any `/404` page views;
  the referrer tells you which directory still has the stale link.

## Cross-references

- `gbp-disambiguation.md` — the canonical-name decision and full directory
  inventory this strategy is built against.
- `keyword-strategy.md` — the keyword-to-page map; service-name variant
  redirects align with the intent mapping there.
- `../../design/information-architecture.md` — the current sitemap (the
  destination side of every redirect).
- `../../site/public/_redirects` — the file this document explains.
- `../../site/public/_headers` — sibling Netlify config; same copy-from-public
  pattern, same proof-it-in-production approach.
- `../../FOLLOWUPS.md` — the open item this work closes.
