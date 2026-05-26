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

## Important data-collection caveat

The competitor audit in this repo was produced from **web-search results only**. The execution
environment currently blocks direct page fetching (`WebFetch`/`curl` return HTTP 403), so the
HTML-level criteria — clickable phone, on-page form CTAs, image alt text, colour contrast,
mobile tap-target sizing, exact title tags — **could not be directly verified**. Those scores are
**provisional and flagged**. See `research/competitor-audit/audit-report.md` → *Unverified claims*
and `research/00-methodology.md` for the planned high-fidelity re-run once web access is enabled.

## Key facts on file (verified via search)

- **Name / address:** Four Winds Roots Pharmacy, 3932A Keele St, North York, ON M3J 1N8
- **Phone:** (416) 398-8200 · **Fax:** (416) 398-6745
- **Rating:** 4.9★ (highest among nearby pharmacies surveyed)
- **Distinctive services:** holistic / herb–drug interaction review, blister packs, RAID home
  health supplies, blood-pressure kiosk, optical & wellness
- **Website:** none yet (this is the greenfield opportunity)
