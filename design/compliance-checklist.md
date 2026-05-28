---
title: "Compliance Checklist — AODA / WCAG 2.2 AA + PHIPA + OCP"
version: "1.1"
last_updated: "2026-05-27"
status: review
category: compliance
owner: pending_owner_review
description: "Ontario-specific compliance checklist covering AODA/WCAG 2.2 AA accessibility, PHIPA health privacy, and OCP advertising standards for the pharmacy website."
---

# Compliance Checklist — AODA / WCAG 2.2 AA + PHIPA + OCP

Ontario-specific compliance for a pharmacy website. This is **research guidance, not legal advice**
— confirm specifics with the pharmacy's privacy advisor / the Ontario College of Pharmacists (OCP)
before launch. Two regimes matter most: **AODA/WCAG** (accessibility) and **PHIPA** (health privacy).

## 1. Accessibility — AODA → WCAG 2.2 Level AA

In Ontario, the AODA requires websites to meet **WCAG 2.0 AA**, and **WCAG 2.2 AA** is the accepted
current standard. Private-sector organizations with **20+ employees** also file an Accessibility
Compliance Report (the next is due **Dec 31, 2026**) — confirm whether the pharmacy meets the
employee threshold. Even if it doesn't, WCAG 2.2 AA is the right bar (and it overlaps heavily with
good SEO and senior usability).

**Checklist (build to these):**
- [ ] Text alternatives (`alt`) for all meaningful images; empty `alt` for decorative ones.
- [ ] Colour contrast ≥ 4.5:1 (body) / 3:1 (large text + UI); never colour-only meaning.
- [ ] Full keyboard operability; visible focus indicators; logical tab order; a "skip to content" link.
- [ ] Semantic structure: one `<h1>`/page, logical heading order, landmark regions, real lists.
- [ ] Forms: programmatic `<label>`s, clear instructions, descriptive error messages, error
      identification + suggestions.
- [ ] No seizure-inducing flashing; respect reduced-motion preferences.
- [ ] Resizable text to 200% without loss of content/function; responsive reflow.
- [ ] Captions/transcripts for any video/audio added later.
- [ ] Accessible name + role for all interactive controls (ARIA only where semantics fall short).
- [ ] Publish an **accessibility statement** with a contact route for accessibility issues.
- [ ] Validate with automated tooling (axe / Lighthouse) **and** manual keyboard + screen-reader
      testing before launch.

## 2. Health privacy — PHIPA

A pharmacy is a **health information custodian** under Ontario's PHIPA. Any web feature that
collects personal health information (refill, transfer with Rx numbers, delivery, booking,
consultations) is in scope. Penalties are significant (up to **$200,000** individuals /
**$1,000,000** corporations).

**Checklist:**
- [ ] **Collect the minimum** personal health information necessary on any form. Prefer "we'll call
      you back" flows over collecting full health histories online.
- [ ] **Knowledgeable, voluntary consent**: clear consent language on every health-data form
      explaining what is collected and why; no pre-checked boxes.
- [ ] **Express consent** required for any use beyond direct care (e.g., marketing/newsletter) —
      keep marketing opt-ins separate from care forms.
- [ ] **Secure transport + storage**: HTTPS everywhere; form submissions handled by a
      **PHIPA-compliant backend/vendor** (a signed agreement that the vendor also complies). Do
      **not** route health data through plain email or a non-compliant form service.
- [ ] **Vendor due diligence**: confirm any form/hosting/booking provider meets PHIPA (data
      residency, encryption, breach handling). This is an open decision — see below.
- [ ] **Audit logging** of access to any stored health information; retention + secure disposal
      aligned to OCP record-keeping guidance.
- [ ] **Privacy policy** describing collection, use, disclosure, safeguards, and how patients can
      access/correct their information and reach the privacy contact.
- [ ] **Breach response** process documented.

> **Design implication:** the recommended static (Astro) site has no database and stores nothing by
> default — which *reduces* PHIPA surface. The forms are the only sensitive part, so route them to a
> vetted PHIPA-compliant form/booking service rather than building custom storage. Decide
> vendor-vs-custom early (flagged in `content-model.md` and `stack-recommendation.md`).

## 3. Professional / advertising standards — OCP

- [ ] Display **OCP registration / accreditation** and named pharmacist(s) as trust signals.
- [ ] **No unsupported or misleading health claims** (especially on the Holistic Wellness page);
      keep language careful and evidence-based.
- [ ] Testimonials/reviews handled compliantly (genuine, not misleading; follow OCP advertising
      guidance on patient testimonials — confirm what is permitted).
- [ ] Clear, accurate service descriptions; don't imply services not actually offered.

## 4. General web compliance

- [ ] Cookie/analytics consent if any non-essential cookies/trackers are used (keep analytics
      privacy-friendly; avoid trackers on health-data pages).
- [ ] Accurate NAP and hours (consumer-protection / trust).
- [ ] Accessible, readable privacy + accessibility pages linked in the global footer.

## Pre-launch sign-off gate

1. Automated + manual accessibility pass (axe/Lighthouse + keyboard + screen reader).
2. Privacy advisor review of every form + the privacy policy (PHIPA).
3. OCP/advertising review of holistic and testimonial content.
4. Confirm the form/booking vendor's PHIPA compliance in writing.

## Pass 3 — Confirmed Primary-Source Facts (2026-05-27)

Three specific compliance risks were identified during primary-source research. Treat these as hard guardrails — do not publish content that violates them.

### (a) Pamela Clarke framing risk

Pamela Clarke's confirmed title from public sources is **"Natural Health Practitioner."** This is NOT a regulated title under Ontario's *Regulated Health Professions Act* (RHPA). Her private credentials include a Clayton College of Natural Health (CCNH) background — that institution closed in July 2010 and was not accredited. Her Ontario CNO/RN registration status is unverified from public data.

**Required framing in all website copy:** use only her name + "Natural Health Practitioner" + citation of her book (*Take Control Now*, FriesenPress, 2015). Do not append "RN", "BSN", or any credential strings that imply RHPA-regulated status. Do not publish a credential list without owner-supplied verification. Do not make clinical treatment claims on her behalf.

### (b) "Registered holistic pharmacy" claim guardrail

The Ontario Health atHome directory describes the pharmacy as a "registered holistic pharmacy that deals with herbs and drug interactions." In this context, **"registered" means OCP community pharmacy registration** — not a separate or additional holistic accreditation.

**Safe copy:** "holistic pharmacy," "holistic philosophy," "herbs and drug interactions."
**Unsafe copy:** "OCP-registered holistic pharmacy" (implies OCP endorses the holistic practice specifically, which is not the case and risks misleading patients per OCP advertising standards). The holistic/wellness copy must be reviewed against OCP advertising standards before launch — confirm with owner (see `content-questionnaire.md` — Remaining Open Items #13).

### (c) Patient rating citation policy

The pharmacy holds a confirmed **4.9/5 rating from 52 patient ratings on Lumino Health** (May 2026). This is a citable trust signal.

**Required citation format:** "Rated 4.9/5 on Lumino Health (52 patient ratings)" with date or "as of [month year]."
**Prohibited framing:** Do not present the Lumino rating as a clinical quality assessment, an independent audit, or an endorsement by Lumino/Sun Life. Do not round up or alter the rating. The rating is time-sensitive — update the citation when the underlying data changes. Do not use the rating in the same sentence as a therapeutic claim.
