---
title: "Competitor Services Comparison Matrix"
version: "1.0"
last_updated: "2026-05-27"
status: active
category: research
owner: internal
description: "Side-by-side services comparison across all 18 competitors in the Keele/Finch corridor, identifying differentiation gaps, table-stakes minimums, and strategic priorities for Four Winds."
---

# Competitor Services Comparison Matrix

> **Purpose:** Side-by-side comparison of services and products offered by all 18 competitors
> in the Four Winds Roots Pharmacy market corridor (Keele/Finch/Jane/Wilson, North York).
> Use this to identify differentiation gaps, table-stakes minimums, and strategic priorities.
>
> **Data source:** Raw JSON files in `research/competitor-audit/raw/` — all fetched 2026-05-26.
> **Audit date:** 2026-05-26
> **Compiled by:** Task #19 synthesis agent

---

## Competitor legend

### Tier 1 — Owned website pharmacies
| Code | Name | Address | Website | Confidence |
|---|---|---|---|---|
| **HSP** | HealthShield Pharmacy | ~1700 Finch Ave W area | healthshield.ca | HIGH |
| **SUL** | Sultan Pharmacy | North York | sultanpharmacy.ca | MEDIUM-HIGH |
| **STA** | The Station Apothecary | North York (Healthful Pharmacy group) | healthfulpharmacy.ca | MEDIUM |
| **THP** | Total Health Pharmacy | North York (40+ location network) | thpharmacy.com | HIGH |
| **UHC** | University Health Centre / getmeds.ca | Near York U campus | getmeds.ca | MEDIUM |
| **DFP** | Dufferin-Finch Pharmacy | Dufferin & Finch area | dufferinfinchpharmacy.ca | MEDIUM |

### Tier 2 — Network-template pharmacies
| Code | Name | Address | Network | Confidence |
|---|---|---|---|---|
| **BHP** | BH Pharmacy | 1300 Finch Ave W | Remedy'sRx / Guardian-IDA | HIGH |
| **WCG** | Wellcare Pharmacy | 3352 Keele St | Guardian-IDA | HIGH |
| **NOR** | Nor-Arm Pharmacy | 1280 Finch Ave W | I.D.A. | MEDIUM |
| **PSV** | Pharmasave / K&F Compounding | 1275 Finch Ave W | Pharmasave + Independent | HIGH |
| **WMT** | Walmart Pharmacy | 3757 Keele St | Walmart Canada | MEDIUM-HIGH |

### Tier 3 — Directory-only pharmacies (no owned website)
| Code | Name | Address | Confidence |
|---|---|---|---|
| **PHD** | Pharma D Drugs | 45 Four Winds Dr | HIGH |
| **WLS** | Wilson Compounding Pharmacy | 1077 Wilson Ave | HIGH |
| **JWP** | Jane Wilson Pharmacy | 2111 Jane St | MEDIUM |
| **YRK** | Yorkview Pharmacists & Chemists | 3695 Keele St (0.6 km from Four Winds) | HIGH |
| **CAN** | Can Pharm Services (fmr. Guardian Four Winds) | 3932A Keele St (same building) | LOW |

> **Note on PSV:** Pharmasave / Keele & Finch Compounding (Tier 2) and Keele & Finch
> Compounding Pharmacy (Tier 3) are the **same physical location** at 1275 Finch Ave W
> (phone 647-349-2273, owner Richard Rizk). Data is merged into one entry (PSV).

### The client pharmacy
| Code | Name | Address | Status |
|---|---|---|---|
| **4WR** | Four Winds Roots Pharmacy | 3932A Keele St, North York | No website yet — **[TBD]** = awaiting owner confirmation |

---

## Symbol key

| Symbol | Meaning |
|---|---|
| ✓ | Confirmed offered (from fetched source) |
| ✓* | Conditional — see note |
| – | Not advertised / not offered |
| ? | Unknown — not confirmed from available sources |
| [TBD] | Four Winds — owner must confirm |

---

## Part 1 — Core dispensing and clinical services

| Service | HSP | SUL | STA | THP | UHC | DFP | BHP | WCG | NOR | PSV | WMT | PHD | WLS | JWP | YRK | CAN |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Prescription dispensing | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Online refill requests | ✓ | ? | ? | ✓ | ? | ? | ✓ | ✓ | ? | ? | ? | ? | ? | ? | ? | ? |
| Prescription transfers (in) | ✓ | ? | ✓ | ? | ? | ? | ✓ | ✓ | ? | ? | ? | ? | ✓ | ? | ? | ? |
| MedsCheck / medication review | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ? |
| MedsCheck — complex medication | ? | ? | ✓ | ? | ? | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ? | ? |
| Blister / compliance packaging | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ? |
| Free local delivery | ✓ | ✓ | ✓ | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | – | ✓ | ✓ | ✓* | ✓ | ? |
| ODB / Ontario Drug Benefit | ? | ✓ | ? | ? | ✓ | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ? |

> Free delivery for JWP: "available upon request" — not guaranteed free. WMT: no delivery option noted.

---

## Part 2 — Vaccinations and clinical prescribing

| Service | HSP | SUL | STA | THP | UHC | DFP | BHP | WCG | NOR | PSV | WMT | PHD | WLS | JWP | YRK | CAN |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Flu vaccine administration | ✓ | ✓ | ✓ | ? | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ? | ✓ | ? | ? | ? |
| COVID-19 vaccine | ? | ? | ? | ? | ? | ✓ | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? |
| Paxlovid / COVID antivirals | ? | ? | ✓ | ? | ? | ? | ✓ | ? | ✓ | ? | ✓ | ? | ✓ | ? | ? | ? |
| Travel vaccines | ? | ? | ? | ? | ? | ? | ✓ | ✓ | ? | ? | ✓ | ? | ✓ | ? | ? | ? |
| Travel health consultations | ? | ? | ? | ? | ? | ? | ✓ | ✓ | ? | ? | ✓ | ? | ? | ? | ? | ? |
| Injections (non-vaccine) | ? | ? | ? | ? | ? | ✓ | ? | ? | ✓ | ✓ | ? | ? | ? | ? | ? | ? |
| Minor ailments prescribing | ? | ✓ | ✓ | ? | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ? | ✓ | ✓ | ✓ | ? |

> COVID vaccine: only DFP explicitly confirmed. Paxlovid confirmed: STA, BHP, NOR, WMT, WLS — this is an Ontario pharmacist prescribing scope service.

---

## Part 3 — Compounding and specialized clinical services

| Service | HSP | SUL | STA | THP | UHC | DFP | BHP | WCG | NOR | PSV | WMT | PHD | WLS | JWP | YRK | CAN |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Non-sterile compounding | ✓ | ✓ | ✓ | ✓ | ? | ? | ? | ? | ? | ✓ | ? | ? | ✓ | ? | ? | ? |
| Sterile compounding | ? | – | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? |
| Blood pressure monitoring | ✓ | ✓ | ? | ? | ✓ | ? | ? | ? | ? | ? | ✓ | ? | ✓ | ? | ? | ? |
| Diabetes consultation | ? | ? | ? | ✓ | ? | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ? | ✓ | ✓ | ? | ? |
| Certified Diabetes Educator (CDE) | ? | ? | ? | ? | ? | ? | ? | ? | ✓ | ✓ | ✓ | ? | ? | ✓ | ? | ? |
| Smoking cessation | ? | ✓* | ? | ? | ? | ? | ✓* | ✓* | ✓* | ✓* | ✓* | ? | ✓* | ? | ? | ? |
| Psychogeriatric support | – | – | – | ✓ | – | – | – | – | – | – | – | – | – | – | – | – |
| Medication return program | ? | ? | ? | ? | ? | ? | ? | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ? | ✓ | ? |
| Sharps disposal | ? | ? | ? | ? | ? | ? | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ? |

> Smoking cessation (*): most require ODB (Ontario Drug Benefit) recipient status. THP mentions naturopaths on staff; SUL mentions no explicit scope for cessation.

---

## Part 4 — Holistic, wellness and optical (Four Winds differentiators)

| Service | HSP | SUL | STA | THP | UHC | DFP | BHP | WCG | NOR | PSV | WMT | PHD | WLS | JWP | YRK | CAN | **4WR** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Holistic wellness consultation** | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | **[TBD]** |
| **Herb-drug interaction review** | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | **[TBD]** |
| **Optical services** | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | **[TBD]** |
| Natural health products (retail) | – | – | – | – | ✓ | – | – | ✓* | – | – | – | – | – | – | – | – | **[TBD]** |
| Home health care supplies (RAID) | – | ✓ | – | ✓ | – | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | – | **[TBD]** |
| Walk-in medical clinic on-site | ✓ | – | – | – | – | – | – | – | – | ✓ | – | – | – | – | – | – | – |

> Natural health products (*): WCG carries Option+™ private-label OTC line. UHC carries "Health & Beauty products."
> **Holistic wellness, herb-drug interaction review, and optical services are UNCONTESTED across all 16 competitors.** Four Winds can own these terms outright.

---

## Part 5 — Convenience, digital and access services

| Service | HSP | SUL | STA | THP | UHC | DFP | BHP | WCG | NOR | PSV | WMT | PHD | WLS | JWP | YRK | CAN |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Online booking (appointments) | ? | ? | ? | ? | ? | ✓ | ✓ | ? | ? | ? | ? | ? | ? | ? | ? | ? |
| Telemedicine integration | – | – | – | ✓ | – | – | ✓* | – | – | – | – | – | – | – | – | – |
| DIEM Health / digital health app | – | – | – | – | – | – | ✓ | – | – | – | – | – | – | – | – | – |
| Senior discount | – | ✓ | – | – | ✓ | ✓ | – | – | – | – | – | – | ✓ | – | – | – |
| ODB — no extra $2 senior fee | – | – | – | – | ✓ | – | – | – | – | – | – | – | – | – | – | – |
| WSIB billing | – | – | – | – | ✓ | – | – | – | – | – | – | – | – | – | – | – |
| Free naloxone kits | – | – | – | – | – | – | – | – | – | – | ✓ | – | – | – | ✓ | – |
| PrEP / HIV prevention (PEP) | ✓ | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – |
| Opioid dependence treatment | ✓ | – | – | – | – | – | – | – | – | – | – | – | – | – | ✓ | – |
| Maternity / pregnancy consultations | – | – | – | – | – | – | ✓ | ✓ | – | – | – | – | – | – | – | – |
| Free nationwide delivery | ✓ | – | – | – | ✓ | – | – | – | – | – | – | – | – | – | – | – |
| FedEx worldwide shipping | – | – | – | – | ✓ | – | – | – | – | – | – | – | – | – | – | – |
| Loyalty program | – | – | – | – | – | – | ✓ | ✓ | – | – | – | – | – | – | – | – |
| WhatsApp patient contact | – | ✓ | – | – | – | – | – | – | – | – | – | – | – | – | – | – |

---

## Part 6 — Languages spoken

| Code | Competitor | Languages | Count |
|---|---|---|---|
| HSP | HealthShield Pharmacy | English | 1 |
| SUL | Sultan Pharmacy | English, Persian, Turkish | 3 |
| STA | Station Apothecary | English | 1 |
| THP | Total Health Pharmacy | English | 1 |
| UHC | UHC / getmeds.ca | English | 1 |
| DFP | Dufferin-Finch Pharmacy | English | 1 |
| BHP | BH Pharmacy | English, Vietnamese | 2 |
| WCG | Wellcare Pharmacy | English, Cantonese, Italian, Vietnamese | 4 |
| NOR | Nor-Arm IDA | English, Gujarati, Spanish | 3 |
| PSV | Pharmasave / K&F Compounding | English, Hindi, Portuguese, Spanish, Tagalog, Vietnamese | **6** |
| WMT | Walmart Pharmacy | English, Tagalog | 2 |
| PHD | Pharma D Drugs | English | 1 |
| WLS | Wilson Compounding | English, Hindi, Punjabi, Spanish, Urdu | **5** |
| JWP | Jane Wilson Pharmacy | English, Arabic | 2 |
| YRK | Yorkview Pharmacists | English | 1 |
| CAN | Can Pharm Services | Unknown | ? |
| **4WR** | **Four Winds Roots** | **TBD — confirm with owner** | ? |

> **Language gap:** Punjabi and Urdu (Wilson Compounding only), Arabic (Jane Wilson only), Persian/Turkish (Sultan only), Gujarati (Nor-Arm only). These represent underserved language communities in the corridor — any language Four Winds adds beyond English is an immediate differentiator for that community.
>
> The Keele/Finch area has a large South Asian, East African, and Filipino population. Confirming languages spoken by Four Winds staff is a high-priority item in the owner questionnaire.

---

## Part 7 — Hours comparison

| Code | Competitor | Weekday close | Saturday | Sunday | Notes |
|---|---|---|---|---|---|
| HSP | HealthShield Pharmacy | ? | ? | ? | |
| SUL | Sultan Pharmacy | ? | ? | ? | |
| STA | Station Apothecary | ? | ? | ? | |
| THP | Total Health Pharmacy | ? | ? | ? | |
| UHC | getmeds.ca | ? | ? | ? | Delivery pharmacy; walk-in hours not confirmed |
| DFP | Dufferin-Finch Pharmacy | ? | ? | ? | |
| BHP | BH Pharmacy | 7 pm | 6 pm | **Closed** | |
| WCG | Wellcare Pharmacy | 8 pm | 6 pm | **11 am–5 pm** | Only independent open Sunday in this tier |
| NOR | Nor-Arm IDA | 6 pm | ? | ? | |
| PSV | Pharmasave / K&F Compounding | 5:30 pm | 2 pm | **Closed** | Closes earlier than most |
| WMT | Walmart Pharmacy | **10 pm** | 7 pm | **10 am–6 pm** | Latest hours + only Sunday open in Tier 2 |
| PHD | Pharma D Drugs | 6 pm | 2 pm | **10 am–2 pm** | Only Tier 3 pharmacy open Sunday |
| WLS | Wilson Compounding | 7–8 pm | 1:30–5 pm | **Closed** | |
| JWP | Jane Wilson Pharmacy | 6 pm | **Closed** | **Closed** | Very limited hours — Mon–Fri only |
| YRK | Yorkview Pharmacists | 5–8 pm | 1–Closed | **Closed** | Hours conflict between sources |
| CAN | Can Pharm Services | ? | ? | ? | No data |
| **4WR** | **Four Winds Roots** | **TBD** | **TBD** | **TBD** | Confirm in owner questionnaire |

> **Sunday hours gap:** Among independent pharmacies, **only Wellcare (Guardian) and Pharma D** have confirmed Sunday hours. Walmart is the only large-format option open Sunday. If Four Winds operates on Sunday, even for reduced hours, it will be nearly uncontested among independent independents — a strong "pharmacy open Sunday North York" keyword opportunity.

---

## Gap analysis — Four Winds unique differentiators

These are services or attributes that **zero competitors** in the 16-pharmacy set currently claim:

| Differentiator | Evidence | SEO keyword opportunity |
|---|---|---|
| **Holistic wellness consultation** | Not advertised by any competitor | "holistic pharmacy North York" — uncontested |
| **Herb-drug interaction review** | Not offered or named by any competitor | Can be embedded in holistic page copy |
| **Optical services / optical centre** | No pharmacy in the corridor has optical | "optical and wellness centre Keele Finch" — uncontested |
| **WCAG 2.2 AA / AODA compliance** | Every competitor audited fails (no alt text on images) | "AODA accessible pharmacy North York" — first-mover |
| **4.9★ Google rating** | Highest in the corridor — but invisible without a website | Trust signal for all landing pages + schema |

These four differentiators are the website's primary strategic weapon. They should appear in the `<h1>` and above-the-fold copy of the homepage, the holistic wellness page, and the optical wellness page.

---

## Gap analysis — Services Four Winds should match to stay competitive

These are services offered by multiple competitors that would be expected by patients and should be confirmed with the owner:

| Service | Who offers it | Priority | Notes |
|---|---|---|---|
| **Paxlovid / COVID antivirals** | STA, BHP, NOR, WMT, WLS (5 confirmed) | HIGH | Ontario pharmacist scope; if offered, name it explicitly on the Vaccinations page |
| **Sharps disposal** | BHP, WCG, NOR, PSV, WMT, PHD, WLS, JWP, YRK (9 confirmed) | HIGH | Low-cost program; expected by patients on insulin |
| **Medication return program** | NOR, PSV, WMT, PHD, WLS, YRK (6 confirmed) | HIGH | Same as above — environmental responsibility signal |
| **Minor ailments prescribing** | 11 of 16 confirmed | HIGH | Ontario pharmacist expanded scope; table-stakes |
| **Free naloxone kits** | WMT, YRK | MEDIUM | Low cost, high community impact, potential SEO term |
| **Travel vaccines / travel health** | BHP, WCG, WMT, WLS (4 confirmed) | MEDIUM | Adds clinical breadth; confirm if offered |
| **Certified Diabetes Educator (CDE)** | NOR, PSV, WMT, JWP (4 confirmed) | MEDIUM | High-value clinical staff credential |
| **Online booking** | DFP, BHP (2 confirmed) | MEDIUM | Jane App recommended (PHIPA-compliant) — see phipa-vendor-comparison.md |
| **Flu vaccines** | 12 of 16 confirmed | HIGH | If offered, put on homepage and vaccinations page explicitly |
| **COVID-19 vaccine** | DFP (1 confirmed explicitly) | MEDIUM | Confirm if Four Winds administers |

---

## Table-stakes services

These services are offered by virtually every competitor and are **expected by patients as a baseline**. Not advertising them is a gap, not a differentiator.

| Service | Competitor coverage |
|---|---|
| Prescription dispensing | 16/16 ✓ |
| Blister packaging (free) | 15/16 ✓ |
| MedsCheck / medication review | 15/16 ✓ |
| Free local delivery | 13/16 ✓ |
| ODB / Ontario Drug Benefit accepted | 11/16 ✓ |
| Flu vaccine | 12/16 ✓ |
| Minor ailments prescribing | 11/16 ✓ |
| Sharps disposal | 9/16 ✓ |
| Medication return program | 6/16 ✓ (but expected at clinical independents) |

Four Winds should explicitly advertise all of the above that it offers. Leaving table-stakes services unlisted makes the pharmacy appear to offer less than it does.

---

## Competitive positioning map

```
                     CLINICAL DEPTH
                         HIGH
                          |
  HealthShield            |        Pharmasave /
  (PrEP, OAT, clinic)     |        K&F Compounding
                          |        (CDE, compounding,
  Walmart                 |         walk-in clinic)
  (CDE, BP kiosk,         |
   naloxone, 10pm hours)  |  Wilson Compounding
                          |  (nonsterile Rx, travel
                          |   vaccines, multilingual)
       LOW                |                   HIGH
  DIFFERENTIATION --------|---------------------- DIFFERENTIATION
                          |
   Station Apoth.         |
   (compounding,          |     FOUR WINDS ROOTS
    Paxlovid)             |     (holistic + optical +
                          |      herb-drug interaction —
   BH Pharmacy            |      UNCONTESTED territory)
   (DIEM app, travel      |
    health, loyalty)      |
                          |
                         LOW
                     CLINICAL DEPTH
```

Four Winds' optimal position is upper-right — combining genuine clinical differentiation (holistic/optical) with enough clinical depth (Paxlovid, vaccines, MedsCheck, CDE if available) to be taken seriously as a full-service pharmacy. No competitor occupies this quadrant.

---

## Products sold — competitor comparison

| Code | Competitor | Notable products |
|---|---|---|
| HSP | HealthShield | Compounded dermatology, pain, HRT, fertility, vet, hair loss formulations; minoxidil/finasteride/dutasteride OTC |
| SUL | Sultan Pharmacy | Home health supplies (wheelchairs, walkers, canes — by order) |
| STA | Station Apothecary | Compression therapy garments |
| THP | Total Health Pharmacy | Home healthcare and mobility aids |
| UHC | getmeds.ca | Health & Beauty, OTC medications |
| DFP | Dufferin-Finch | Diabetic supplies, home health care, wellness products |
| BHP | BH Pharmacy | Basic home health care |
| WCG | Wellcare | Option+™ private label; basic home health care |
| NOR | Nor-Arm IDA | Basic home health care |
| PSV | Pharmasave / K&F | Home health care |
| WMT | Walmart | Full Walmart retail; home health care |
| PHD | Pharma D Drugs | OTC medications, home health care |
| WLS | Wilson Compounding | Home health care, OTC medications |
| JWP | Jane Wilson | Home health care |
| YRK | Yorkview | First aid supplies, medical equipment, home health care |
| **4WR** | **Four Winds Roots** | **[TBD] — confirm: natural health products, wellness supplements, optical products (if optical retail), RAID home health supplies** |

> **Products gap:** No competitor explicitly carries a curated **natural health / wellness supplement** line as a pharmacy core offering. Four Winds' holistic positioning makes this a credible addition that reinforces the brand without competing head-on with any current player.

---

## Strategic recommendations for Four Winds Roots

### 1. Lead with what no one else claims (immediate, before launch)
- Every headline, every service page title, every JSON-LD description should reference **holistic pharmacy**, **herb-drug interaction**, or **optical wellness centre**
- No competitor can copy this overnight — it requires clinical capability and staff expertise

### 2. Match the table stakes (confirm in owner questionnaire)
- Confirm explicitly: Paxlovid prescribing, sharps disposal, medication return, flu vaccine, minor ailments
- If offered, name them on every relevant page — patients assume competitors offer more unless Four Winds lists them

### 3. Target the Sunday gap (if applicable)
- If Four Winds is open Sunday, even 10 am–2 pm, say so prominently and add "pharmacy open Sunday North York" to Contact page title and Hours section
- Only Walmart (large format) and 2 small independents have Sunday hours — an independent with Sunday hours is genuinely rare

### 4. Language match-up (confirm with owner)
- If staff speak Hindi, Punjabi, Urdu, Tagalog, or Arabic — explicitly list languages on the homepage and Contact page
- These are underserved language communities in the Keele/Finch corridor; language access is a trust signal and a local SEO signal via schema `knowsLanguage`

### 5. Naloxone kits — low-effort harm reduction signal
- Only Yorkview (0.6 km away) and Walmart offer free naloxone kits in this corridor
- Naloxone kits are free to dispense under Ontario's Meds4All program — zero cost to the pharmacy, strong community goodwill, unique search term among most competitors

### 6. AODA as a real marketing claim
- Every competitor fails WCAG 2.2 AA; no one claims AODA compliance
- Four Winds site is being built WCAG-compliant from day one — make this explicit in footer, About copy, and a dedicated Accessibility Statement page
- This is a trust signal for seniors (the pharmacy's highest-volume patients) and positions Four Winds as the ethical, modern choice

### 7. CDE — consider adding or highlighting if available
- A Certified Diabetes Educator on staff puts Four Winds in the same clinical tier as Nor-Arm, Pharmasave, and Walmart — three of the strongest competitors
- If no CDE is currently on staff, it's a future upgrade that would dramatically expand the clinical differentiation story

---

## Data quality notes

| Issue | Detail |
|---|---|
| Can Pharm Services (CAN) | Extremely low confidence — only address + phone confirmed. All services `null`. Direct phone/in-person research needed. |
| Pharmasave / K&F Compounding | Two separate agent entries merged (same address/phone/owner). Tier 2 data from network page + CHL; Tier 3 data from CHL only. |
| Medimap.ca | All Medimap URLs blocked by fetch permission layer — some competitor service data may be more detailed there. |
| HealthShield hours | Not confirmed by any source fetched. |
| Sterile compounding | Sultan confirmed "not offered"; all others `null` (absence of evidence ≠ evidence of absence) |
| WLS hours | Yellow Pages (10am–8pm) conflicts with CHL (9am–7pm). YP may be more current. |

---

*Document version: 2026-05-26. Compiled from `services-tier1.json`, `services-tier2.json`, `services-tier3.json` as part of the Four Winds Roots Pharmacy web research monorepo.*
