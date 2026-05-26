# Competitor Audit — Methodology

## Purpose

Rank the pharmacies near Four Winds Roots Pharmacy by the strength of their **digital presence**,
then translate the findings into concrete recommendations for Four Winds Roots' future website.

## What was scored

Eight competitors (see `competitors.json`) across nine weighted criteria (see
`scoring-criteria.json`). Each criterion is scored 0–5, then combined into a weighted total
out of 100 using:

```
weighted_total = Σ ( (criterion_score / 5) × criterion_weight )
```

Weights: Local SEO 15 · Trust 15 · Service Clarity 15 · Conversion 15 · Mobile 10 ·
Content 10 · Differentiation 10 · Accessibility 5 · Reputation 5  (= 100).

## The intended pipeline (and how this pass differs)

The original brief defined a 7-stage pipeline with dedicated tools — `fetch_competitor_page`,
`lookup_google_business_profile`, `check_mobile_usability`, `extract_pharmacy_signals`,
`score_criterion`, `compute_weighted_total`, `rank_competitors`. The real execution environment
maps to those as follows:

| Brief tool | Real-world tool | Status this pass |
|---|---|---|
| `fetch_competitor_page` (full HTML) | `WebFetch` | ❌ **Blocked** (HTTP 403 on every host) |
| `lookup_google_business_profile` | `WebSearch` + on-page widgets | ⚠️ Approximated (ratings/counts where surfaced) |
| `check_mobile_usability` (Lighthouse) | Manual HTML heuristic | ❌ Not run (needs page fetch) |
| `extract_pharmacy_signals` | Read fetched HTML | ⚠️ Done from search snippets only |
| `score_criterion` / `compute_weighted_total` / `rank_competitors` | Done by hand, transparently | ✅ Complete |

**This pass is therefore a WebSearch-based provisional audit.** It reliably captures: whether a
real site exists, NAP, hours, promoted services, brand affiliation, and review ratings where
public. It **cannot** verify: clickable phone, on-page form CTAs, image alt text, colour
contrast, mobile tap-target sizing, or exact title/heading tags.

## Confidence and guardrails applied

- All competitors carry **low confidence** on HTML-level criteria (Conversion, Mobile,
  Accessibility, and the on-page portion of Local SEO and Content), because zero pages were
  directly fetched. These scores are best estimates from website *type* and search evidence,
  and are flagged in the report's *Unverified claims* section.
- **Directory-only** competitors are capped at Local SEO ≤ 2 and Trust ≤ 3.
- Services are only credited where a search result explicitly named them; otherwise `not found`.
- The /100 figure is computed from the scores, never asserted independently.

## High-fidelity re-run (when web access is enabled)

1. Re-test egress: `WebFetch` one competitor URL + a control URL. Proceed only on HTTP 200.
2. For each competitor link: fetch → save raw evidence to `competitor-audit/raw/<id>.md` →
   extract signals → re-score with evidence quotes → recompute totals.
3. Run a mobile-usability heuristic on each fetched page (viewport meta, tap targets, font sizes).
4. Re-validate the report against the brief's output schema and update the *Unverified claims*
   list (it should shrink substantially).

## Sources

All data points were drawn from WebSearch results on **2026-05-26**: centralhealthline.ca,
torontocentralhealthline.ca, Lumino Health (Sun Life), Cortico, PharmacyList.ca, Yellow Pages,
Canpages, Nicelocal, Zaubee, Medimap, doctr.ca, guardian-ida-remedysrx.ca, Pharmasave/IDA brand
pages, dufferinfinchpharmacy.ca, unihealthcentre.ca, getmeds.ca, and the businesses' Instagram /
Facebook pages. Per-competitor citations live in `competitor-audit/raw/`.
