---
title: "Owner Content Questionnaire"
version: "1.1"
last_updated: "2026-05-27"
status: draft
category: content
owner: pending_owner_review
description: "Structured questionnaire to collect all owner-supplied information needed before website build can begin, covering brand identity, NAP, hours, services, and compliance."
---

# Owner Content Questionnaire

> **Purpose:** Gather everything needed from the pharmacy owner before the website build begins.
> Complete this before the Astro scaffold is filled with real content. Sections are ordered by
> priority — brand identity and NAP are needed first; photography can come later.

---

## Section 1 — Brand identity (blocking: needed before any copy is written)

**1.1 Canonical business name**
What is the official, legal name of the pharmacy as it should appear on the website and all
directories?
- [ ] Four Winds Roots Pharmacy
- [ ] R.O.O.T.S. Four Winds Pharmacy
- [ ] Roots Four Winds Pharmacy
- [ ] Other: ______________________

> This name will be used identically in the Google Business Profile, schema markup, website title
> tags, and every directory listing. Inconsistency suppresses local search ranking.

**1.2 Founding / "serving since" year**
What year did the pharmacy open under its current ownership?
Year: ______

**1.3 OCP registration number**
The Ontario College of Pharmacists registration number for the pharmacy (not the individual
pharmacist). This is published on the OCP website and displayed on the website as a trust signal.
OCP Accreditation #: ______

**1.4 Primary pharmacist / owner**
Name and credentials of the lead pharmacist to display on the website:
Name: ______  Credentials (e.g., RPh, PharmD): ______

Are there additional pharmacists or staff to feature? (Names, credentials): ______

**1.5 Languages spoken**
Which languages can staff serve patients in?
- [ ] English
- [ ] French
- [ ] Hindi
- [ ] Punjabi
- [ ] Urdu
- [ ] Tagalog
- [ ] Vietnamese
- [ ] Arabic
- [ ] Somali
- [ ] Other: ______________________

---

## Section 2 — NAP and contact (blocking: needed before launch)

**2.1 Address confirmation**
Confirm the exact street address as it should appear on the website and GBP:
```
______________________________________
North York, ON  ______  (postal code)
```

**2.2 Phone number**
Primary patient-facing phone number: ______
Is (416) 398-8200 your phone, or does Can Pharm Services at the adjacent unit share it?
[ ] This is Four Winds Roots' exclusive number
[ ] There is a shared/forwarding situation — explain: ______

**2.3 Fax number**
Fax for prescription transfers: ______

**2.4 Email address (for the website contact form)**
[ ] Use a dedicated inbox: ____________________@______
[ ] Do not publish an email — use the contact form only

**2.5 Website domain preference**
Do you have a domain registered? If yes: ______
If not, preferred options (check availability before committing):
- [ ] fourwindsrootspharmacy.ca
- [ ] rootspharmacy.ca
- [ ] fourwindspharmacy.ca
- [ ] Other preference: ______

**2.6 Google Business Profile**
Do you currently have a GBP claimed and verified?
[ ] Yes — I can provide access
[ ] Yes — but it may need updating
[ ] No — needs to be claimed
[ ] Unsure

> See `research/local-seo/gbp-disambiguation.md` — GBP setup is urgent due to the Can Pharm
> / Guardian Four Winds legacy listing at the same address.

---

## Section 3 — Hours (blocking: needed before launch)

**3.1 Regular weekly hours**
| Day | Opens | Closes | Closed? |
|---|---|---|---|
| Monday | | | [ ] |
| Tuesday | | | [ ] |
| Wednesday | | | [ ] |
| Thursday | | | [ ] |
| Friday | | | [ ] |
| Saturday | | | [ ] |
| Sunday | | | [ ] |

**3.2 Holiday hours**
Are you open on Ontario statutory holidays? If so, with reduced hours?
[ ] Closed all statutory holidays
[ ] Open with reduced hours — list: ______
[ ] Varies — explain: ______

**3.3 After-hours / emergency**
What should patients do if they need a pharmacist outside business hours?
(e.g., emergency pharmacy referral, 24-hour hotline number)
______________________________________

---

## Section 4 — Services (blocking: needed before service pages are written)

Review the list below and mark each service as **Yes (offered)**, **No (not offered)**, or
**Planned (coming soon)**:

| Service | Status | Notes |
|---|---|---|
| Prescription refills (standard) | | |
| Prescription transfers (in) | | |
| Prescription transfers (out — will you transfer away?) | | |
| MedsCheck / Medication reviews | | |
| Blister packaging / Compliance packs | | |
| Free delivery (local) | | Coverage area? ______ |
| Flu vaccine | | |
| COVID-19 vaccine | | |
| Paxlovid / COVID antivirals | | |
| Travel vaccines / travel health | | |
| Injections (other) | | Which? ______ |
| Minor ailments prescribing (Ontario expanded scope) | | |
| Smoking cessation | | |
| Diabetes consultation / CDE on staff | | |
| Blood pressure kiosk / monitoring | | |
| Compounding (non-sterile) | | |
| MedsCheck | | |
| Medication return / sharps disposal | | |
| Home health care supplies (RAID) | | Brands carried? ______ |
| Holistic wellness consultation | | Describe scope: ______ |
| Herb-drug interaction review | | Who conducts? ______ |
| Optical services | | Describe: ______ (retail? eye exam? dispensing?) |
| Wellness products (natural health) | | |
| ODB / Ontario Drug Benefit accepted | | |
| Senior discount | | Amount/eligibility: ______ |

**4.1 Compounding details (if offered)**
What types of compounding does the pharmacy perform?
[ ] Non-sterile (creams, ointments, liquids, capsules)
[ ] Sterile (IV, ophthalmics)
[ ] Neither — compounding is not offered
[ ] Refer to a partner pharmacy — which one? ______

**4.2 Holistic wellness — scope clarification**
The website will have a dedicated Holistic Wellness page. To avoid unsupported health claims
(OCP compliance), describe exactly what is offered:
______________________________________
______________________________________

> Important: Do not make therapeutic claims that exceed the pharmacist's regulated scope of
> practice. See `design/compliance-checklist.md` → OCP advertising standards.

**4.3 Optical centre — scope clarification**
Describe the optical services in more detail:
[ ] Licensed optometrist on premises (eye exams available)
[ ] Optical products (frames, lenses, contact lenses) — no exams
[ ] Referral to attached/partnered optometrist
[ ] Wellness products only (not regulated optical)
Optometrist name (if applicable): ______

---

## Section 5 — Online booking and forms

**5.1 Prescription refill / transfer forms**
Would you like patients to be able to submit refill and transfer requests online?
[ ] Yes — I want online forms (requires PHIPA-compliant form vendor — see `research/phipa-vendor-comparison.md`)
[ ] No — phone only is fine at launch
[ ] Phase 2 — start with phone, add forms later

**5.2 Appointment / booking**
Would you like online booking for consultations, vaccines, or MedsCheck appointments?
[ ] Yes — immediate priority
[ ] Yes — but phase 2
[ ] No — walk-in / phone booking only

**5.3 Delivery requests**
Would you like an online delivery request form?
[ ] Yes
[ ] No — phone only

---

## Section 6 — Brand assets

**6.1 Logo**
Do you have a logo file?
[ ] Yes — provide: SVG preferred, PNG acceptable. Need: colour + monochrome + favicon crop
[ ] No — need a designer. Brief is in `design/brand-direction.md`

**6.2 Pharmacy photos**
Photos needed for the website (warm, real, local — see `design/brand-direction.md`):
- [ ] Storefront exterior (daytime, clear signage)
- [ ] Interior (dispensing counter area)
- [ ] Optical section
- [ ] Wellness / natural health product area
- [ ] Team photo (pharmacist + staff — with consent)
- [ ] Any existing photos to share?

**6.3 Existing marketing materials**
Do you have any existing brochures, patient handouts, or social media content that could inform
the website copy?
[ ] Yes — will share: ______
[ ] No

**6.4 Social media accounts**
| Platform | Handle / URL | Active? |
|---|---|---|
| Facebook | | [ ] |
| Instagram | | [ ] |
| Google Business Profile | | [ ] |
| Other | | [ ] |

---

## Section 7 — Reviews and reputation

**7.1 Google reviews**
How many Google reviews do you currently have, and what is your current rating?
Rating: ______★  Count: ______

**7.2 Review platform links**
Provide your GBP review link (patients use this to leave reviews):
______________________________________

**7.3 Testimonials**
Are you comfortable with a testimonials section on the website?
[ ] Yes — I can share 3–5 patient quotes (with consent) for the website
[ ] No — I prefer to link to Google reviews only
[ ] Unsure — let's discuss

> Note: OCP advertising guidelines govern patient testimonials for pharmacies. See
> `design/compliance-checklist.md`. Do not publish testimonials that make unsubstantiated
> health claims.

---

## Section 8 — Privacy and compliance

**8.1 Privacy contact**
Who is the pharmacy's designated privacy contact (the person patients reach for PHIPA requests)?
Name and title: ______

**8.2 OCP advertising review**
Are you comfortable having the Holistic Wellness page and any testimonial content reviewed
against OCP advertising standards before launch?
[ ] Yes
[ ] Please explain what the OCP requires first

**8.3 Stack approval**
The recommended build is Astro + Decap CMS + Netlify (free tier). Details in
`design/stack-recommendation.md`. Do you approve this stack?
[ ] Yes — proceed with Astro
[ ] Prefer WordPress — easier for me to self-manage
[ ] Want to discuss before deciding

---

## Priority order for collecting answers

1. **Immediate (blocks all copy):** Sections 1.1, 2.1, 2.2, 3.1 — canonical name, address, phone, hours
2. **Before forms are built:** Sections 5.1–5.3 and PHIPA vendor selection (`research/phipa-vendor-comparison.md`)
3. **Before content is written:** Section 4 (full service list)
4. **Before design finalization:** Sections 6.1–6.2 (logo + photos)
5. **Before launch:** Sections 7–8 (reviews, privacy, compliance sign-off)

---

*Document version: 2026-05-26. Prepared as part of the Four Winds Roots Pharmacy web research monorepo.*

## Pass 3 — Confirmed Primary-Source Facts (2026-05-27)

*Sources: Ontario Health atHome directory March 2026, Lumino Health May 2026, FedEx locator, PharmacyList, Medimap, FriesenPress publisher database.*

### Items Resolved by Primary-Source Research

The following questionnaire items no longer require owner input — they have been confirmed from public primary sources:

1. **Canonical address** — 3932A Keele St (Centennial Plaza), North York, ON M3J 1N8
2. **Phone** — 416-398-8200 (confirmed across FedEx, Lumino, atHome)
3. **Fax** — 416-398-6745
4. **Trade name variants** — "R.O.O.T.S. Four Winds Pharmacy" (FedEx, PharmacyList) and "Four Winds Roots Pharmacy" (Lumino, atHome) are both live; primary preference still needed from owner (Q 1.1)
5. **Operating entity** — Can Pharm Services Inc. (Medimap; variant of user-supplied "Can Pharm Service Inc")
6. **Lead pharmacist** — Winston Clarke, Pharmacist
7. **Natural health practitioner** — Pamela Clarke, Natural Health Practitioner (not RHPA-regulated)
8. **Pamela Clarke book** — *Take Control Now: Your Health Is Your Responsibility*, FriesenPress, 2015, ISBN 978-1460258354
9. **Languages** — English confirmed; additional languages unconfirmed (Q 1.5 still open)
10. **Accessibility** — partially wheelchair-accessible (confirmed)
11. **Prescription dispensing fee** — $12.99 per prescription
12. **Free local delivery** — confirmed (coverage area still needed — Q 4 table)
13. **Blister packaging** — confirmed, no extra cost
14. **MedsCheck (ODB)** — confirmed
15. **Minor ailments service** — confirmed at this location: 5 conditions (skin rashes, pink eye, insect bites, acne, uncomplicated UTIs)
16. **ODB Smoking Cessation Program** — confirmed
17. **Sharps Disposal Program** — confirmed
18. **Medications Return Program** — confirmed
19. **Holistic descriptor** — "registered holistic pharmacy that deals with herbs and drug interactions" (atHome directory)
20. **FedEx Authorized ShipCentre** — co-located at same address and phone
21. **Reputation** — 4.9/5, 52 patient ratings (Lumino Health, May 2026)
22. **Finch West LRT** — Line 6 opened December 7, 2025; Finch West Station at Keele St

### Remaining Open Items for Owner Call

The following items could not be confirmed from public sources and must be collected directly from the owner before website content can be finalized:

1. **Preferred canonical trade name** — which name to use as the single public-facing brand on GBP, website, and all directories
2. **ROOTS acronym expansion** — does "R.O.O.T.S." stand for something? (brand storytelling opportunity)
3. **Founding year / "serving since"** date
4. **OCP pharmacy registration (accreditation) number**
5. **Google Business Profile status** — claimed/verified/needs claiming; GBP access for updates
6. **Pamela Clarke CNO/RN status** — whether she holds any active Ontario regulated health profession registration (determines what credential language is permissible in copy)
7. **Full weekly hours** (Monday–Sunday) and holiday hours
8. **Delivery coverage area and schedule**
9. **Compounding services** — offered yes/no; if yes, non-sterile only or sterile; dosage forms
10. **Optical services detail** — licensed optometrist, dispensing only, or wellness products only
11. **Additional wellness services** beyond Pamela Clarke's consultations
12. **Logo and brand assets** — existing logo files or need for new design
13. **OCP advertising sign-off** — owner consent to have holistic/wellness copy and any testimonials reviewed against OCP advertising standards before launch
