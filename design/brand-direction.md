---
title: "Brand Direction"
version: "1.1"
last_updated: "2026-05-27"
status: review
category: design
owner: pending_owner_review
description: "Starting brand system for Four Winds Roots Pharmacy covering personality, colour palette, typography, logo direction, and imagery guidelines."
---

# Brand Direction

A starting brand system for Four Winds Roots Pharmacy. The goal: **holistic-yet-clinical** — calm
and natural enough to signal whole-person wellness, clean and professional enough to signal
pharmacy trust — and **hand-crafted** so it never looks like a chain or a templated pharmacy
builder. This is direction for review, not a final identity.

## Brand personality

- **Rooted, natural, whole-person** — the "Roots" and holistic story.
- **Trustworthy and professional** — it's still a regulated pharmacy.
- **Warm and local** — a neighbour who knows you, the opposite of big-box.
- **Calm and clear** — reduces anxiety; works for seniors and stressed caregivers.

Voice: plain, warm, direct. Short sentences. No jargon, no hype, no unsupported health claims.
Speak to "you". Lead with help ("Transfer your prescription in two minutes"), not features.

## Colour palette (proposed)

A nature-grounded core with a clean clinical neutral and an accessible action colour.

| Role | Suggested | Use |
|---|---|---|
| Primary (rooted green) | deep botanical green `#2E5D4B` | headers, primary buttons, brand |
| Secondary (earth) | warm clay/terracotta `#C2724B` | accents, holistic/wellness highlights |
| Calm (sky/sage) | soft sage `#A8C3A1` / pale sky `#DCEAE4` | section backgrounds, calm areas |
| Action (high-contrast) | strong teal/green `#1B7F66` | Call / Transfer CTAs (verify contrast) |
| Ink (text) | near-black `#1F2421` | body text |
| Paper | off-white `#FAFAF7` | page background |

> All foreground/background pairs must clear **WCAG 2.2 AA contrast** (4.5:1 body, 3:1 large text).
> The hex values above are a starting point — verify each pair with a contrast checker before use.
> Avoid relying on colour alone to convey meaning (accessibility).

## Typography

- **Headings:** a friendly-but-professional humanist serif or grotesque (e.g., a serif like
  "Lora"/"Source Serif" for warmth, or a clean grotesque for clinical feel) — pick one direction.
- **Body:** a highly legible sans-serif (e.g., "Inter" / "Source Sans") at **generous sizes**
  (≥18px body) with comfortable line spacing — important for seniors.
- System-font fallback stack for performance.
- One heading + one body family maximum; weights for hierarchy. Keep it light for load speed.

## Logo direction

- The "four winds" + "roots" concept suggests a simple mark: roots/leaf forms, or a compass/four-
  point motif, paired with a clean wordmark. Keep it legible at small (favicon/GBP) sizes.
- Avoid generic mortar-and-pestle/green-cross clichés that read "any pharmacy".
- Deliverables when commissioned: horizontal + stacked lockups, monochrome version, favicon,
  and a social/GBP avatar crop.

## Imagery

- **Real and local:** the actual storefront, team, optical area, Keele & Finch context.
- Warm, natural light; people-centred; diverse and multilingual community.
- **Avoid** stock corporate-pharmacy photography (the chain/template tell).
- All meaningful images need descriptive **alt text** (accessibility + SEO).

## Design tokens (for handoff to the build)

When the site is built, encode these as CSS custom properties / Astro theme tokens so the brand is
consistent and easy to adjust:

```
--color-primary, --color-secondary, --color-calm, --color-action,
--color-ink, --color-paper
--font-heading, --font-body
--space-* (spacing scale), --radius-*, --shadow-*
--text-base (>=18px), --line-height-base
```

## Anti-patterns to avoid

- Looking like a Pharmasave/I.D.A./Remedy'sRx template (the competitor sameness).
- Big-box / discount-store aesthetics.
- Tiny fonts, low contrast, dense walls of text.
- Over-claiming holistic/health benefits.

## Pass 3 — Confirmed Primary-Source Facts (2026-05-27)

*Sources: Ontario Health atHome directory March 2026, Lumino Health May 2026, FedEx locator.*

### Holistic brand descriptor (confirmed)

The Ontario Health atHome directory describes the pharmacy as a **"registered holistic pharmacy that deals with herbs and drug interactions."** This is the strongest confirmed brand differentiator available from primary sources. Safe usage: "holistic pharmacy" or "holistic philosophy." Do not write "OCP-registered holistic pharmacy" — "registered" in atHome's phrasing refers to OCP community pharmacy registration, not a separate holistic credential. See `compliance-checklist.md`.

### Personnel voices

- **Winston Clarke (Pharmacist)** — the pharmacist's voice: clinical credibility, prescription services, MedsCheck, minor ailments, ODB programs. All regulated healthcare claims must be attributed to him or the pharmacy in his capacity as pharmacist.
- **Pamela Clarke (Natural Health Practitioner)** — the wellness voice: whole-person health, herbs, natural health products. Also author of *Take Control Now: Your Health Is Your Responsibility* (FriesenPress, 2015) — cite book + publisher for credibility. Do not list individual credentials or append "RN" — see `compliance-checklist.md`.

### Reputation signal (for brand/social copy)

Rated **4.9/5 based on 52 patient ratings on Lumino Health** (as of May 2026). Cite as: "Rated 4.9/5 on Lumino Health (52 patient ratings)" — not as a clinical quality endorsement. This is the highest rating among pharmacies surveyed in the Keele/Finch corridor and is a genuine brand asset.

### Dispensing fee

Confirmed dispensing fee: **$12.99 per prescription**. Suitable for transparent pricing copy (Trust section, FAQ) — a competitive signal vs. chain pharmacies.

### FedEx co-brand

**FedEx Authorized ShipCentre** is confirmed co-located at 3932A Keele St (same phone). Useful as a community convenience signal in brand narrative and Contact page copy.
