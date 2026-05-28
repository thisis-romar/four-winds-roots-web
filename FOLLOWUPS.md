---
title: "Follow-ups identified after session_01QzYcqzdPke6WKiBkyg1d8W"
version: "1.0"
last_updated: "2026-05-28"
status: active
category: meta
owner: internal
description: "Gaps and loose ends from the 2026-05-27 'Check if site is live' session that the deploy fix on 2026-05-28 did not address. Sourced from analysis of the 666-message Claude Code session imported into CCR."
---

# Follow-ups — what we missed from the 2026-05-27 deploy session

The session `session_01QzYcqzdPke6WKiBkyg1d8W` ("Check if site is live") ran 13 hours, 22 human prompts, 219 tool calls, then froze at 15:43 UTC on a Bash permission prompt awaiting a Netlify auth-token check. On 2026-05-28 we unblocked and fixed the deploy itself (publish-dir misconfiguration). This file captures what the session *discussed but never closed*, plus what it *should have done but never raised*. Sourced empirically by querying the imported SQLite for topic frequency across all 666 messages.

## Critical — things that broke production for ~13 hours

1. **`netlify.toml`'s `publish = "dist"` was wrong, and nobody verified the live URL.** The CI showed "deploy succeeded" 5 times during the session; the production URL returned 404 the whole time. The session never `curl`'d the production URL to verify. **Lesson:** "deploy succeeded" is not "site is live."
2. **No CI smoke-test.** The GitHub Action exited successfully even though every route was 404. Adding a 5-line `curl -fsS $URL > /dev/null` step would have caught this. **Implemented in this commit** — see `.github/workflows/deploy.yml`.
3. **Dashboard build settings are server-side state, not in git.** The fix (`build_settings.dir = "dist"`) was made via API. If someone rebuilds the Netlify site from scratch, they would hit the same bug. **Documented** in `README.md` § Deployment.

## High leverage — discussed in the session but never finished

| Gap | SQLite mentions | What's needed |
|---|---|---|
| **Custom domain** | 4 | Decide on a real domain (`fourwindsroots.ca`?). Currently stuck on `charming-zuccutto-52dc64.netlify.app` which is fine for staging, terrible for GBP / cards / SEO. |
| **Env vars** | 25 | Session asked "do we need to add env bars" — final answer never confirmed. Inventory required values (Plausible site ID, Jane App embed ID, OceanMD form IDs) and document in `README.md`. |
| **Lighthouse audit** | 0 | Never run. Run `npx lighthouse https://charming-zuccutto-52dc64.netlify.app --view` and act on the report — especially A11y and SEO. Owner gap commitment was "first AODA-compliant independent pharmacy in the corridor"; needs evidence. |
| **WCAG 2.2 AA verification** | 5 | Mentioned but no audit run. Pair with Lighthouse + `pa11y`. |
| **Form submission paths** | 103 | Forms heavily discussed but session never verified an end-to-end submission. At minimum: contact form → does the recipient address receive? Refill / transfer forms → where do PHIPA-protected fields go? |
| **PHIPA compliance review** | 34 | Lots of discussion, no documented sign-off. Need a `compliance-checklist.md` walkthrough explicitly mapped to the deployed site. |

## Sparse or missing entirely

| Gap | SQLite mentions | Why it matters |
|---|---|---|
| **301 redirects** | **0** | A pharmacy on GBP / Yelp / Yellow Pages will have backlinks pointing at old listings. Need a `_redirects` file or `netlify.toml` `[[redirects]]` block. Even just `/old-services/* → /services/:splat 301`. |
| **~~`schema.org` LocalBusiness JSON-LD~~** | ~~0 (jsonld: 2)~~ | ✅ **Already implemented** — discovered 2026-05-28 at `site/src/data/schema.json` (220 lines, `@type: Pharmacy`, 12 services, 2 named employees, geo, hours, aggregate rating, alternate names, payment methods, areaServed, FedEx co-tenant listing). Rendered into `<head>` by `BaseLayout.astro` with `@comment_*` fields stripped. **Real issue:** the schema's `url`, `<link rel="canonical">`, and `og:url` all point at the unregistered `fourwindsrootspharmacy.ca`. Google will refuse to index the current Netlify URL because canonical points elsewhere that doesn't resolve. See "Canonical mismatch" below. |
| **Open Graph / Twitter card defaults** | 0 (OG image: 6) | Default OG image and metadata for every page. Without it, social shares render broken. |
| **HSTS preload** | 0 | `netlify.toml` already sets `X-Frame-Options` etc. but not HSTS. `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` and submit to `hstspreload.org`. |
| **`robots.txt` content review** | 2 | Astro generates one but content unverified. Confirm it allows indexing of pages we want indexed and blocks `/admin/`. |
| **Sitemap submission** | 12 | Sitemap is generated (`/sitemap-index.xml`). Submit to Google Search Console + Bing Webmaster Tools. |
| **Automated tests** | vitest: 0 | No tests at all. At minimum, a Playwright e2e that visits each page and asserts `<h1>` exists. |
| **PWA / manifest** | 0 | Not required, but `manifest.webmanifest` + offline shell would polish the mobile experience. Low priority. |
| **Branch strategy** | merge: 5 | Currently deploying off `feature/astro-scaffold` directly. Production should be `main`. Plan a merge + retarget the Netlify production branch. |
| **GitHub Action vs Netlify-native build** | — | Both fired on the same push (we saw two `ready` deploys 2 seconds apart for commit `4e6e7c1`). Pick one. The Netlify-native build is simpler; the Action lets you pin Node version. Recommend deleting `.github/workflows/deploy.yml` once happy with Netlify-native. |

## Critical SEO issue discovered 2026-05-28 — Canonical mismatch

The site is live at `https://charming-zuccutto-52dc64.netlify.app/` but every URL-bearing piece of metadata claims it lives at `https://fourwindsrootspharmacy.ca`:

- `<link rel="canonical">` → `fourwindsrootspharmacy.ca`
- `<meta property="og:url">` → `fourwindsrootspharmacy.ca`
- JSON-LD `url`, `logo`, `image` → `fourwindsrootspharmacy.ca`

The aspirational domain is **not registered**. Effect: Google sees the canonical pointing at a URL that doesn't resolve, refuses to index the actual served URL, and the site never enters Search results despite being fully crawlable. Until either (a) the domain is registered + pointed at Netlify, or (b) the schema/canonical is rewritten to the current Netlify URL, the site is functionally invisible to organic search.

**Recommended next step:** decide on the production domain. **`fourwindsrootspharmacy.ca` is verified available** as of 2026-05-28 (DNS NXDOMAIN against authoritative `.ca` servers) and is what the existing schema/canonical/og:url already point at — registering it = zero migration. See [`research/local-seo/domain-shortlist.md`](research/local-seo/domain-shortlist.md) for the ranked 12-domain shortlist + recommended bundles. Then configure Netlify custom domain (apex + www), Let's Encrypt provisions automatically, verify in Google Search Console.

## Non-implementation gaps the session raised but didn't resolve

- **"What design issues did we miss?"** (prompt at 13:56) — review never completed before the session froze.
- **"Are we using computer use or playwrite which one is faster"** (prompt at 15:00) — answered as a side-discussion, no architectural decision recorded.
- **The session was conflating two repos** (`four-winds-roots-web` vs `roots-4-winds-pharmacy`). Suggest a one-time rename or a `REPO_NAMES.md` clarifying the legacy.

## Suggested execution order

1. ✅ **Add CI smoke-test** — done in this commit (`.github/workflows/deploy.yml`)
2. ✅ **Document the publish-dir gotcha** — done in `README.md`
3. Add `LocalBusiness` JSON-LD to the homepage (highest local-SEO ROI)
4. Set up Lighthouse CI (one workflow run gives you the whole punch list)
5. Pick a custom domain + decide on Netlify DNS vs external
6. Wire 301 redirects from likely old URLs
7. Add Open Graph defaults via Astro layout
8. Run end-to-end form submission tests with Playwright
9. Document PHIPA compliance with explicit page-by-page evidence
10. Cutover from `feature/astro-scaffold` to `main` as the deploy branch
