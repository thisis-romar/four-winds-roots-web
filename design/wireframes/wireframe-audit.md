# Wireframe Audit — Four Winds Roots Pharmacy

**Audited:** 2026-05-26
**Files reviewed:**
- `wireframes/homepage.html`
- `wireframes/contact.html`
- `wireframes/prescription-transfer.html`

**Source of truth documents:**
- `design/information-architecture.md`
- `design/compliance-checklist.md`
- `design/brand-direction.md`
- `design/component-inventory.md`

---

## 1. Overall Verdict

**Partially complete — solid structural foundation, several gaps that must be resolved before handoff to a developer.**

The three wireframes share a consistent visual language, apply brand tokens correctly, and handle the most critical PHIPA requirement (consent checkbox) properly on the transfer form. The semantic HTML and accessibility baseline (skip link, landmark regions, label–input pairings, single `<h1>`) are also in good shape across all three pages.

The main gaps are: the contact page is missing its general-contact form; several IA-required blocks are absent or incomplete across all pages (free-delivery banner, TrustBar, JSON-LD schema, full hours in the footer); the heading font token (`--font-heading`) is never declared; and the mobile action bar on the contact page is always-visible rather than mobile-only. None of these are PHIPA-critical blockers, but they need resolving before the files are a reliable handoff spec.

---

## 2. Per-Wireframe Findings

---

### 2.1 `homepage.html`

#### What's correct

- SkipLink present and functional (line 67: `<a class="skip" href="#main">Skip to content</a>`).
- `<main id="main">` landmark present (line 83); `<nav aria-label="Primary">` (line 72); `<footer class="site">` (line 150).
- Single `<h1>` on the page (line 86). Heading order is logical: h1 → h2 → h3 throughout.
- All brand colour tokens declared in `:root` (lines 10–15): `--color-primary`, `--color-secondary`, `--color-calm`, `--color-action`, `--color-ink`, `--color-paper`.
- `--text-base: 18px` and `--font-body` declared (lines 13–14), matching brand-direction.md requirements.
- Hero section (lines 84–95) includes positioning copy, Call and Transfer Rx CTAs — matches IA.
- ReputationStrip rendered as inline rating pill (line 93): `aria-label="Rated 4.9 out of 5 stars"` — accessible.
- Service grid (lines 99–107) covers all 6 services listed in the IA sitemap.
- "Who we help" segments (lines 117–124) cover all three segments.
- Review block (lines 126–133) with placeholder quotes — matches IA review-prompt requirement.
- NAP + map section (lines 135–147) — address, phone, fax, directions button, map placeholder.
- Map placeholder has `aria-label="Map location placeholder"` (line 145).
- MobileActionBar present (lines 159–163), hidden on desktop via `@media(max-width:720px)`, with Call, Transfer, Directions links.
- Navigation collapses on mobile (line 59: `header.site nav{display:none}`).
- No `<img>` elements present — no missing-alt risk.
- Interactive elements are real `<button>` or `<a>` elements — no divs used as buttons.
- Voice/tone in placeholder text is warm, plain, local ("A pharmacist who knows you — not a checkout lane").

#### What's missing or wrong

- **`--font-heading` token not declared** (lines 10–15). Brand-direction.md requires a heading font token. All three wireframes use `--font-body` for both headings and body text. This is a design-system gap.
- **No `SchemaJsonLd` / JSON-LD block.** The IA ("Global elements — every page") and component-inventory.md (SchemaJsonLd) both require LocalBusiness/Pharmacy structured data in the `<head>`. It is absent.
- **Free-delivery banner missing.** The IA lists "free-delivery banner" as a Key Block for the homepage. The service grid mentions free delivery as a card (line 104), but there is no dedicated banner highlighting it as a conversion hook.
- **TrustBar / OCP registration signal absent from the body.** It appears in the footer as a single line (line 155), but the component-inventory lists a TrustBar component that should surface OCP registration and a named pharmacist as trust signals. Compliance-checklist.md §3 also requires displaying OCP registration prominently.
- **No named pharmacist displayed.** Compliance-checklist.md §3: "Display OCP registration / accreditation and named pharmacist(s) as trust signals." Neither the header, hero, nor TrustBar position includes a pharmacist name.
- **Hours missing from footer.** The IA specifies "full hours" in the footer. The footer (lines 150–157) has NAP and OCP note but no hours or hours link.
- **`--color-secondary` not used in `:root` shorthand for highlight.** Line 42 applies `background:var(--color-secondary)` inline — this is fine, but the Holistic highlight `<h2>` is overridden with `style="color:#fff;margin-top:0"` (line 111) using an inline style rather than a class. Minor, but inline styles complicate developer handoff.
- **Holistic + Optical blocks are combined into a single highlight banner** (lines 109–115), not two distinct blocks as the IA implies ("holistic + optical highlight"). The optical differentiator has no dedicated section or ID target.
- **`#holistic` anchor target is declared as a nav link** (line 75) but no element on the page has `id="holistic"`. The in-page link is broken.
- **`#optical` is in the nav** (line 76) but also has no matching `id` on the page. Both in-page nav links are dead.
- **Review "Leave us a review" link** (line 131) targets `#` — the component inventory notes this should link to the Google Business Profile review URL.
- **`SiteHeader` nav has no hamburger menu markup** for mobile (line 59 hides the nav). The component inventory specifies the header should collapse to "a hamburger + the two action buttons on mobile." There is no hamburger button — mobile users have no access to the nav items beyond the mobile action bar.

---

### 2.2 `contact.html`

#### What's correct

- SkipLink present (line 42).
- `<main id="main">` (line 49), `<footer class="site">` (line 85), `<nav class="mobilebar">` (line 91) present.
- Single `<h1>` "Contact, location & hours" (line 50). Heading order is logical: h1 → h2.
- Brand tokens applied in `:root` (lines 10–12), consistent with homepage.
- `--text-base: 18px` present.
- Click-to-call link `href="tel:+14163988200"` (line 56), directions button (line 57).
- Hours table (lines 60–65) present with `<th scope="row">` for days — semantically correct.
- After-hours guidance placeholder present (lines 66–69) — matches IA requirement.
- Map placeholder with `aria-label="Map of 3932A Keele St, North York"` (line 73) — accessible.
- Parking/transit note placeholder (line 74) — matches IA.
- Note directing prescription transfers to the dedicated form (lines 79–80) — good UX and PHIPA hygiene.
- MobileActionBar present (lines 91–95).
- Footer has NAP, OCP note, Privacy and Accessibility links (lines 85–89).
- No `<img>` elements — no missing-alt risk.
- All interactive elements are real `<a>` elements.

#### What's missing or wrong

- **General-contact form is absent.** The IA lists "simple contact form" as a Key Block for the Contact page. Lines 78–82 have a heading and a note about the form but no actual `<form>` markup. This is a significant IA gap — the page's stated purpose ("the conversion backstop") is unfulfilled without it.
  - Line 82 reads: `[Mockup note] Keep this general-contact form free of personal health information.` — this is an author note that was never replaced with actual form markup.
- **MobileActionBar is always visible on contact.html.** The `.mobilebar` rule on lines 33–35 sets `display:flex` unconditionally (no `@media` guard and no `display:none` default). On homepage.html the bar is `display:none` by default and shown only on mobile. The contact page will show the bar on all screen sizes.
- **Nav stripped from SiteHeader.** Lines 43–47 show the header contains only logo + two buttons — the nav links (Services, Holistic Wellness, Optical, Contact) are entirely absent, not even present for desktop. This reduces navigation ability for users who land directly on the contact page.
- **`--font-heading` token not declared** (same gap as homepage).
- **No JSON-LD schema** in the `<head>`.
- **No named pharmacist** displayed.
- **Footer lacks hours.** The IA requires hours in the footer; none are present.
- **`--color-secondary` not declared** in this page's `:root` (lines 10–12). The homepage uses it for the holistic highlight. If a developer copies `:root` from the contact page, the secondary colour will be missing.
- **"Send us a message" h2** (line 78) is followed immediately by paragraphs but no form. Screen-reader users following headings will find a heading that leads to nothing actionable.

---

### 2.3 `prescription-transfer.html`

#### What's correct

- SkipLink present (line 48).
- `<main id="main">` (line 54), `<footer class="site">` (line 107), `<nav class="mobilebar">` (line 113).
- Single `<h1>` "Transfer your prescription — we'll do the work" (line 55). Heading order: h1 → h2 (inside form).
- Brand tokens consistent with other pages (lines 10–12).
- `--text-base: 18px` present.
- StepList / "how it works" block (lines 59–63) — matches IA Key Block "we do the work reassurance."
- `<form aria-labelledby="formtitle">` (line 65) — form has an accessible name via the h2.
- Every `<input>` and `<select>` has a matching `<label>` with correct `for`/`id` pairing:
  - `label for="name"` / `input id="name"` (lines 69–70)
  - `label for="phone"` / `input id="phone"` (lines 72–73)
  - `label for="dob"` / `input id="dob"` (lines 75–76)
  - `label for="from"` / `input id="from"` (lines 78–79)
  - `label for="meds"` / `textarea id="meds"` (lines 81–82)
  - `label for="method"` / `select id="method"` (lines 84–85)
  - `label for="consent"` / `input id="consent"` (lines 92–97)
- **PHIPA consent checkbox present** (lines 90–98): explicit, not pre-checked, with plain-language explanation of purpose and a link to the Privacy Policy. This is the most critical PHIPA requirement — it is correctly implemented.
- **"We only ask for what we need"** note (line 67) addresses PHIPA minimal-data principle.
- `<button type="submit">` (line 100) — real button, keyboard-operable.
- Phone fallback provided (line 101).
- PHIPA back-end note (lines 102–103) — useful author signal for developers.
- `input:focus`, `select:focus`, `textarea:focus` have `outline:3px solid var(--color-action)` (line 33) — visible focus indicators.
- MobileActionBar present (lines 113–117).
- Fields use `autocomplete` attributes where appropriate (`name`, `tel`) — good UX.
- `required` on mandatory fields; `novalidate` on form to allow custom validation.

#### What's missing or wrong

- **`--font-heading` token not declared** (same gap as other pages).
- **No JSON-LD schema** in `<head>`.
- **SiteHeader nav is stripped** — only logo + Call button (lines 49–52). "Transfer Rx" header button is also absent, unlike homepage and contact. Users who want to go back to the homepage must use the mobilebar or browser back.
- **No named pharmacist** displayed.
- **Footer lacks hours.**
- **`--color-secondary` not declared** in `:root` (lines 10–12).
- **`meds` textarea is not `required`** (line 82) despite being listed as required (line 81: `<span class="req">*</span>` on the label). The `required` attribute is present on the label's visual indicator but missing from the `<textarea>` element itself. This means the form will allow submission with an empty medications field.
  - Line 81: label has `*` marker.
  - Line 82: `<textarea id="meds" name="meds" rows="3" placeholder="Name and Rx number if you have it">` — no `required` attribute.
- **`dob` (date of birth) field is not marked required** (line 75–76). The IA/compliance docs require collecting the minimum data. If DOB is truly optional for a transfer, that is correct — but if the current pharmacy requires it to release the prescription, omitting `required` may cause failed transfers. This needs a decision from the owner.
- **No explicit privacy notice block.** The compliance-checklist.md requires a "privacy notice on the form." The consent checkbox links to a Privacy Policy (line 95) but there is no dedicated, visible notice explaining how data is stored, who can access it, and retention period — only a `[Mockup note]` in the footer (lines 102–103). A short, visible privacy notice (not just a checkbox) should be added above or alongside the form.
- **MobileActionBar does not include a "Transfer" or "Home" prominent action** — it has Call, Home, Contact (lines 113–117). On the transfer page specifically, there is no way to navigate to the homepage via the action bar without a label for it being obvious; "Home" serves this, but the "Transfer" quick action from homepage/contact is replaced with "Contact" — inconsistent across pages.
- **No success/error state markup.** The component inventory requires "Success + failure states with a phone fallback." The phone fallback text is present (line 101) but no success/error state placeholders exist in the wireframe.
- **No honeypot or anti-spam note.** The component inventory flags "Honeypot/anti-spam without blocking assistive tech" as a form requirement. No mention in the wireframe.

---

## 3. Critical Issues

Issues that must be resolved before any build begins. Ordered by severity.

### C1 — Contact page general-contact form is missing (contact.html, lines 78–82)
The page's entire conversion purpose ("conversion backstop") depends on a contact form. The current markup has a heading and an author note but no `<form>`. Developer handoff without this will result in the page shipping without the form.

### C2 — `meds` textarea missing `required` attribute (prescription-transfer.html, line 82)
The label marks the field as required (`*`) but the element has no `required` attribute. A patient can submit a transfer request with no medication specified, which is not a valid transfer and will create operational failures. This is also mildly misleading to screen-reader users.

### C3 — `#holistic` and `#optical` nav links are dead (homepage.html, lines 75–76)
Two of four primary nav links resolve to nothing. On the wireframe itself this means the Holistic Wellness and Optical pages — the pharmacy's key differentiators — have no entry point from the homepage nav.

### C4 — MobileActionBar always-visible on contact.html (contact.html, lines 33–35)
The bar renders on desktop as well as mobile, permanently taking up 60px of bottom viewport on any screen width. This is a layout bug that will carry into the build if not corrected.

### C5 — No JSON-LD / SchemaJsonLd on any page
The IA mandates LocalBusiness/Pharmacy structured data on every page. Omitting it means losing Google's rich results (business hours, star rating, address) in search — a significant local SEO loss for a community pharmacy.

### C6 — No explicit privacy notice on the transfer form (prescription-transfer.html)
PHIPA requires that patients understand what data is collected, by whom, and why — before they submit. The consent checkbox addresses the "why" but not the "what happens to it." A short privacy notice (2–3 lines or a box) stating secure storage, no sharing without consent, and a contact for privacy questions is required by the compliance checklist.

---

## 4. Nice-to-Have Improvements

These would strengthen the wireframes but are not hard blockers.

### N1 — Declare `--font-heading` token across all three pages
Brand-direction.md requires a separate heading font (humanist serif or grotesque). All wireframes currently use `--font-body` for both headings and body. Adding `--font-heading: [TBD]` to `:root` — even as a placeholder — signals the decision point to the developer and avoids them defaulting to system-ui for headings.

### N2 — Add hamburger menu button for mobile on homepage.html
The nav is hidden on mobile (line 59) and replaced by the MobileActionBar, but the MobileActionBar only covers Call/Transfer/Directions. Users who need to navigate to Holistic Wellness or Optical on mobile have no path. A `<button aria-expanded>` hamburger with an off-canvas or dropdown nav would resolve this.

### N3 — TrustBar / named pharmacist block
The compliance checklist and component inventory both require OCP registration and a named pharmacist as trust signals. A small TrustBar below the hero (homepage) or in the footer (all pages) would fulfil both requirements. Even a placeholder element with a `TODO` comment would be useful in the wireframe.

### N4 — Consistent `--color-secondary` declaration across all pages
It is declared on homepage.html but not contact.html or prescription-transfer.html. If each page's `:root` is used as a standalone starting point, the secondary colour will be missing on two of three pages.

### N5 — Free-delivery banner as a distinct block (homepage.html)
The IA lists a "free-delivery banner" as a Key Block separate from the service grid. The current homepage has free delivery as one card among six (line 104). A visual banner (e.g., the same highlight treatment used for the holistic block) would better leverage this as a conversion differentiator.

### N6 — Hours in footer across all pages
The IA specifies hours in the footer. All three wireframes omit them. A one-line hours summary or a link to the contact/hours page would satisfy the requirement without cluttering the footer.

### N7 — Consistent SiteHeader nav across all pages
Homepage has the full four-link nav; contact and prescription-transfer strip it down to zero links. The component inventory describes SiteHeader as a global reusable component with a consistent nav. All three pages should have the same header (or at least a clear wireframe note explaining the intentional reduction).

### N8 — Success/error state placeholders on transfer form
The component inventory requires success and failure states. Adding `<!-- [Wireframe placeholder: success state] -->` and `<!-- [Wireframe placeholder: error state] -->` comments after the submit button would remind developers these states need designing.

### N9 — `aria-required="true"` on the consent checkbox
The `<input type="checkbox" required>` (line 91) relies on native HTML constraint validation, which is appropriate. However, adding `aria-required="true"` explicitly would make the requirement legible to all assistive technologies without ambiguity.

### N10 — Fax number in footer (all pages)
The NAP on the homepage body (line 141) and contact page (line 56) both include the fax number, but only the homepage footer includes it (line 153 — actually it does not; the footer has address + phone only). The fax is a professional-referral touchpoint. A `[confirm]` placeholder for the footer fax would be consistent.

---

## 5. Priority Fix List

Ordered by urgency — resolve these before handing wireframes to a developer.

1. **[C1] Add general-contact form markup to contact.html** — at minimum, a stub `<form>` with name, email/phone, and message fields (no PHI), a label for each, and a submit button, with a PHIPA note. The "Send us a message" h2 (line 78) is already in place; the form body is missing.

2. **[C2] Add `required` attribute to `<textarea id="meds">` in prescription-transfer.html (line 82)** — one-character fix; the label already signals it as required.

3. **[C3] Add `id="holistic"` and `id="optical"` targets to homepage.html** — at minimum, add placeholder `<section id="holistic">` and `<section id="optical">` blocks below the existing content (even if they just contain `[Holistic Wellness content — see IA]` notes). The nav links will then resolve correctly.

4. **[C4] Fix MobileActionBar display on contact.html (lines 33–35)** — change `display:flex` to `display:none` in the base rule and add `@media(max-width:720px){.mobilebar{display:flex}}` to mirror the homepage pattern.

5. **[C5] Add JSON-LD `<script type="application/ld+json">` to the `<head>` of all three pages** — a LocalBusiness/Pharmacy schema stub with name, address, telephone, openingHours, and url properties. Even placeholder values are sufficient in a wireframe; it signals to the developer that this is required.

6. **[C6] Add a visible privacy notice block to prescription-transfer.html** — a short `<div>` or `<aside>` above the consent checkbox explaining: what data is collected, that it is used only to process the transfer, that it is stored securely, and a privacy contact. Three to five sentences is sufficient.

7. **[N1] Declare `--font-heading` in `:root` across all three pages** — add `--font-heading: [Lora, "Source Serif 4", serif]` (or chosen grotesque) as a placeholder so developers do not skip the heading font decision.

8. **[N4] Add `--color-secondary: #C2724B` to contact.html and prescription-transfer.html `:root` blocks** — keeps all pages self-contained.

9. **[N7] Restore the four-link nav to contact.html and prescription-transfer.html headers** — copy the `<nav aria-label="Primary">` block from homepage.html lines 72–77 into both secondary-page headers, or add a clear `<!-- [wireframe note: nav intentionally reduced — confirm with IA] -->` comment explaining the omission.

10. **[N3] Add a TrustBar placeholder to all three pages** — a `<div class="trustbar">` with `[OCP registration number] · [Pharmacist name, RPh] · Registered with the Ontario College of Pharmacists` text, positioned below the hero on the homepage and in the footer area on other pages.
