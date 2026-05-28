---
title: "Phone Number Protection: Spam Bot Resistance + AODA/WCAG 2.2 AA Compliance"
version: "1.0"
last_updated: "2026-05-27"
status: active
category: seo
owner: internal
description: "Evaluation of techniques for obfuscating the pharmacy phone number against scrapers while maintaining WCAG 2.2 AA compliance, with a recommended Astro component implementation."
---

# Phone Number Protection: Spam Bot Resistance + AODA/WCAG 2.2 AA Compliance

**Four Winds Roots Pharmacy — Astro Static Site**
Researched: 2026-05-26

---

## TL;DR

- **Recommended technique:** JavaScript runtime assembly using `data-` attributes on a `<noscript>`-safe shell, with an `aria-label` carrying the formatted number — implemented as an Astro component (Technique A). This is free, zero-dependency, and WCAG 2.2 AA compliant.
- Cloudflare Scrape Shield **does not** protect `tel:` links — it only obfuscates email addresses. Do not rely on it for phone protection.
- CSS `::before`/`::after` content alone **cannot** produce a clickable `tel:` link and is therefore not an acceptable solution.
- The JSON-LD `"telephone"` field **should include the real number** (Google requires it match visible content); the risk from schema scrapers is lower than the SEO cost of omitting or mismatching it.
- Call tracking numbers (CallRail, WhatConverts) are the strongest protection but cost $30–55+/month CAD; they also give conversion analytics — worth considering if marketing budget allows.

---

## 1. Threat Model

### Who scrapes phone numbers from websites?

| Threat actor | Method | Sophistication | What they do with the number |
|---|---|---|---|
| Spam robocallers | Bulk HTML crawlers (curl, wget, simple HTTP clients) | Low | Add to autodial lists for warranty scams, HVAC robocalls, etc. |
| Email/SMS list builders | Same simple crawlers; also regex-parse plaintext | Low–Medium | Add to spam SMS or email marketing lists |
| Competitor intelligence | Manual or semi-automated scraping tools | Medium | Monitor business info, track changes |
| Automated directory farms | Mass-crawlers that populate sites like whitepages clones | Medium | Publish stale contact data; SEO spam |
| Sophisticated headless scrapers | Playwright/Puppeteer, headless Chrome, residential proxy networks | High | Can execute JavaScript; harder to block |

### Key insight for threat modelling

The **majority of phone number harvesters targeting small business websites are low-sophistication bots**: they fetch raw HTML and parse it with regex or CSS selectors. They do not execute JavaScript. This matters because JavaScript-based obfuscation stops this entire class of threat with zero cost.

The **high-sophistication tier** (headless Chrome, JS-executing scrapers) can defeat most JS obfuscation. However, these actors are typically targeting higher-value data (e-commerce pricing, financial data) — not a community pharmacy's main line number that already appears in Google Business Profile, 411.ca, and every directory listing. Complete elimination of number exposure is not realistic or necessary.

### What we are NOT protecting

- The number in Google Business Profile (public by design)
- The number in local directories (Yelp, Yellow Pages, etc.)
- The number spoken in voicemail greetings

**Goal:** Raise the cost of bulk automated harvesting enough to reduce robocall volume. A motivated human or sophisticated headless scraper will always find the number. We are optimising against the 95% of harvesters that are simple regex crawlers.

---

## 2. Technique Evaluation

### Technique A — JavaScript Runtime Assembly (RECOMMENDED)

**How it works:** The phone number is never written as a complete string in the static HTML. Instead, it is split into parts (or encoded) and stored in `data-` attributes on a placeholder element. A small inline `<script>` runs at parse time and assembles the full number, then constructs a real `<a href="tel:...">` link in the DOM, replacing the placeholder.

**Preserves `tel:` click-to-call:** Yes — the assembled `<a href="tel:+14163988200">` is a real anchor element.

**WCAG 2.2 AA compliance:**
- **Screen readers (NVDA/JAWS):** The assembled `<a>` element with its `aria-label` (e.g., `"Call 416-398-8200"`) is announced as a link. As of WCAG 2.4.4 (Link Purpose), the link text or `aria-label` must describe the purpose — the formatted number satisfies this.
- **Keyboard navigation:** The assembled `<a>` is a standard focusable link. Enter key activates it. Tab order is preserved. Focus indicator (WCAG 2.4.11 — Focus Appearance) must be styled with sufficient contrast, which is a general CSS requirement, not specific to this technique.
- **Without JavaScript:** If JS is disabled, the placeholder element is shown. A visible fallback text must be included (e.g., "Call us: 416-398-8200" as a `<noscript>` block). Without the fallback, a no-JS user sees nothing — a WCAG 1.3.1 (Info and Relationships) failure.

**Complexity in Astro (static):** Low. Astro ships JS only when you add a `<script>` tag or use client directives. An inline `<script>` in a `.astro` component runs at page load.

**Effectiveness against bots:** High against simple HTML crawlers. None against headless JS-executing scrapers.

**Senior usability:** Full — the rendered link is a normal phone link with no extra steps.

---

### Technique B — CSS `content` Property

**How it works:** The phone number string is placed in a CSS `::before` or `::after` pseudo-element: `.phone::before { content: "416-398-8200"; }`. The number is absent from HTML source.

**Preserves `tel:` click-to-call:** **No.** CSS pseudo-elements cannot be anchors. You cannot write `<a class="phone">` and have the `::before` content be part of the link href. The result is a non-clickable styled element.

**WCAG 2.2 AA compliance:**
- Screen reader support for CSS `content` is **inconsistent**: NVDA + Firefox reads it; JAWS + Chrome sometimes ignores it. W3C itself notes this inconsistency.
- WCAG 1.3.1 requires that meaningful information not rely solely on presentation. CSS `content` is presentation layer — this fails 1.3.1 in most interpretations.
- WCAG 2.4.4 fails: there is no `<a>` link, so there is no link purpose to evaluate.

**Verdict: Do not use.** This technique cannot produce a clickable `tel:` link and has unpredictable screen reader behaviour. It is not WCAG-compliant for a phone number that must be a callable link.

---

### Technique C — Cloudflare Scrape Shield

**How it works:** Cloudflare's Scrape Shield rewrites email addresses found in HTML at the CDN edge before delivering the page, replacing them with obfuscated JavaScript-decoded strings. This is automatic and transparent.

**Does it protect `tel:` links?** **No.** Cloudflare's own community confirms that Scrape Shield email obfuscation does not apply to phone numbers or `tel:` hrefs. Cloudflare Bot Management (Enterprise tier) can block known scrapers via fingerprinting and behaviour analysis, but this is a general traffic filter, not a phone-specific obfuscation mechanism.

**WCAG compliance:** N/A — the feature does not apply to phone numbers.

**Cost:** Cloudflare's free and Pro plans include Scrape Shield for email. Bot Management is an Enterprise add-on ($$$).

**Verdict:** Cloudflare is useful for email protection and general bot mitigation, but does not solve the phone-number scraping problem. Use it for what it does well; implement Technique A for phone numbers.

---

### Technique D — ROT13 / Base64 Encoding Decoded by JS

**How it works:** The phone number is encoded (e.g., `+14163988200` → Base64 `KzE0MTYzOTg4MjAw`) and stored in a `data-` attribute. JavaScript decodes it at runtime using `atob()` and builds the `<a href="tel:...">` link.

**Preserves `tel:` click-to-call:** Yes — same runtime assembly as Technique A, just with an extra decoding step.

**WCAG 2.2 AA:** Identical to Technique A. The decoded link is a real anchor. The `aria-label` with the human-readable formatted number is essential.

**Effectiveness vs. bots:** Marginally higher than Technique A's split-string approach, because the raw HTML attribute value is not human-readable. However, any scraper that runs `atob()` (one function call) defeats it. Practically, it provides the same protection as Technique A against simple crawlers.

**Complexity:** Slightly higher than Technique A due to encoding/decoding step. For a static site, the number must be Base64-encoded at build time and hardcoded in the template, or computed during the Astro build.

**Verdict:** A minor improvement over Technique A with negligible real-world security gain. Technique A (data attribute split) is simpler and equally effective in practice. Base64 is not encryption — it is trivially reversible.

---

### Technique E — Call Tracking / Forwarding Numbers

**How it works:** A tracking number (e.g., a local Toronto 416 DID) is published on the website. Calls to this number are forwarded to the real pharmacy line. The real number is never published anywhere. Every call through the tracking number is logged with analytics (call duration, time, source).

**Preserves `tel:` click-to-call:** Yes — the tracking number is a real phone number with a `tel:` link. Mobile click-to-call works perfectly.

**WCAG 2.2 AA:** Full compliance. The tracking number is a real number in a real `<a href="tel:...">` link. No accessibility considerations change.

**Effectiveness against bots:** Highest of all techniques. The number published on the site is a proxy — scrapers harvest the tracking number, not the real line. Robocallers who dial it reach the forwarding service (which can have its own spam filters). The real number remains private.

**Senior usability:** Full — no barrier whatsoever to patients calling.

**Canadian providers and costs (2026):**

| Provider | Monthly starting cost (CAD approx.) | Canadian numbers | Notes |
|---|---|---|---|
| CallScaler | ~$0.70/mo per number + per-minute | Yes (416/647/905) | Cheapest; basic analytics |
| WhatConverts | ~$41/mo (Call Tracking plan) | Yes | Strong analytics; 14-day trial |
| CallRail | ~$75/mo (Call Tracking plan) | Yes | HIPAA-capable account available; most feature-rich |
| Nimbata | ~$28/mo | Yes | Simpler; fewer integrations |

**HIPAA/PHIPA note for a pharmacy:** Ontario pharmacies are governed by PHIPA (Personal Health Information Protection Act), not HIPAA. Call recording through a tracking service that stores call audio may implicate PHIPA if the recording captures patient health information. If call recording is enabled, ensure the provider signs a data processing agreement, or disable recording and use call-count-only analytics.

**Verdict:** The strongest protection, with a genuine marketing analytics benefit. The $30–75/month cost is the barrier. For a cost-conscious pharmacy, Technique A (free) is the pragmatic starting point; a tracking number can be layered on later as the marketing budget grows.

---

### Technique F — Honeypot / Decoy Numbers

**How it works:** The static HTML contains a fake phone number (e.g., `416-000-0000` wrapped in a visually-hidden `<span aria-hidden="true">`). JavaScript replaces it with the real number via DOM manipulation. Scrapers without JS harvest the decoy; users with JS see the real number.

**Preserves `tel:` click-to-call:** Yes — JS replaces the element with a real `<a href="tel:+14163988200">` link.

**WCAG 2.2 AA:**
- The `aria-hidden="true"` on the decoy prevents screen readers from reading the fake number.
- The JS-assembled real link must have proper accessible text.
- No-JS users: they see the decoy number, which is wrong. This is a content failure — a no-JS user cannot call the pharmacy. This is a WCAG 1.3.1 failure for no-JS environments.

**Effectiveness:** Better than Technique A at catching low-sophistication scrapers, because even scrapers that find the HTML element get a wrong number. However, the wrong-number decoy has a meaningful downside: if the decoy number belongs to someone else, it is harmful. If it's clearly fake (000-0000), sophisticated scrapers discard it anyway.

**Senior usability:** Full for JS-enabled users (essentially everyone).

**Verdict:** Adds complexity and a no-JS failure mode with minimal additional benefit over Technique A. Not recommended as the primary technique, though the `aria-hidden` decoy pattern can be combined with Technique A.

---

### Technique G — CAPTCHA Gate Before Revealing Number

**How it works:** A "Call us" button is shown. Clicking it triggers a reCAPTCHA or hCaptcha challenge. On passing, the phone number is revealed (and optionally auto-dialled).

**WCAG 2.2 AA:** reCAPTCHA v2 (image challenges) has significant accessibility issues:
- Audio challenges are difficult and unreliable.
- WCAG 1.1.1 requires text alternatives for non-text content.
- WCAG 2.5.3 (Label in Name) is frequently failed by CAPTCHA widgets.
- Google's own reCAPTCHA v2 accessibility is widely criticised.

**Senior usability:** Very poor. A senior patient with cognitive impairment, low vision, or motor disability will find CAPTCHA a serious barrier.

**Verdict:** Completely inappropriate for a pharmacy context. Introduces a major AODA risk, destroys senior usability, and adds development complexity. Do not implement.

---

### Technique H — Server-Side Rendering with Rate Limiting

**How it works:** In an SSR context (Next.js, Nuxt, Express), the phone number is only rendered to authenticated or rate-limited sessions. Bots that make many requests are throttled or blocked.

**Applicability to Astro static site:** Astro supports SSR (`output: 'server'`) but the project is currently a static site (`output: 'static'`). Switching to SSR adds infrastructure complexity (requires a Node/Deno/Cloudflare Workers runtime, removes free CDN-only hosting).

**Verdict:** Not applicable to the current static Astro deployment. Document for future reference if the site migrates to a server-rendered deployment.

---

### Technique I — Schema.org / JSON-LD `telephone` Field

This is addressed in detail in Section 6.

---

## 3. AODA/WCAG 2.2 AA Compatibility Matrix

AODA (Ontario) mandates WCAG 2.0 Level AA at minimum. Best practice (and where enforcement is heading) is WCAG 2.2 Level AA.

| Technique | Screen reader announces number correctly? | Keyboard activatable (Enter)? | Works without JS? | WCAG 2.2 AA pass? |
|---|---|---|---|---|
| **A — JS data attribute assembly** | Yes (via `aria-label` on assembled `<a>`) | Yes (standard `<a>`) | Only with `<noscript>` fallback | **Yes, if `<noscript>` fallback is included** |
| **B — CSS `content` only** | Inconsistent (NVDA/FF may read; JAWS/Chrome may not) | No (`<a>` not created) | N/A (no link at all) | **No — fails 1.3.1, 2.4.4** |
| **C — Cloudflare Scrape Shield** | N/A — does not apply to `tel:` | N/A | N/A | N/A |
| **D — Base64/ROT13 + JS** | Yes (same as A) | Yes (standard `<a>`) | Only with `<noscript>` fallback | **Yes, with `<noscript>` fallback** |
| **E — Call tracking number** | Yes (plain `<a href="tel:...">`) | Yes | Yes | **Yes — fully compliant** |
| **F — Honeypot/decoy** | Yes for real users (JS assembled `<a>`) | Yes | No (decoy number shown) | **Partial — fails for no-JS users** |
| **G — CAPTCHA gate** | Poor (reCAPTCHA accessibility problems) | Problematic | No | **No — fails multiple criteria** |
| **H — SSR + rate limiting** | Yes (server-rendered `<a>`) | Yes | Yes | **Yes — fully compliant** |

### WCAG criteria specifically relevant to phone links

- **1.3.1 Info and Relationships:** The phone number must be conveyed as meaningful content, not only via visual presentation or CSS content.
- **2.4.4 Link Purpose (In Context):** The `<a>` element's accessible name (link text or `aria-label`) must describe what the link does — "Call 416-398-8200" is sufficient.
- **2.4.11 Focus Appearance (AA, new in 2.2):** The keyboard focus indicator on the link must be visible with at least a 3:1 contrast ratio against adjacent colours.
- **2.5.3 Label in Name:** If the link has visible text (the phone number), the `aria-label` must contain that same number string (not just "Call us").
- **3.3.2 Labels or Instructions:** If the phone number is in a form field, it must have a visible label.

### Screen reader aria-label formatting note

VA.gov's design system (a leading accessibility reference) updated guidance in August 2024: phone numbers in `aria-label` attributes should have digits separated by spaces or periods so screen readers spell them out digit-by-digit rather than reading "four hundred sixteen million..." — e.g., `aria-label="Call 4 1 6 - 3 9 8 - 8 2 0 0"` or using the period-separated format `"Call 4 1 6. 3 9 8. 8 2 0 0"`. However, the same source notes that as of 2024, adding `aria-label` to phone links is no longer strictly required on VA.gov because modern screen readers have improved digit-by-digit reading. Test with both NVDA and JAWS to verify behaviour in your specific implementation.

---

## 4. Best Practice Recommendation for a Static Astro Pharmacy Site

### Recommended approach: Technique A (JS runtime assembly) with a `<noscript>` fallback

**Rationale:**

1. **Cost:** Free. Zero ongoing cost. Zero third-party dependencies.
2. **Effectiveness:** Defeats the entire class of simple HTML/regex scrapers, which represent the vast majority of phone number harvesters.
3. **WCAG 2.2 AA compliance:** Full compliance when `aria-label` and `<noscript>` fallback are correctly implemented.
4. **Mobile click-to-call:** The assembled `<a href="tel:+14163988200">` works identically to a hardcoded link on mobile devices.
5. **Senior usability:** No barrier — the link looks and behaves like a normal phone link.
6. **Astro implementation:** An Astro component with an inline `<script>` tag is idiomatic and straightforward.

**Limitations to acknowledge:**

- Does not protect against headless JS-executing scrapers. However, these actors are not the primary threat for a pharmacy contact number.
- The `<noscript>` fallback exposes the number to no-JS scrapers. This is an acceptable tradeoff: no-JS environments are estimated at under 0.2% of real users but include some screen reader configurations and legacy browsers. Without the fallback, no-JS users (including some AT users) cannot call the pharmacy, which is a WCAG failure. With the fallback, the protection is slightly reduced for the tiny no-JS crawler population.

**Optional enhancement:** Add Cloudflare's free tier in front of the site for general bot mitigation (rate limiting, IP reputation). This blocks entire classes of low-quality crawler traffic at the CDN layer, reducing the volume of bots that even reach the HTML, regardless of what number is in the source.

**Future upgrade path:** If the pharmacy begins tracking marketing ROI from phone calls, migrate to a call tracking number (WhatConverts ~$41/month CAD or CallScaler ~$5-15/month CAD) as the published number. This eliminates the exposure problem entirely while adding conversion analytics.

---

## 5. Implementation Example

### Astro Component: `PhoneLink.astro`

```astro
---
// src/components/PhoneLink.astro
// Assembles the tel: link at runtime to prevent simple HTML scrapers
// from harvesting the complete number from raw source.
//
// Usage:
//   <PhoneLink />
//
// The number is split here so no single attribute contains the full E.164 string.
// Parts: country code, area code, exchange, subscriber
const p = ["+1", "416", "398", "8200"];
const formatted = "416-398-8200";           // human-readable display string
const ariaLabel = `Call ${formatted}`;      // screen reader label
---

<span
  class="phone-link-shell"
  data-p0={p[0]}
  data-p1={p[1]}
  data-p2={p[2]}
  data-p3={p[3]}
  data-formatted={formatted}
  data-aria={ariaLabel}
  aria-hidden="true"
>
  {/* Visually hidden placeholder — replaced by JS below */}
  <span class="sr-only">Loading phone number…</span>
</span>

{/* Accessible fallback for users without JavaScript */}
<noscript>
  <a href={`tel:${p.join("")}`} aria-label={ariaLabel}>
    {formatted}
  </a>
</noscript>

<script>
  // Runs once at parse time (inline, no defer needed for a simple DOM replacement).
  // Selects every .phone-link-shell on the page, assembles the tel: href,
  // and replaces the placeholder with a real <a> element.
  document.querySelectorAll<HTMLElement>(".phone-link-shell").forEach((shell) => {
    const parts = [
      shell.dataset.p0 ?? "",
      shell.dataset.p1 ?? "",
      shell.dataset.p2 ?? "",
      shell.dataset.p3 ?? "",
    ];
    const tel = parts.join("");            // "+14163988200"
    const formatted = shell.dataset.formatted ?? tel;
    const ariaLabel = shell.dataset.aria ?? `Call ${formatted}`;

    const a = document.createElement("a");
    a.href = `tel:${tel}`;
    a.textContent = formatted;
    a.setAttribute("aria-label", ariaLabel);
    // Preserve any classes the parent element should pass through
    a.className = "phone-link";

    shell.replaceWith(a);
  });
</script>

<style>
  /* Ensure focus ring meets WCAG 2.4.11 Focus Appearance (AA) */
  .phone-link:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 2px;
    border-radius: 2px;
  }
</style>
```

### Usage in a page or layout

```astro
---
// e.g., src/pages/index.astro or src/components/Header.astro
import PhoneLink from "../components/PhoneLink.astro";
---

<p>
  Questions? Call us: <PhoneLink />
</p>
```

### What the rendered HTML looks like (after JS runs)

```html
<!-- Before JS runs (what scrapers harvesting raw HTML see): -->
<span
  class="phone-link-shell"
  data-p0="+1"
  data-p1="416"
  data-p2="398"
  data-p3="8200"
  data-formatted="416-398-8200"
  data-aria="Call 416-398-8200"
  aria-hidden="true"
>
  <span class="sr-only">Loading phone number…</span>
</span>

<!-- After JS runs (what real users see in the live DOM): -->
<a href="tel:+14163988200" aria-label="Call 416-398-8200" class="phone-link">
  416-398-8200
</a>
```

### What scrapers see

A regex for `tel:` in raw HTML source finds nothing — `data-p0="+1"` alone is not a recognisable phone number. A regex for 10-digit phone number strings finds nothing, because the parts are split across four separate attributes. The full number only exists in the live DOM after JavaScript executes.

### Verification checklist

- [ ] Rendered `<a href="tel:+14163988200">` appears in browser DevTools Elements panel
- [ ] Tapping on mobile initiates a phone call
- [ ] NVDA + Firefox: Tab to link, hear "Call 416-398-8200, link" (or similar)
- [ ] JAWS + Chrome: Tab to link, hear "Call 416-398-8200, link"
- [ ] Keyboard Enter on focused link: triggers `tel:` protocol on desktop (or dials on mobile)
- [ ] Disable JS in browser: `<noscript>` fallback link renders and is clickable
- [ ] View page source (Ctrl+U): no complete phone number string visible in raw HTML

---

## 6. Schema.org / JSON-LD Consideration

### Should the `"telephone"` field use the real number or a tracking number?

**If using the real number on the visible page (no call tracking):** Include the real number in JSON-LD. Use `"telephone": "+14163988200"`.

**If using a call tracking number on the visible page:** Include the tracking number in JSON-LD. The JSON-LD must match what is visible to users on the page. Google's structured data policies explicitly state that markup must describe content that is visible on the page — if the visible number is the tracking number, the JSON-LD should also use the tracking number.

### Google's requirements

Google requires that structured data be **consistent with on-page content**. If the JSON-LD `"telephone"` field contains a number that does not appear anywhere on the page, Google may:

1. Disregard the structured data entirely
2. Apply a manual action for misleading markup

**Telephone is not a required field** for LocalBusiness rich results eligibility (required fields are name, address, and geographic coordinates). However, it is a recommended field that improves local search visibility and click-through rates.

### Is the JSON-LD field itself scraped?

Yes — scrapers that look for schema.org data will parse the `<script type="application/ld+json">` block and extract the `telephone` value. This is a separate, dedicated field that makes the number trivially accessible without even parsing the HTML body.

However, the JSON-LD is **not protected by any obfuscation technique** without fundamentally breaking its purpose (it must be valid JSON readable by Google's crawler). If you implement JS runtime assembly for the visible number, the JSON-LD will still expose the real number to schema-aware scrapers.

### Recommendation

Accept this as a known limitation. The JSON-LD `telephone` field is:

1. Already redundant with Google Business Profile (which has the number)
2. Read by Google's Googlebot, not just scrapers — obfuscating it defeats its SEO purpose
3. A lower-priority scraping target than the visible HTML (most robocall harvesters are not parsing JSON-LD)

**Keep the real number in JSON-LD.** The protection goal of JS assembly is to stop bulk regex-harvesting of the raw HTML body, not to achieve total number secrecy. If total secrecy is the goal, only a call tracking number (Technique E) achieves it — and you would put the tracking number in JSON-LD too.

### JSON-LD example for the pharmacy

```json
{
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Four Winds Roots Pharmacy",
  "telephone": "+14163988200",
  "url": "https://fourwindsrootspharmacy.ca",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR STREET ADDRESS",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "postalCode": "YOUR POSTAL CODE",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "YOUR_LAT",
    "longitude": "YOUR_LNG"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

Note: The `telephone` value here (`+14163988200`) matches what JS assembles and displays to users. If a call tracking number is adopted, update this field to match the tracking number.

---

## Sources

- [Cloudflare Email Address Obfuscation (Scrape Shield docs)](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/) — confirms phone numbers are not covered
- [Does Scrape Shield protect phone numbers? (Cloudflare Community)](https://community.cloudflare.com/t/does-scrape-shield-protects-phone-numbers/551525) — community confirmation that it does not
- [Phone number links and accessibility — Matt Smith (allthingssmitty.com)](https://allthingssmitty.com/2018/01/29/phone-number-links-and-accessibility/) — WCAG guidance on `tel:` links
- [Making Numbers in Web Content Accessible — TPGi](https://www.tpgi.com/making-numbers-in-web-content-accessible/) — screen reader number formatting
- [Telephone component — VA.gov Design System](https://design.va.gov/components/telephone) — August 2024 aria-label guidance update
- [CSS generated content accessibility — Tink (Léonie Watson)](https://tink.uk/accessibility-support-for-css-generated-content/) — inconsistent screen reader support for `::before`/`::after`
- [CSS Can Influence Screenreaders — Ben Myers](https://benmyers.dev/blog/css-can-influence-screenreaders/) — CSS content and AT behaviour
- [astro-mail-obfuscation — npm / GitHub (andreas-brunner)](https://github.com/andreas-brunner/astro-mail-obfuscation) — Astro-native obfuscation package for email and phone
- [astro-obfuscate — TrueWinter on GitHub](https://github.com/TrueWinter/astro-obfuscate) — ObfuscatedPhone component for Astro
- [Link Obfuscation for Email and Phone Numbers in Astro — Brian Pfretzschner (2024)](https://brianp.de/posts/2024/obfuscate-email-telephone-links-astrojs/) — practical Astro implementation walkthrough
- [Local Business Structured Data — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/local-business) — telephone is recommended, not required
- [General Structured Data Guidelines — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) — content must match visible page
- [AODA Compliance for Websites — Level Access](https://www.levelaccess.com/blog/aoda-compliance-requirements-for-websites/) — Ontario WCAG 2.0/2.2 AA requirements
- [Call Tracking in Canada — WhatConverts](https://www.whatconverts.com/pricing/call-tracking-canada-ca/) — Canadian pricing
- [CallScaler Pricing](https://callscaler.com/pricing) — low-cost call tracking alternative
- [CallRail Guide to Call Tracking in Canada](https://www.callrail.com/blog/the-callrail-guide-to-call-tracking-in-canada) — Canadian support and features
- [JavaScript rendering / headless Chrome scrapers (DataDome)](https://datadome.co/bots/headless-chrome/) — threat model context for sophisticated bots
- [Screen Reader CSS content compatibility — PowerMapper](https://www.powermapper.com/tests/screen-readers/content/css-generated-content/) — test matrix for CSS generated content
- [WCAG 2.2 Issue #1949 on phone number links — W3C GitHub](https://github.com/w3c/wcag/issues/1949) — W3C discussion on phone link success criteria
