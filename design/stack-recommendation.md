# Stack Recommendation

**Recommendation: build a static-first site with Astro, edited through a free git-based CMS, hosted
on a free-tier CDN host, with health-data forms routed to a vetted PHIPA-compliant service.**

This satisfies the owner's brief — **cost-conservative, systematically well-designed and branded,
not big-box-looking** — while meeting the industry gold standard (see
`../research/gold-standard-architecture.md`).

## Recommended stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Ships static HTML with little/no JS → Lighthouse 90–100, sub-second loads, great Core Web Vitals (a ranking factor). Component-based, so the inventory in `component-inventory.md` builds cleanly. |
| Styling | **CSS with design tokens** (or Tailwind) | Encode `brand-direction.md` tokens once; fully custom look (the anti-template advantage). |
| Content editing | **Git-based CMS** (Decap or Sveltia CMS — free, open-source) | Non-technical staff edit content in a friendly UI; no monthly CMS fee; content lives in the repo. |
| Hosting | **Netlify or Cloudflare Pages (free tier)** | ~$0 at pharmacy traffic levels; global CDN; automatic HTTPS; deploy on git push. |
| Forms / booking (health data) | **Vetted PHIPA-compliant form/scheduling service** | The only sensitive part of the site; must meet PHIPA (see `compliance-checklist.md`). Decide vendor early. |
| Analytics | **Privacy-friendly analytics** (e.g., Plausible/Cloudflare) | Avoid heavy trackers, especially on health-data pages. |
| Domain | Registered domain | The main recurring cost. |

## Cost model (indicative)

| Item | Cost |
|---|---|
| Hosting (Netlify/Cloudflare free tier) | **$0 / mo** at this traffic |
| Git-based CMS (Decap/Sveltia) | **$0** (open-source) |
| Domain | ~$15–25 / yr |
| Privacy-friendly analytics | $0–~$9 / mo |
| PHIPA-compliant form/booking vendor | varies — get a quote; the one genuine recurring SaaS cost |
| Maintenance | **near $0** — static files, nothing to patch on a cycle |

Contrast: a typical WordPress build commonly carries **€100–500/mo** in maintenance and a large
plugin-vulnerability surface (91% of 2025 WordPress vulnerabilities were plugin-related). Templated
pharmacy builders (Digital Pharmacist, PharmSites/BestRx ~$75/mo + setup) add monthly fees **and**
look like every other client — the exact template sameness the audit flagged in local competitors.

## Trade-offs (stated honestly)

- **Astro needs developer setup.** It is not point-and-click like Wix/WordPress. Mitigation: we do
  the build; the git-based CMS then lets staff edit content without touching code.
- **Dynamic features are limited by design.** Refill/transfer/booking are handled by an embedded
  compliant third-party service rather than a custom backend — which is also the *safer* PHIPA
  choice (the static site stores nothing).
- If the owner strongly prefers fully self-managed editing with no developer involvement, see the
  alternative below.

## Alternatives considered

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| **WordPress** | Easiest for non-technical editing; huge ecosystem | Higher 5-yr cost; security/maintenance burden; slower without tuning | Reasonable fallback if self-management is the top priority |
| **US pharmacy builders** (Digital Pharmacist, PharmSites/BestRx) | Turnkey, pharmacy-specific, integrations | US/HIPAA-oriented (not PHIPA-tailored); templated/non-distinct; monthly fees | Not recommended — undermines the "distinct, not big-box/template" goal |
| **Wix / Squarespace** | Cheap, easy, fast to stand up | Templated look; weaker performance/SEO ceiling; limited custom branding | Possible budget stopgap, not the gold-standard choice |

## Recommended build sequence (after owner approval)

1. Confirm canonical NAP, hours, services, and gather brand assets + photos (`content-model.md`).
2. Choose the **PHIPA-compliant form/booking vendor** (gates the conversion features).
3. Scaffold Astro + design tokens + the component inventory.
4. Build the 12 pages from `information-architecture.md`; wire CTAs and schema.
5. Accessibility pass (AODA/WCAG 2.2 AA) + privacy review (PHIPA) per `compliance-checklist.md`.
6. Optimize GBP + launch; measure per `../research/local-seo/keyword-strategy.md`.

## Decisions to confirm with the owner

- Astro (recommended) vs WordPress (if no-developer self-editing is paramount).
- Which PHIPA-compliant form/booking vendor.
- Whether online booking is needed at launch or phase 2.
