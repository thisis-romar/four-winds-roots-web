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
│   └── Vaccinations & Injections
├── Holistic Wellness
├── Optical & Wellness Centre
├── Who We Help
│   ├── Seniors & Family Care
│   └── Student Pharmacy near York University
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

### Vaccinations & Injections
- **Purpose:** seasonal + clinical conversions (flu, COVID/Paxlovid, travel, injections).
- **Key blocks:** services list, who can get them, book-a-vaccine CTA, walk-in vs booked.

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
