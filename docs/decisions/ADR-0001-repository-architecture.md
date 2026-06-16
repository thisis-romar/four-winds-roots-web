# ADR-0001 — Repository Architecture for `four-winds-roots-web`

- **Status:** Proposed
- **Date:** 2026-06-16
- **Deciders:** Emblem Projects / EMBLEM-NLP
- **Governs:** macro + micro structure of this repository
- **Standard:** EMBLEM-NLP-SOP-001 — Repository Architecture & Code Topology, v1.2.0 (§7, §8 Phase 1)

## Context

The repository contains three things:

- `site/` — a built **Astro** static website (~20 pages) for Four Winds Roots Pharmacy.
- `research/` — competitor audit, SEO, positioning, and PHIPA vendor research (Markdown/JSON).
- `design/` — information architecture, wireframes, brand, compliance, content model.

At the time of writing, the built site lives only on the feature branch
`feature/astro-scaffold`, and the repository has **no `main`/trunk branch**. The SOP requires that
the macro (Git boundary) and micro (module layout) patterns be chosen explicitly and recorded in an
ADR before a repository is considered conformant.

## Decision

### Macro pattern — single repository ("lightweight monorepo")

Keep `site/`, `research/`, `design/`, and `docs/` together in **one repository**. The research and
design artifacts are the direct source material for the site and are only ever consumed here, so a
single boundary minimizes friction and keeps the knowledge base next to the code it informs.

A **`main` branch is established as trunk** and set as the GitHub default. `feature/astro-scaffold`
is merged into it; future work lands on `main` via PR.

### Build orchestration — none

Per SOP §7, dedicated build orchestration (Turborepo / Nx) is mandated for the *"Mid-to-Large Web /
Product Team"* context, which assumes **multiple apps or shared packages**. This repository has a
**single** deployable app (`site/`) and no shared internal packages, so an orchestrator would be
pure overhead. Astro's own build (`npm run build`) is sufficient.

### Micro pattern — Astro file-based, component-oriented (within `site/`)

`site/src/` follows Astro convention: `pages/` (file-based routes), `components/` (reusable UI),
`layouts/`. This maps to the SOP's **Feature/Layout-oriented** micro pattern and is appropriate for
a content site. Cross-cutting UI primitives live in `components/`; route-specific markup stays in its
page.

## Consequences

**Positive**

- Resolves the Website-Review finding that the finished site sits on a side branch.
- One clone, one CI surface, research/design co-located with the code.
- No orchestration tooling to learn or maintain.

**Negative / accepted trade-offs**

- A single Netlify build runs on any change. Acceptable at this size (build is seconds).
- If a second app or a publishable shared package ever appears, this ADR must be revisited and the
  §7 "Mid-to-Large" row (Turborepo/Nx, barrel-file + Dependency-Cruiser boundaries) reconsidered.

## Deviations from SOP (none material)

- **Changesets / CHANGELOG:** intentionally **not** adopted. SOP §2.1.2 explicitly permits skipping
  Changesets for a single, non-published application. Not a deviation — an allowed choice.
- **DVC / MLflow, Terraform/IaC:** not applicable (no ML, no managed infra).

## Follow-ups (tracked in `docs/GUIDANCE.md`)

1. Create and default-set `main`.
2. Rewrite root `README.md` to the SOP §6 monorepo-root audience (setup/build/deploy).
3. Add a `LICENSE`.
