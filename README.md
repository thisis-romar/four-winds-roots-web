---
title: "Four Winds Roots Pharmacy — Project Overview"
version: "1.1"
last_updated: "2026-05-28"
status: active
category: meta
owner: internal
description: "Monorepo index and project overview for the Four Winds Roots Pharmacy web architecture and design research initiative."
---

# Four Winds Roots Pharmacy — Web Architecture & Design Research

A monorepo holding the **research** and **design / web-architecture** foundation for a future
website for **Four Winds Roots Pharmacy** (3932A Keele St, North York, ON M3J 1N8).

The pharmacy currently has **no dedicated website** — only third-party directory listings —
despite a strong **4.9★** local reputation. This repo gathers the competitive research and
design groundwork needed to launch a site that is **cost-conservative, distinctly branded, and
deliberately positioned away from big-box chains.**

> Status: **Research + planning phase.** No production site code yet. Everything here is meant
> to be reviewed and approved by the pharmacy owner before any build begins.

## How to navigate

```
research/                         What the market looks like and where the opportunity is
  00-methodology.md               How the competitor audit was run + scoring formula
  competitor-audit/
    competitors.json              The 8 audited competitors (structured data)
    scoring-criteria.json         The 9 weighted scoring criteria (weights sum to 100)
    audit-report.md               ★ Main deliverable: ranked audit + recommendations
    raw/                          Per-competitor evidence notes (one file each)
  local-seo/keyword-strategy.md   Keywords to target + which page each maps to
  market-positioning.md           The "independent & community, not big-box" strategy
  gold-standard-architecture.md   Industry gold standard for independent pharmacy sites

design/                           How the future site should be built
  information-architecture.md     Sitemap + page-by-page plan (12 pages)
  wireframes/                     Clickable HTML mockups (open in a browser)
  brand-direction.md              Colour, type, voice, logo direction
  component-inventory.md          Reusable building blocks for the site
  content-model.md                What content each page needs and who owns it
  compliance-checklist.md         AODA / WCAG 2.2 AA + PHIPA (Ontario) + OCP trust
  stack-recommendation.md         Recommended technology + cost model + alternatives
```

## Audit status — high-fidelity pass complete

The competitor audit has been through **two passes**:

1. **Initial pass (WebSearch only):** 8 competitors, provisional HTML-level scores.
2. **High-fidelity pass (2026-05-26):** Direct WebFetch of all competitor pages. HTML-level
   criteria — `tel:` links, `alt` text, title tags, meta descriptions, on-page forms, CTAs —
   **directly confirmed**. Audit expanded to **18 competitors**. Provisional caveats removed.

See `research/competitor-audit/audit-report.md` for the full verified results, including three
new strategic findings: the **AODA first-mover opportunity**, the **Sunday hours gap**, and the
**Can Pharm / "Four Winds" name-confusion issue** (critical for GBP disambiguation).

> **Key finding:** Every independent pharmacy in the competitive set fails WCAG 2.2 AA — no
> competitor has alt text on images. Four Winds Roots can launch as the first AODA-compliant
> independent pharmacy in the Keele/Finch corridor.

## Key facts on file (verified via search)

- **Name / address:** Four Winds Roots Pharmacy, 3932A Keele St, North York, ON M3J 1N8
- **Phone:** (416) 398-8200 · **Fax:** (416) 398-6745
- **Rating:** 4.9★ (highest among nearby pharmacies surveyed)
- **Distinctive services:** holistic / herb–drug interaction review, blister packs, RAID home
  health supplies, blood-pressure kiosk, optical & wellness
- **Website:** none yet (this is the greenfield opportunity)

## Deployment

The Astro site in `site/` deploys to Netlify on every push to `feature/astro-scaffold`.

- **Live URL:** https://charming-zuccutto-52dc64.netlify.app
- **Netlify site ID:** `1e8d8d8f-ff38-41a8-8c44-d4a1daf5ef8d` (account: `roots-4-winds-pharmacy`)
- **Repo connection:** `https://github.com/thisis-romar/four-winds-roots-web` (the local folder is named `roots-4-winds-pharmacy` but the GitHub remote is `four-winds-roots-web` — same repo, two names)
- **CI:** `.github/workflows/deploy.yml` runs on push and produces a Netlify deploy

### Required Netlify build settings (not in `netlify.toml`)

When (re-)creating the Netlify site, set these in **Site → Build & deploy → Build settings**. They are NOT reliably picked up from `netlify.toml` alone:

| Setting | Value |
|---|---|
| Base directory | `site` |
| Build command | `npm run build` |
| **Publish directory** | **`dist`** |

If publish directory is empty, Netlify publishes the *base* directory (i.e., `site/` itself), and every route returns 404 because there is no `index.html` at that root — even though the deploy status shows "ready". This bit us once; fixed on 2026-05-28 by setting `build_settings.dir = "dist"` via the Netlify API.

### Local one-off deploy

```powershell
cd site
netlify deploy --dir=dist                # preview (unique URL, doesn't touch production)
netlify deploy --dir=dist --prod         # promote to charming-zuccutto-52dc64.netlify.app
```

### What we know is missing

See [FOLLOWUPS.md](FOLLOWUPS.md) for the deploy-related and SEO gaps identified after the 2026-05-27 "Check if site is live" session.
