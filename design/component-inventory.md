---
title: "Component Inventory"
version: "1.0"
last_updated: "2026-05-27"
status: active
category: design
owner: internal
description: "Catalogue of all reusable Astro components for the site, including global layout, content/trust, service presentation, conversion, and form components."
---

# Component Inventory

Reusable building blocks for the site. Designing in components keeps the build cost-conservative
(build once, reuse everywhere), keeps the brand consistent, and makes accessibility easy to get
right in one place. These map directly to the recommended Astro stack (each is an `.astro`
component) but the inventory is stack-agnostic.

## Global / layout

- **SiteHeader** — logo, short nav, persistent **Call** + **Transfer Rx** buttons. Collapses to a
  hamburger + the two action buttons on mobile.
- **MobileActionBar** — sticky bottom bar on phones: **Call · Transfer · Directions**. The single
  most important conversion component for mobile patients.
- **SiteFooter** — NAP, hours, map link, OCP/registration note, privacy + accessibility links,
  social links.
- **SkipLink** — "skip to content" for keyboard/screen-reader users (accessibility requirement).
- **SchemaJsonLd** — injects LocalBusiness/Pharmacy structured data.

## Content / trust

- **NapBlock** — name, address (with map link), click-to-call phone, fax, hours. Single source of
  truth for NAP, reused in header context, contact page, and footer.
- **ReputationStrip** — 4.9★ rating + selected reviews + "leave a review" link. Surfaces the
  pharmacy's strongest asset.
- **TrustBar** — OCP registration, named pharmacist, accreditation/affiliation logos.
- **ReviewCard** — a single testimonial (name/initial, quote, source). Compliant, no fabricated text.
- **HoursTable** — structured weekly hours + holiday note; mirrors the schema data.

## Service presentation

- **ServiceCard** — icon, service name, one-line "who it's for", link to the service page. Used in
  the homepage service grid.
- **ServiceHero** — per-service header: title, plain-language intro, primary CTA.
- **StepList** — "How it works" 1-2-3 steps (used on Transfers, Refills, Blister Packaging).
- **EligibilityNote** — "who this is for / what you need" callout.
- **SegmentPanel** — "Who We Help" panel for Seniors/Family and Students segments.

## Conversion

- **CallButton** — `tel:` link styled as a button; tracks click-to-call events.
- **DirectionsButton** — one-tap to Google/Apple Maps.
- **MapEmbed** — Google Maps embed (lazy-loaded for performance).
- **TransferForm** — from-pharmacy, patient details, medication(s), **consent checkbox**. PHIPA-safe
  (see compliance doc): secure transport, minimal fields, explicit consent.
- **RefillForm** — Rx number(s), name, contact, pickup/delivery choice, consent.
- **DeliveryRequestForm** — address, preferred time, consent.
- **BookingCTA** — links to the booking flow for MedsCheck/vaccines (embedded scheduler or form).
- **ReviewRequestLink** — post-service prompt linking to the GBP review URL.

## Forms — shared behaviour (build once)

- Real `<label>`s, visible focus states, descriptive error messages, keyboard operable.
- Minimal personal-health data; **explicit consent** language; secure (HTTPS + compliant backend).
- Honeypot/anti-spam without blocking assistive tech.
- Success + failure states with a phone fallback ("or call us at …").

## Accessibility baseline (applies to all components)

- Semantic HTML, logical heading order, landmark regions.
- Colour contrast ≥ WCAG 2.2 AA; never colour-only meaning.
- Alt text on meaningful images; empty alt on decorative ones.
- Full keyboard operability; visible focus; no seizure-inducing motion.

## Performance notes

- Static-render everything possible; lazy-load the map and below-fold images.
- One icon system (inline SVG); avoid heavy JS. These components should ship little/no client JS,
  which is what keeps Lighthouse high and hosting free.
