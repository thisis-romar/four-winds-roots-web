---
title: "Lighthouse Baseline — Live Site Audit (v1)"
description: "First Lighthouse baseline for the production Netlify deployment, covering Performance, Accessibility, Best Practices, and SEO across five representative pages, with ranked findings and cheapest-three next steps for the AODA-credibility commitment."
version: "1.0.0"
created: "2026-05-28"
last_updated: "2026-05-28"
status: active
category: research
owner: internal
---

# Lighthouse Baseline — Live Site Audit (v1)

This is the first Lighthouse audit of the production deployment at
`https://charming-zuccutto-52dc64.netlify.app/`. It establishes the score baseline that subsequent
performance and accessibility work will be measured against, and it operationalises the AODA
positioning commitment from `research/market-positioning.md` ("first AODA-compliant independent
pharmacy in the Keele/Finch corridor") by surfacing the WCAG-relevant defects Lighthouse is able to
detect automatically.

## How this baseline was taken

- **Tool:** Lighthouse `13.3.0` (installed locally with `npm install --no-save lighthouse` in a
  scratch directory; root `site/package.json` was not touched).
- **Runner:** `npx lighthouse <url> --chrome-flags="--headless" --output=json
  --output-path=stdout --quiet --only-categories=performance,accessibility,best-practices,seo`
- **Pages audited (5):** `/`, `/about/`, `/contact/`, `/services/refills/`, `/holistic-wellness/`.
- **Conditions:** Single cold-cache run per page from a Windows desktop on residential broadband.
  Numbers are single-sample, not a smoothed median — variance of ±5 points on Performance between
  identical runs is normal. The Performance score for `/holistic-wellness/` in particular reflects
  a cold-CDN edge fetch and should be re-checked after the next deploy stabilises.

> **Limitation flag.** Lighthouse 13.3.0 prints an `EBADENGINE` warning because it requests Node
> `>=22.19` and we are on Node `20.12.2`. All five runs completed and produced full JSON reports;
> only the temp-dir cleanup raises an `EPERM` after the report is written. The data below is real.
> Re-run on Node 22 LTS before treating any single number as authoritative.

## Per-page scores

Scores are 0-100, taken from `categories.<id>.score * 100`, rounded.

| Page                  | Performance | Accessibility | Best Practices | SEO |
|-----------------------|------------:|--------------:|---------------:|----:|
| `/`                   |          78 |            96 |             96 | 100 |
| `/about/`             |          94 |            96 |             96 | 100 |
| `/contact/`           |          94 |            97 |             96 | 100 |
| `/services/refills/`  |          98 |            97 |             96 | 100 |
| `/holistic-wellness/` |          59 |            96 |             96 | 100 |

Core Web Vitals snapshot (for context on the Performance column):

| Page                  | LCP    | FCP    | TBT    | CLS   | SI      |
|-----------------------|-------:|-------:|-------:|------:|--------:|
| `/`                   |  3.1 s |  3.1 s |   0 ms | 0.008 | 14.8 s  |
| `/about/`             |  2.1 s |  1.9 s | 180 ms | 0.082 |  2.4 s  |
| `/contact/`           |  2.0 s |  1.9 s | 190 ms | 0.006 |  3.1 s  |
| `/services/refills/`  |  1.7 s |  1.7 s |  90 ms | 0.016 |  2.3 s  |
| `/holistic-wellness/` |  6.4 s |  6.4 s |   0 ms | 0.018 | 10.4 s  |

## Top 10 actionable findings, ranked by impact

Ranking blends estimated LCP/FCP/TBT savings (ms), accessibility audit weight, and the number of
pages affected. Category tags: **[PERF]**, **[A11Y]**, **[BP]**, **[SEO]**.

1. **[PERF] Render-blocking Google Fonts stylesheet** — every page. Estimated savings: 1.21 s on
   `/`, 4.71 s on `/holistic-wellness/`, 140-210 ms elsewhere. The blocking resource is
   `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;700&display=swap`.
   `display=swap` is already set, but the CSS request itself still blocks render until it returns.
   **Fix:** self-host the two font families under `/public/fonts/` and reference them with a local
   `@font-face` block (with `font-display: swap`), or inline a critical `@font-face` and preload
   the WOFF2 files; either way drops the cross-origin handshake to `fonts.googleapis.com` and
   `fonts.gstatic.com`. This single fix is the largest available perf win.
2. **[PERF] Render-blocking `about.8AKBOxKU.css`** — every page (~2.8 KB each).
   This Astro-scoped stylesheet is being loaded on pages that are not `/about/`. **Fix:** confirm
   the component that owns this scoped CSS is actually used on every page; if it is shared layout
   chrome, hoist it into the global stylesheet so it ships in one request instead of two.
3. **[A11Y] Insufficient color contrast on `.btn-transfer` and `.tel-protected` (footer phone)** —
   every page, audit weight 7 of 10 in the Accessibility category. AODA / WCAG 2.1 AA requires
   a 4.5:1 contrast ratio for normal text and 3:1 for large text and UI components. This is the
   single biggest A11y-score lever and the one most material to the brand positioning. Failing
   elements include:
   - `<a class="btn btn-transfer" href="/services/transfers">` (homepage hero, refills CTA)
   - `<a class="tel-protected footer-nap__phone" href="tel:4163988200">` (footer on every page)
   - `<a class="btn btn-transfer" href="#refills-form">` (refills page)
   - Lumino Health partner link (homepage)
4. **[PERF] Initial server response time** — every page, 190-580 ms TTFB. Estimated savings
   ~2.2 s aggregate. Netlify edge caching should keep this <100 ms on warm fetches; the elevated
   numbers suggest these were cold-cache hits. **Fix:** retest with a warm cache; if still high,
   review the Netlify `cache-control` / `Netlify-CDN-Cache-Control` headers in `netlify.toml`.
5. **[PERF] Largest Contentful Paint** — `/` at 3.1 s (score 0.10), `/holistic-wellness/` at
   6.4 s (score 0.10). Both pages have LCP === FCP, meaning the LCP element renders together
   with first paint and the entire delay is upstream of paint (TTFB + render-blocking CSS).
   Fixing findings #1 and #4 should pull both pages into the green.
6. **[BP] / [PERF] `favicon.ico` returns 404 on every page**. This is also the only failing
   Best Practices audit and the sole reason BP sits at 96 instead of 100. **Fix:** add
   `site/public/favicon.ico` (or update the `<link rel="icon">` in the base layout to point at
   the existing SVG/PNG favicon — depends on what is actually shipped).
7. **[PERF] Minimize main-thread work** — 2.3-3.0 s across pages, with 5 long tasks on
   `/about/`, `/contact/`, `/services/refills/`. Modest impact on a near-static Astro site but
   worth checking what JS the `tel-protected` phone-obfuscation script and any Astro islands
   are doing on mount.
8. **[PERF] Speed Index on `/`** — 14.8 s, despite LCP of only 3.1 s. Speed Index measures how
   quickly the *above-the-fold* area visually populates; a high SI with low LCP usually means
   late-arriving images or web fonts cause a perceived "second paint." Self-hosting fonts
   (finding #1) is the dominant fix here too.
9. **[A11Y informative] `label-content-name-mismatch` on `tel:` links** — informative
   (weight 0, no score impact), but worth flagging because it is a direct side-effect of the
   anti-spam phone obfuscation. Every protected phone link has
   `aria-label="Call 4 1 6 - 3 9 8 - 8 2 0 0"` while the visible text is also spaced/digit-split,
   so the accessible name does not begin with the visible text. WCAG 2.5.3 "Label in Name"
   compliance requires the accessible name to contain the visible label string. **Fix:**
   normalise both the visible text and the aria-label to the same canonical "Call 416-398-8200"
   format, or remove the aria-label and let the visible text be the accessible name.
10. **[PERF] Forced reflow on `/`**. Lighthouse flags forced synchronous layout during initial
    load on the homepage only. Lower priority than the font fix — investigate after #1 lands,
    since render-blocking changes will shift the layout pipeline.

## Accessibility findings called out (AODA positioning)

The Accessibility category sits at 96-97 across all five pages. Two automated findings appear,
both already listed above:

- **`color-contrast` (weight 7)** — the AODA-material defect. Recurs on every page on the
  `.btn-transfer` button and the footer `.tel-protected` phone link. Fixing this single CSS
  rule should move every page to 100 Accessibility, modulo any contrast issues the automated
  audit cannot see.
- **`label-content-name-mismatch` (weight 0, informative)** — the spam-obfuscated phone links.
  No score impact, but a WCAG 2.5.3 ("Label in Name") failure in practice and a real annoyance
  for users on voice-control assistive tech ("Click Call 416-398-8200" will not match).

Automated audits cover roughly 30% of WCAG criteria. A score of 100 from Lighthouse is necessary
but not sufficient for the "first AODA-compliant independent pharmacy" claim — manual keyboard,
screen-reader, and zoom testing should be scheduled before the marketing language is published.

## Next steps — the cheapest three fixes

In rough order of effort-to-impact ratio:

1. **Add a `favicon.ico`** (or correct the link tag). One file in `site/public/`. Moves Best
   Practices from 96 to 100 across every page and clears the console error that ships to every
   visitor.
2. **Fix the `.btn-transfer` and `.tel-protected` (footer phone) contrast.** One stylesheet
   edit. Moves Accessibility to 100 across every page and removes the only automated AODA
   defect blocking the positioning claim.
3. **Self-host the Inter and Lora WOFF2 files and replace the
   `fonts.googleapis.com/css2?...` `<link>` with a local `@font-face` block.** One layout
   change plus two font files in `site/public/fonts/`. Eliminates the largest single
   render-blocking resource, pulls `/` LCP from 3.1 s toward 2.0 s, and is the dominant lever
   for `/holistic-wellness/` once a warm-cache run confirms the 6.4 s figure.

All three are touch-three-files-or-fewer changes. None require Astro plugins, new dependencies,
or a router change.
