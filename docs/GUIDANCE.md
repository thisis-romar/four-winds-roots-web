---
title: "Four Winds Roots Pharmacy — Guidance & Go-Live Action Plan"
version: "1.0"
last_updated: "2026-06-16"
status: active
category: meta
owner: internal
description: >
  Synthesis of the EMBLEM-NLP Repository Architecture SOP (v1.2.0) and the
  June 2026 Website Review + Costs reports, reconciled against the actual
  repository state, with a single prioritized plan to take the site live.
---

# Guidance: How to Get the Four Winds Roots Pharmacy Site Live

This document answers "please guide us." It pulls together three inputs:

1. **EMBLEM-NLP-SOP-001 — Repository Architecture & Code Topology (v1.2.0)** — the internal
   standard for how our repositories are structured and governed.
2. **R.O.O.T.S. Four Winds Pharmacy — Website Review (June 16, 2026)** — a plain-language audit
   of the live preview site.
3. **Costs & Online-Selling Rules (June 16, 2026)** — the running-cost and e-commerce regulatory
   report.

Every finding below was **re-verified against the actual code** on branch
`feature/astro-scaffold` (the branch that holds the built website), so the line references are
real, not paraphrased from the PDF.

---

## 1. Where things actually stand

| Item | Reality (verified) |
|------|--------------------|
| Built website | An **Astro** site, in `site/`, on branch **`feature/astro-scaffold`** — not on a trunk branch. |
| Trunk branch | **There is no `main` branch.** The repo's default HEAD currently points at a `claude/...audit` branch. |
| Research + design | Markdown/JSON planning docs in `research/` and `design/` on the default branch (this is the content the site was built from). |
| Live preview URL | `charming-zuccutto-52dc64.netlify.app` (Netlify free plan, auto-generated subdomain). |
| Real domain | `fourwindsrootspharmacy.ca` is **referenced in config but not registered**. |

So we are one organizational step and one short to-do list away from a launchable site. The hard
part — building it — is done and is well built. What remains is **cleanup, a domain, and a branch
merge.**

---

## 2. The single most important architectural fix (do this first)

> **Establish a trunk and put the website on it.**

The SOP (§2, §8 Phase 1) requires a clear macro pattern with a defined trunk, and the Website
Review's housekeeping note #8 flags exactly this: *"the finished website currently lives on a side
branch of the project rather than the main one."*

**Decision (recorded in [ADR-0001](decisions/ADR-0001-repository-architecture.md)):** keep
everything in **one repository** — a lightweight **monorepo** holding the `site/` app plus the
`research/`, `design/`, and `docs/` knowledge base. This is the correct SOP call for a single small
static site: it does **not** warrant Turborepo/Nx (those are mandated only for the "Mid-to-Large
Web / Product Team" row of the §7 matrix, i.e. multiple apps/packages). One app = no build
orchestrator needed.

**Action:**
1. Merge `feature/astro-scaffold` into a new **`main`** branch.
2. Set `main` as the repository's **default branch** on GitHub.
3. Going forward, treat `main` as trunk; feature branches merge back via PR.

This one move resolves the "site on a side branch" finding and gives every later fix a home.

---

## 3. The go-live to-do list, sequenced

The Website Review grades each item **URGENT** (fix before promoting), **FIX SOON** (weakens
trust/results), or **MINOR** (tidy-up). Below, each is paired with the **exact file** to change and
who owns it — **Owner** (a fact only the pharmacy can confirm) or **Dev** (a code change).

### Phase 1 — Before promoting the site (URGENT)

| # | Fix | Where | Owner / Dev |
|---|-----|-------|-------------|
| 1 | **Correct the opening hours.** The site hard-codes Mon–Fri 9–6 / Sat 9–2 / Sun closed; no official directory matches this. | `site/src/pages/contact.astro` (lines ~94–118, each marked `TODO: confirm`) and any per-page hours in the schema. | **Owner confirms by phone**, then Dev edits. |
| 2 | **Remove visitor-facing builder notes on the Optical page.** Real, visible `<p>TODO: …</p>` text is rendered to visitors. | `site/src/pages/optical-wellness.astro` (lines 31, 37, 46, 52 render `TODO:` text). | **Dev** — fill in real content (Owner supplies the optical/wellness service list) **or** unpublish the page until ready. |
| 3 | **Fix the Google "official address" mismatch.** `astro.config.mjs` declares the canonical site as `fourwindsrootspharmacy.ca`, which isn't registered, while the live site sits on the Netlify subdomain. Search engines can't reconcile the two. | `site/astro.config.mjs:5`. Resolve by **registering the domain** (see §4) and pointing Netlify + DNS at it. | **Owner registers domain**; Dev wires DNS + Netlify. |
| 4 | **Complete the Privacy & Accessibility placeholders.** Both pages contain `[PLACEHOLDER — confirm with owner]` / blank contact + email. | `site/src/pages/privacy-policy.astro`, `site/src/pages/accessibility.astro` (e.g. accessibility lines 108–109). | **Owner** (and a lawyer for privacy) supplies; Dev fills in. |
| 5 | **Fix dead "Call Us" buttons.** `CallButton` renders `href="#"`; some header/footer call buttons do nothing on click. | `site/src/components/CallButton.astro` (the `href="#"`). | **Dev** — ensure the `tel:`/obfuscated-dial behaviour is wired, remove dead duplicates. |

### Phase 2 — Build trust & results (FIX SOON)

| # | Fix | Where | Owner / Dev |
|---|-----|-------|-------------|
| 6 | **Fix the structured-data review-count placeholder** so the 4.9★ rating can appear in Google results. | `site/src/components/SchemaJsonLd.astro` (review-count field). | **Owner confirms count**; Dev edits. |
| 7 | **Reword "registered holistic pharmacy."** Make clear "registered" refers only to the OCP licence, not to "holistic" (an unregulated term). | Pages using the phrase (Holistic + others). | **Dev** (wording); Owner approves. |
| 8 | **Settle the exact legal company name** ("Can Pharm Services Inc.") and use it consistently. | Footer / legal text across `site/src/`. | **Owner verifies against corporate records**; Dev applies. |
| 9 | **Decide on "compounding."** `holistic-wellness.astro` shows "Compounding services — details coming soon"; this is the Sarnia pharmacy's specialty, unconfirmed here. | `site/src/pages/holistic-wellness.astro` (~line 134). | **Owner decides**; Dev keeps or removes. |
| 10 | **Wire up the contact / transfer / refill forms** end-to-end (currently `TODO: wire form action…`). | `contact.astro:168`, `TransferForm.astro`, `RefillForm.astro`. | **Dev** — see the PHIPA-safe vendor comparison already in `research/phipa-vendor-comparison.md`. |

### Phase 3 — Polish & growth (MINOR / LATER)

| # | Fix | Where | Owner / Dev |
|---|-----|-------|-------------|
| 11 | **Finish the About story** and surface the community/Caribbean & West African focus and the minor-ailment prescribing service. | `site/src/pages/about.astro` (all content `TODO`). | **Owner** intake; Dev writes. |
| 12 | **Commission a real WCAG 2.2 AA audit**, then update the Accessibility page with actual results. | `accessibility.astro` (line 81 `TODO`). | Dev + external audit. |
| 13 | **Repo housekeeping** (see §5). | README, LICENSE, branch. | **Dev**. |

---

## 4. Cost & domain decisions (from the Costs report)

These are **owner decisions**; the recommendation in each case is the cheapest sensible option.

- **Hosting:** stay on **Netlify free** (or Cloudflare Pages free). Expected cost **$0**.
- **Domain:** register **`fourwindsrootspharmacy.ca`** under the full legal company name via a
  Canadian registrar (CanSpace / Rebel). **~$9–$20/yr.** *This unblocks fix #3.*
- **Email:** **Zoho Mail free** with `info@` and `admin@` (add `rx@`/`winston@` later). **~$0.**
  ⚠️ Ordinary email is **not** a PHIPA-safe channel for patient/prescription data — keep it to
  general business use only.
- **Realistic all-in run rate (DIY):** **~$300–$500/yr.** Hiring a pro for a "care plan" is
  **not** recommended for a site this simple — if you do, negotiate ~$100–$250/mo, don't buy a
  full plan.
- **Selling online:** vitamins / health-foods / the Caribbean & African line = ordinary e-commerce
  (Shopify ~$51/mo) — fine. **Selling medicine online is a regulated pharmacy operation** — do
  **not** attempt without a pharmacy lawyer and direct contact with the **Ontario College of
  Pharmacists (416-962-4861 x2909)**.

---

## 5. SOP-compliance gaps to close (repo housekeeping)

Mapping the repo against the EMBLEM SOP turns up a small, finite list:

1. **README audience mismatch** — SOP §6 says a monorepo-root README must describe setup/orchestration
   for onboarding engineers. The current README still says *"future website … no production site code
   yet,"* which is now false. **Rewrite it** to document the `site/` app (install, `npm run dev`,
   build, deploy) plus the `research/`/`design/` layout.
2. **No `LICENSE`** — add one (SOP §5.3 treats LICENSE as standard for any shared/published repo).
   Choose proprietary/all-rights-reserved unless the owner wants otherwise.
3. **No ADR** — SOP §8 Phase 1.4 requires the macro/micro decision be recorded under
   `docs/decisions/`. Done: see **[ADR-0001](decisions/ADR-0001-repository-architecture.md)**.
4. **Trunk branch** — addressed in §2 above.
5. **Not required for this project:** Changesets/CHANGELOG (SOP §2.1.2 says skip for a single
   non-published app), Turborepo/Nx, DVC. Don't add ceremony the site doesn't need.

---

## 6. The "Doctor" title rule — keep it as-is (do not regress)

The Review confirms the site **correctly** never calls Winston Clarke "Dr." (he is "the pharmacist")
and never calls Pamela Clarke "Dr." (she is "Natural Health Practitioner and wellness author"). This
is the single highest-risk area for a pharmacy and it is currently handled right.

**Standing instruction for anyone who edits the site:** never add "Dr." in front of either name, and
never add doctoral/medical-sounding titles. Winston is a pharmacist, not a physician; Pamela's
doctoral certificate is not from a recognised Ontario health regulator. This rule should be added to
the contributor README so it survives future edits.

---

## 7. Recommended order of operations (one screen)

1. **Owner:** phone the pharmacy → confirm **real hours**; confirm **legal company name**; decide
   **compounding**; register **`fourwindsrootspharmacy.ca`**; set up **Zoho** `info@`/`admin@`.
2. **Dev:** create **`main`** from `feature/astro-scaffold`, set it default. (§2)
3. **Dev:** clear all **URGENT** items #1–#5. (§3 Phase 1)
4. **Dev:** point domain → Netlify; verify HTTPS + canonical now match. (§3 #3)
5. **Dev:** clear **FIX SOON** #6–#10, including wiring forms via the PHIPA-safe vendor in
   `research/phipa-vendor-comparison.md`.
6. **Dev:** repo housekeeping — README rewrite, LICENSE, ADR (§5).
7. **Then promote the site** (Google Business Profile, listings, etc.).
8. **Later:** About story, real WCAG audit, optional Shopify for wellness products.

---

### A note on what this is not

This guidance is a plan, not legal advice. The privacy-policy text, the online-medicine-selling
question, and the accessibility statement each need a qualified professional (lawyer / OCP /
accessibility auditor) before they go public. Those points are flagged inline above.
