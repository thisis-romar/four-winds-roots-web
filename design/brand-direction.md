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
