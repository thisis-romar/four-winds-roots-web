---
title: "Information Architecture"
version: "1.2"
last_updated: "2026-05-27"
status: active
category: design
owner: internal
description: "Sitemap and page-by-page plan for the Four Winds Roots Pharmacy website, including the /about/ and /services/minor-ailments/ pages added in the latest update."
---

# Information Architecture

The sitemap and page-by-page plan for the Four Winds Roots Pharmacy website. Organized around
**patient intent**, with the conversion actions and the holistic/optical differentiators
prominent throughout.

## Sitemap

```
Home
├── Services
│   ├── Prescription Refills
│   ├── Prescription Transfers
│   ├── Medication Reviews / MedsCheck
│   ├── Blister Packaging
│   ├── Free Delivery
│   ├── Preventive Care & Holistic Immunizations
│   └── Minor Ailments                              ← /services/minor-ailments/
├── Holistic Wellness
├── Optical & Wellness Centre
├── Who We Help
│   ├── Seniors & Family Care
│   └── Student Pharmacy near York University
├── About / Meet the Team                           ← /about/
└── Contact / Location / Hours
```

Top navigation (kept short for mobile): **Services · Holistic Wellness · Optical · Contact**, plus
two persistent action buttons: **Call** and **Transfer Rx**.

## Global elements (every page)

- Persistent header: logo, short nav, **click-to-call** button, **Transfer Prescription** button.
- Persistent footer: NAP, hours, map link, OCP/registration note, privacy + accessibility links.
- Sticky mobile action bar: **Call** · **Transfer** · **Directions**.
- LocalBusiness/Pharmacy JSON-LD schema in the head.

## Page-by-page plan

### Home
- **Purpose:** establish the holistic-community position, prove trust (4.9★), route to actions.
- **Key blocks:** hero (positioning + Call/Transfer CTAs), reputation strip (rating + reviews),
  service grid, holistic + optical highlight, free-delivery banner, "who we help" segments,
  NAP + map + hours, review prompt.
- **Primary keyword:** pharmacy Keele and Finch / holistic pharmacy North York.

### Prescription Refills
- **Purpose:** let patients request a refill in under a minute.
- **Key blocks:** what's needed (Rx number), refill form (PHIPA-safe), call alternative, turnaround
  + delivery note.

### Prescription Transfers
- **Purpose:** capture switchers — a top conversion.
- **Key blocks:** "we do the work" reassurance, transfer form (from-pharmacy + meds + consent),
  call alternative, "ready in X" expectation.

### Medication Reviews / MedsCheck
- **Purpose:** explain the free MedsCheck and book one.
- **Key blocks:** who qualifies, what to expect, book-a-consultation CTA, plain-language benefits.

### Blister Packaging
- **Purpose:** adherence offering for seniors/caregivers/complex regimens.
- **Key blocks:** how it works, who it helps, no-extra-cost note, request CTA, delivery tie-in.

### Free Delivery
- **Purpose:** convenience hook.
- **Key blocks:** coverage area, how to request, delivery request form, "free" stated plainly.

### Preventive Care & Holistic Immunizations
- **Route:** /services/preventive-care/
- **Purpose:** frame immunizations, antiviral prescribing, and travel health as part of the
  holistic care philosophy — prevention as whole-person wellness, not a clinical counter service.
- **Key blocks:** protective services list (flu, COVID, travel health, Paxlovid if confirmed),
  holistic connection paragraph (links to /holistic-wellness), no-referral eligibility note,
  walk-in vs appointment, BookingCTA.
- **Heading language:** "Protective Health", "Preventive Care", "Immunizations" — avoid leading
  with "Vaccinations" in H1/H2; keep it in body copy for SEO only.

### Holistic Wellness  *(differentiator)*
- **Purpose:** own the holistic niche no competitor claims.
- **Key blocks:** what holistic care means here (herb–drug interaction review, wellness),
  who it's for, how to start, compounding if offered, clear non-overclaiming language.

### Optical & Wellness Centre  *(differentiator)*
- **Purpose:** the unique "under one roof" offering.
- **Key blocks:** optical services, wellness services, how it complements pharmacy care, CTA.

### Seniors & Family Care
- **Purpose:** segment landing for adherence + trust.
- **Key blocks:** blister packaging, delivery, reviews, caregiver-friendly framing, call CTA.

### Student Pharmacy near York University  *(under-served market)*
- **Purpose:** capture the campus market with convenience + speed.
- **Key blocks:** fast transfers, delivery, multilingual service, proximity to campus, transfer CTA.

### Contact / Location / Hours
- **Purpose:** the conversion backstop.
- **Key blocks:** click-to-call, Google Maps embed, full hours (incl. holidays), parking/transit
  note, after-hours instructions, simple contact form, fax.

## Conversion features (mapped to pages)

| Feature | Where |
|---|---|
| Click-to-call (`tel:`) | Global header + footer + mobile bar |
| Google Maps embed | Home, Contact |
| Prescription transfer form | Transfers, header CTA |
| Refill request form | Refills |
| Delivery request form | Free Delivery |
| Book consultation / vaccine | MedsCheck, Vaccinations |
| Review request link | Home (post-service), footer |
| Clear business hours | Contact, footer |
| After-hours / emergency instructions | Contact |

> Every form that collects health information (refills, transfers, delivery, booking) must follow
> the PHIPA rules in `compliance-checklist.md` — consent, secure transport, minimal data.

## Pass 3 — Confirmed Primary-Source Facts (2026-05-27)

*Sources: Ontario Health atHome directory March 2026, Lumino Health May 2026, FedEx locator, PharmacyList, Medimap.*

### Trade names and address

Both trade names are confirmed valid and co-exist across directories:
- **"R.O.O.T.S. Four Winds Pharmacy"** — FedEx Authorized ShipCentre listing, PharmacyList
- **"Four Winds Roots Pharmacy"** — Lumino Health, Ontario Health atHome

Address confirmed: **3932A Keele St (Centennial Plaza), North York, ON M3J 1N8**. Phone: **416-398-8200**. Fax: 416-398-6745.

### Personnel

- **Winston Clarke** — Pharmacist (pharmacist voice for all clinical copy)
- **Pamela Clarke** — Natural Health Practitioner; author of *Take Control Now: Your Health Is Your Responsibility* (FriesenPress, 2015, ISBN 978-1460258354). Use name + title + book citation only — see `compliance-checklist.md` for framing guardrails.

### Confirmed services (8 + FedEx co-brand)

Prescription dispensing ($12.99 dispensing fee), free local delivery, blister packaging (no extra cost), MedsCheck (ODB), minor ailments (5 conditions confirmed at this location: skin rashes, pink eye, insect bites, acne, uncomplicated UTIs — **not** all 13 Ontario-authorized conditions), ODB Smoking Cessation Program, Sharps Disposal Program, Medications Return Program. FedEx Authorized ShipCentre is co-located at the same address and phone.

### Sitemap implications

- Minor Ailments page copy must specify "5 confirmed conditions" — do not write "all minor ailments" without owner confirmation.
- Holistic Wellness page should use atHome's confirmed descriptor: "holistic pharmacy that deals with herbs and drug interactions."
- FedEx co-location is a useful Contact page detail (convenience signal for the community).
- Compounding is **not confirmed** from public data — omit from sitemap until owner confirms.

### Transit note

The **Finch West LRT (Line 6)** opened December 7, 2025 — 18 stops, with Finch West Station at Keele St. Include in the Contact / Location / Hours page transit section as a confirmed landmark.
