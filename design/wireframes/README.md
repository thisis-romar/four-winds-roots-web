# Wireframes

Low-fidelity, **clickable HTML mockups** to show structure, hierarchy, and conversion flow — not
the final visual design. Open the files directly in any browser.

| File | Page | Demonstrates |
|---|---|---|
| `homepage.html` | Home | Positioning hero, Call/Transfer CTAs, 4.9★ reputation strip, service grid, holistic+optical highlight, segments, reviews, NAP+map, sticky mobile action bar |
| `prescription-transfer.html` | Prescription Transfers | A top conversion flow + a **PHIPA-conscious form** (minimal fields, explicit consent, phone fallback) |
| `contact.html` | Contact / Location / Hours | NAP, click-to-call, map placeholder, hours table, after-hours guidance, health-data-free contact note |

They share starting **brand tokens** from `../brand-direction.md` (colours, type, spacing) and a
mobile-first, accessible baseline (skip link, semantic headings, labelled forms, visible focus,
sticky mobile action bar). Placeholder content is bracketed `[like this]` and must be confirmed
with the owner per `../content-model.md`.

**Caveats:** colours are starting values and must be contrast-checked to WCAG 2.2 AA before use;
forms are non-functional mockups; the map is a placeholder box. The real build uses the components
in `../component-inventory.md` on the stack in `../stack-recommendation.md`.
