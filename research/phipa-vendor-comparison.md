# PHIPA-Compliant Form & Booking Vendor Comparison
## Four Winds Roots Pharmacy — North York, Ontario

**Prepared:** 2026-05-26  
**Context:** Static Astro site on Netlify free tier. Forms needed: prescription refill request, prescription transfer, delivery request, consultation/vaccine booking, general contact. All health-data forms must comply with Ontario PHIPA. The pharmacy is a health information custodian (HIC); any third-party SaaS handling that data is a PHIPA **agent** and must sign an agent agreement equivalent to a US Business Associate Agreement (BAA).

> **Penalty reminder:** PHIPA fines up to $200,000 (individual) / $1,000,000 (corporation). Non-compliant vendors are a material legal risk, not just a technical inconvenience.

---

## 1. Summary Comparison Table

| Vendor | Canadian Data Residency | PHIPA Agent Agreement | Encryption in Transit | Encryption at Rest | Form Types | Booking / Scheduling | Pricing Tier | Embed Method | Recommended |
|---|---|---|---|---|---|---|---|---|---|
| **OceanMD** | Yes — Ontario / Canada | Yes (custodian/agent model built-in) | Yes (TLS) | Yes (AES-256) | Contact, refill, transfer, custom intake | Yes (online booking add-on) | Paid; ~CAD $50–150+/mo estimated; no public free tier | Standalone URL; conditional iframe (not officially recommended) | **Yes — top pick for forms** |
| **Jane App** | Yes — Canadian servers selectable at signup | Likely yes (terms confirm Jane acts as service provider/agent; formal agreement available on request) | Yes (bank-grade TLS) | Yes (SOC 2 Type 2 DCs) | Intake forms, contact | Yes — full booking & scheduling | CAD $54–99/mo base + per-practitioner fees | Embed code (button linking to booking page); booking URL | **Yes — top pick for booking** |
| **Cortico** | Yes — BC-based servers (Cologix, Vancouver); Canada | Claims PHIPA, PIPEDA, PIPA, HIPAA compliance; SOC 2 Type II + ISO 27001; PIA completed | Yes | Yes | Custom intake forms | Yes (booking add-on, EMR-integrated) | From $86/FTE/mo; pharmacy-standalone use unclear | Links/redirects to Cortico patient portal | Conditional (see notes) |
| **JotForm** | Partial — Montreal DC available on Enterprise plan only | No formal PHIPA custodian agreement publicly available; JotForm explicitly states it cannot certify PHIPA compliance | Yes (TLS) | Yes | All form types; large template library | No (forms only) | Free tier (5 forms/100 submissions); HIPAA/Canadian DC requires Enterprise (custom pricing) | iframe / JS embed | No — Enterprise cost unfit for small pharmacy |
| **Formstack** | No confirmed Canadian DC — primary infra on US-based AWS | US BAA only; no PHIPA custodian agreement documented | Yes | Yes (AES-256) | All form types | No (forms only) | HIPAA plan ~$225+/user/mo (very expensive) | iframe / JS embed | No — US data residency and cost are disqualifying |
| **Calendly** | No — US servers; no Canadian DC option | No BAA or PHIPA agreement on any plan; ToS prohibits PHI | Yes | Yes | N/A (scheduling only) | Yes | Free–$12+/seat/mo | iframe / JS embed | No — explicitly prohibits PHI |
| **Cal.com** | Configurable data residency (Canadian DC possible on Enterprise) | BAA available on Enterprise / Orgs (15+ users) plan; adds $300/mo on smaller plans | Yes (SOC 2) | Yes (AES-256) | No (scheduling only) | Yes — open-source / hosted | Free (open-source self-host); Teams ~$15/seat/mo; Enterprise custom | iframe / JS embed | Conditional — only if self-hosted in Canada with formal PHIPA agreement |
| **Formity.ca** | Yes — Canadian servers, hydroelectric-powered DCs | Claims PHIPA agent agreement available (turnkey managed service) | Yes | Yes | Custom forms (managed build) | No | No public pricing (quote-based); likely $200–500+/mo managed | As delivered (their managed service) | Conditional — worth quoting for managed turnkey |
| **CommForms.ca** | Yes — Canadian servers; PHIPA/PIPEDA/FIPPA compliant claimed | Claims PHIPA compliant (no published agreement template) | Yes (AES-256) | Yes (AES-256, hardware + software) | Custom forms | No | Not published; contact for quote | Embedded or linked forms | Conditional — worth quoting |
| **Refill Assistant** | Unconfirmed — claims HIPAA compliance (US-focused) | No PHIPA agreement documented | Yes | Yes | Refill Rx, Transfer Rx (pharmacy-specific) | Partial (reminders/delivery) | $99/mo + $250–700 setup | Pharmacy website builder (replace your site) | No — PHIPA/Canadian residency unconfirmed |

---

## 2. Per-Vendor Notes

---

### OceanMD (formerly CognisantMD)

**What it is:** OceanMD is a Toronto-based digital health platform built specifically for Ontario's healthcare system. It is owned by WELL Health and is deeply integrated with Ontario Health infrastructure. The Ocean platform offers website forms (self-serve intake), patient messaging, eReferral/eConsult, and online booking. It has a library of over 2,000 clinical forms covering everything from medication reviews to intake questionnaires. It is used by Ontario public health organizations, the Ontario Ministry of Health, and hundreds of clinics and pharmacies across the province.

**PHIPA compliance status:** OceanMD is purpose-built for PHIPA. The platform explicitly supports the custodian/agent relationship: each site that receives health information through Ocean must declare their custodian status during setup. Data is stored in Canada. The platform is PHIPA-compliant by design and has been assessed by Ontario Health as part of its provincial digital health ecosystem. This is the strongest PHIPA compliance pedigree of any vendor reviewed.

**Pricing:** OceanMD pricing is in CAD/month and was last updated April 1, 2026 (a price increase was implemented at that time). Specific dollar amounts are not published in search results and require visiting oceanmd.com/pricing or contacting their sales team. Third-party estimates place patient engagement licences in the range of CAD $50–200/month depending on features. No confirmed free tier. EMR integrations (OSCAR, PS Suite, Accuro, Med Access) allow submissions to flow directly into patient charts, but OceanMD explicitly states that **clinics without EMR can still use Website Forms** — submissions can be exported as PDF or spreadsheet.

**Fit for Four Winds (Astro static site):** OceanMD provides a standalone secure URL for each form. They recommend against embedding via iframe (documented in their support articles as potentially causing layout and reliability issues), but iframe code is available for clinics that insist on it. The practical approach for an Astro site is: link to the secure OceanMD form URL from a button on your site, or use the iframe with the understanding of their caveat. Online booking is an add-on and can generate a standalone booking link as well.

**Caveats:** Pricing is not self-serve/transparent and requires contacting sales. OceanMD is heavily physician/clinic-oriented; confirm with their sales team that standalone pharmacy (without a physician EMR) is a supported use case for the Patient Engagement tier. Confirm pricing and that a formal written PHIPA agent agreement is executed before going live.

---

### Jane App

**What it is:** Jane App is a Vancouver-based (Canadian) practice management platform used by thousands of independent health and wellness clinics across Canada, the US, the UK, and Australia. It offers online booking, scheduling, intake forms, telehealth, billing, and clinical documentation. It is one of the most widely adopted platforms in Canadian allied health (physiotherapy, chiropractic, psychology, massage therapy, naturopathy). It is not pharmacy-specific.

**PHIPA compliance status:** Jane explicitly claims PHIPA and PIPEDA compliance. Jane's Terms of Use confirm that the clinic (Account Owner) is the legal custodian of patient data, while Jane acts as service provider/agent. This is the correct legal framing for PHIPA. Canadian customers can select Canadian data centres at signup (the data stays in Canada). Jane's data centres are SOC 2 Type 2 certified. Encryption in transit uses bank-grade TLS; data at rest is encrypted on private servers. Jane also documents PHIPA compliance in a dedicated guide for Ontario clinics. While Jane does not appear to publish a downloadable PHIPA agent agreement template, the custodial relationship is defined in their Terms of Use, and you should request a formal written agent agreement before storing health information.

**Pricing:** CAD $54/month (Balance — limited to 20 appointments/month, insufficient for a busy pharmacy). CAD $79/month (Practice — unlimited appointments, most appropriate starting tier). CAD $99/month (Thrive — additional features). Additional practitioner seats: $17.50–$40/month depending on plan and full/part-time. No free tier for production use (free trial available). For a single-pharmacist setup, expect ~$79/month CAD.

**Fit for Four Winds (Astro static site):** Jane generates embed codes (HTML button snippets) and booking URLs that can be added to any HTML page, including Astro-generated static pages. The booking experience opens on Jane's branded subdomain (yourclinic.janeapp.com), not inline on your page — but this is standard and acceptable for a small pharmacy site. Jane does not natively support prescription refill or transfer forms in the pharmacy sense; you would build custom intake forms within Jane. Jane is excellent for consultation and vaccine booking.

**Caveats:** Jane is not purpose-built for pharmacy. It has no native prescription refill/transfer workflow. You would build these as custom intake forms, which works but requires setup effort. Also confirm with Jane that a formal PHIPA agent agreement (separate from their standard Terms of Use) can be executed — for a regulated pharmacy handling health information under PHIPA, a signed agreement is advisable. Jane also does not offer a free tier beyond the trial period.

---

### Cortico

**What it is:** Cortico is a Burnaby, BC-based patient engagement platform that integrates primarily with OSCAR EMR (and also Juno, Accuro, and others). It offers online booking, automated appointment reminders, secure patient messaging, and customizable intake forms. Cortico is listed as the booking system for some Ontario pharmacies (including ProMed Pharmacy in Ottawa) where it allows patients to book services like minor ailment consultations. Cortico is also already indexing the Four Winds pharmacy location in its directory.

**PHIPA compliance status:** Cortico explicitly claims HIPAA, PIPA, PIPEDA, and PHIPA compliance. They have completed a Privacy Impact Assessment reviewed by the Office of the Privacy Commissioner of British Columbia, and the report is publicly available. They hold SOC 2 Type 2 and ISO 27001 certifications. Application servers are in BC (Cologix, Vancouver), and temporary document storage uses Amazon S3 in Canada. Cortico's secure messaging meets PHIPA regulatory standards. This is a strong compliance posture.

**Pricing:** Cortico pricing starts at approximately $86/FTE/month. A 90-day money-back guarantee is offered. The platform is primarily sold as an EMR add-on. It is unclear whether a standalone pharmacy account (without a physician EMR) is available or supported — this must be confirmed directly with Cortico.

**Fit for Four Winds (Astro static site):** Cortico integration typically involves a Cortico patient portal or booking page, with links embedded in your website. This can be done from a static Astro site. However, if Four Winds does not use OSCAR or another supported EMR, Cortico may not function as designed since it is built as an EMR workflow tool. A pharmacy using Cortico purely for standalone booking without an integrated EMR would need to confirm feasibility with their sales team.

**Caveats:** Cortico's primary use case is clinic/physician booking; pharmacy-as-provider support is secondary and depends on EMR integration. If Four Winds does not run OSCAR Pro or a supported EMR, Cortico may be impractical. The existing Cortico listing for Four Winds appears to be a patient-facing directory entry, not a vendor relationship — the pharmacy owner would need to sign up separately as a provider. Request formal PHIPA agent agreement documentation before proceeding.

---

### JotForm

**What it is:** JotForm is a US-based general-purpose online form builder with an extremely large template library (including pharmacy refill and transfer form templates), conditional logic, file uploads, e-signatures, and payment integration. It is widely used across industries. For healthcare, JotForm offers a HIPAA-compliant add-on and an Enterprise plan with Canadian data centre (Montreal) hosting.

**PHIPA compliance status:** JotForm explicitly states it **cannot certify PHIPA compliance** and acknowledges this in multiple public support threads. The closest available configuration is: HIPAA compliance features enabled + Canadian data centre (Montreal) selected on an Enterprise plan. JotForm's support staff acknowledge that some Canadian HIPAA Enterprise customers have concluded this combination is adequate for their needs, but JotForm itself does not represent this as PHIPA-certified or sign a PHIPA custodian agreement. For a regulated pharmacy under PHIPA with potential fines up to $1M, relying on an informal "probably adequate" position is inadvisable without legal advice.

**Pricing:** Free tier (5 forms, 100 submissions/month, US servers only — not suitable for PHI). Bronze: ~$39/mo; Silver: ~$49/mo; Gold: ~$129/mo (still US-based). Enterprise: custom pricing (this is the only tier offering Canadian DC). Enterprise pricing is negotiated and is likely $300–1,000+/month for a small organization, making it economically unsuitable for an independent pharmacy.

**Fit for Four Winds:** JotForm's embed options are excellent — iframe and JS embed are standard and work perfectly in static HTML/Astro sites. The form builder is user-friendly with pharmacy-specific templates available. However, the PHIPA compliance gap and Enterprise-only Canadian DC are disqualifying for health information collection without significant legal vetting.

**Caveats:** Do not use JotForm's free or standard paid tiers for any form collecting health information (Rx numbers, patient health details). If you have legal advice that the HIPAA + Canadian DC Enterprise configuration is adequate for your PHIPA obligations, JotForm is technically capable — but the compliance risk and Enterprise cost make it unsuitable for a small independent pharmacy.

---

### Formstack

**What it is:** Formstack is a US-based workflow automation and form builder platform used by enterprise healthcare organizations. It offers HIPAA compliance with a BAA, audit logs, AES-256 encryption, and a broad feature set.

**PHIPA compliance status:** Formstack offers US HIPAA compliance with a Business Associate Agreement. There is no documented Canadian data centre, and their primary infrastructure runs on US-based AWS. The esignglobal.com analysis of Formstack Sign found that core data can sometimes be configured for Canadian residency, but ancillary services may process data in the US. Formstack has not documented a PHIPA custodian agreement.

**Pricing:** HIPAA plans are only available on higher tiers. The Teams/HIPAA plan is approximately $225/user/month — extremely expensive for a small independent pharmacy. Custom pricing is required for enterprise healthcare configurations.

**Fit for Four Winds:** Formstack's US data residency and high cost make it unsuitable for an Ontario pharmacy under PHIPA. The embed options are technically capable (iframe/JS), but the compliance and cost barriers are prohibitive.

**Caveats:** Do not use Formstack for PHI collection by a PHIPA-regulated pharmacy. There is no pathway to a PHIPA agent agreement, and US-based data storage is a significant compliance liability.

---

### Calendly

**What it is:** Calendly is a US-based scheduling tool widely used for appointment booking. It is simple, user-friendly, and embeds easily via iframe or JS widget into any website.

**PHIPA compliance status:** Calendly explicitly prohibits the collection, storage, or transmission of Protected Health Information (PHI) in its Terms of Service. Calendly does not offer a BAA or PHIPA agreement on **any plan** — including Enterprise. It is not HIPAA compliant and expressly disavows healthcare PHI use. Using Calendly for pharmacy consultation or vaccine booking that involves patient health details would violate both Calendly's ToS and PHIPA.

**Pricing:** Free (basic), Standard $12/seat/month, Teams $20/seat/month, Enterprise custom.

**Fit for Four Winds:** **Not suitable for any health information collection.** Could theoretically be used for general appointment requests that collect no PHI (name + phone number only), but a pharmacy consultation booking inherently involves health information, making Calendly inappropriate.

**Caveats:** This vendor is disqualified for all health-information-adjacent booking use cases. Do not use.

---

### Cal.com

**What it is:** Cal.com is an open-source scheduling platform that offers both self-hosted and cloud-hosted options. It is positioning itself as a HIPAA-compliant alternative to Calendly for healthcare. It has SOC 2 Type II certification and offers configurable data residency.

**PHIPA compliance status:** Cal.com offers a BAA on its Enterprise plan and on Organisations plans with 15+ users. For smaller plans, a BAA can be added for $300/month extra. Cal.com claims configurable data residency options that can be set to Canadian regions. The platform is not specifically PHIPA-certified, but the combination of BAA + Canadian data residency + SOC 2 is a reasonable foundation — stronger than Calendly or JotForm standard plans. The self-hosted open-source version, deployed to a Canadian cloud region (e.g., AWS ca-central-1), would give full control over data residency and may be the most defensible configuration.

**Pricing:** Open-source self-hosted: free (but requires developer deployment and ongoing maintenance). Cloud Teams: ~$15/seat/month (BAA not included at this tier without the $300/mo add-on). Enterprise: custom.

**Fit for Four Winds:** Cal.com is a booking/scheduling tool only — it does not handle prescription refill or transfer forms. If Four Winds needs only a scheduling widget for consultations and vaccines, Cal.com (self-hosted on a Canadian server) could work. However, the self-hosting requirement adds technical complexity that may not be appropriate for a small independent pharmacy without IT staff.

**Caveats:** The $300/month BAA add-on on the cloud plan makes it expensive for small practices. Self-hosting resolves cost and data residency but adds maintenance burden. Cal.com does not cover refill/transfer forms — a separate form solution would still be needed. Confirm with a lawyer that a Cal.com BAA is equivalent to a PHIPA agent agreement for Ontario purposes before relying on it.

---

### Formity.ca

**What it is:** Formity is a Canadian form builder and managed service provider specifically targeting PHIPA, PIPEDA, and HIPAA compliance for Canadian healthcare organizations. Their forms are built and managed by their team ("turnkey"), stored on Canadian servers powered largely by hydroelectric energy. They serve public and private healthcare organizations across Canada.

**PHIPA compliance status:** Formity explicitly claims PHIPA compliance and Canadian data residency. Their service model is managed: they design and build compliant forms for you, rather than offering a self-service form builder. They reference PHIPA agent compliance in their marketing and appear to offer contractual agreements as part of their managed service. Evidence is primarily marketing claims; no publicly available third-party audit report or PHIPA agent agreement template was found in public search results.

**Pricing:** No pricing is published on their website. The managed/turnkey model and the pharmaceutical/healthcare focus suggest pricing will be in the custom quote range, likely $200–600+/month depending on scope. This may include form design, hosting, and ongoing support.

**Fit for Four Winds:** Formity could deliver compliant forms (refill, transfer, contact) without requiring the pharmacy owner to become a forms expert. The managed model is appealing for a small operation. However, the lack of a self-service option and no transparent pricing make it harder to evaluate without a sales conversation. Integration with an Astro site would need to be confirmed — their forms would likely be embedded via iframe or linked URL.

**Caveats:** Request a written PHIPA agent agreement before engaging. Confirm: (a) Canadian DC server location specifics, (b) audit logging capabilities, (c) breach notification process, (d) booking/scheduling capability (likely not available — forms only), and (e) pricing. No booking/scheduling functionality was identified.

---

### CommForms.ca

**What it is:** CommForms is a small Canadian form builder that explicitly targets PHIPA, FIPPA, PIPA, and PIPEDA compliance. It offers no-code form creation with AES-256 encryption at the hardware and software level, conditional logic, and multi-lingual support. Their website and LinkedIn indicate they are a boutique Canadian vendor.

**PHIPA compliance status:** CommForms claims PHIPA compliance and Canadian data residency. Security features include AES-256 encryption for stored data (field-level encryption before writing to DB, plus drive/server-level encryption). They claim compliance with all major Canadian privacy frameworks. However, no publicly available third-party audit report, SOC 2 certification, ISO 27001 certification, or published PHIPA agent agreement template was found. The compliance claim rests on their self-attestation.

**Pricing:** Not published. Contact required. They mention forms are "affordably priced" and reference a 50% discount for certain organizations.

**Fit for Four Winds:** CommForms could deliver refill, transfer, and contact forms for a Canadian pharmacy. The embed method is standard (iframe or linked form). However, the small size of the vendor introduces business continuity risk. Without third-party audit certifications (SOC 2, ISO 27001) to validate their claims, the PHIPA compliance posture is harder to independently verify.

**Caveats:** Due diligence required: request a formal PHIPA agent agreement, ask about their audit certifications, penetration testing schedule, breach notification SLA, and data retention/destruction policy. Booking/scheduling is not available.

---

### Refill Assistant

**What it is:** Refill Assistant provides pharmacy-specific website templates and mobile apps for independent community pharmacies, with built-in prescription refill and transfer forms, reminder systems, and delivery management. It is designed specifically for the independent pharmacy use case and includes PK software integration.

**PHIPA compliance status:** Refill Assistant claims HIPAA compliance (US-focused). No evidence was found of Canadian PIPEDA or PHIPA compliance certification, Canadian data residency, or a PHIPA custodian/agent agreement. The product appears to be built for the US market with some Canadian pharmacy adoption. This is a significant disqualifying gap for an Ontario pharmacy under PHIPA.

**Pricing:** $99/month plus setup fees ($250–$700 one-time depending on tier). This is a full pharmacy website builder, not just a forms add-on.

**Fit for Four Winds:** The pharmacy-specific feature set (refill forms, transfer forms, delivery, reminders) is the best functional match of any vendor reviewed. However, the unconfirmed Canadian data residency and absent PHIPA agent agreement make it currently unsuitable without direct confirmation from Refill Assistant that they can meet PHIPA requirements. Since Four Winds is building a new Astro site, a full website builder replacement is also unnecessary — only the forms/booking layer is needed.

**Caveats:** Before dismissing this vendor outright, contact Refill Assistant to ask: (a) where data is hosted (US or Canada?), (b) will they sign a PHIPA agent/custodian agreement for an Ontario pharmacy?, (c) do they have Canadian healthcare clients in Ontario? If they can confirm Canadian DC and sign a PHIPA agreement, their pharmacy-specific form templates make them worth serious consideration for the refill/transfer workflow.

---

## 3. Recommendation

### Primary Recommendation: OceanMD (forms) + Jane App (booking)

These two vendors represent the strongest PHIPA compliance posture and best functional fit for Four Winds. A two-vendor approach covers all five form types:

**OceanMD** for prescription refill requests, prescription transfer requests, and delivery requests:
- Purpose-built for Ontario healthcare under PHIPA; the strongest compliance pedigree of any vendor reviewed
- Custodian/agent model is built into the platform design
- Canadian data residency (Ontario)
- Self-serve website forms work without an EMR; standalone URL embeds cleanly into an Astro site
- Contact their sales team immediately to: (1) confirm pharmacy (without physician EMR) is a supported configuration, (2) get current pricing, and (3) execute a formal written PHIPA agent agreement before going live

**Jane App** for consultation and vaccine booking:
- Canadian vendor; Canadian server option at signup
- SOC 2 Type 2 data centres; strong security posture
- PHIPA-compliant online booking with embed codes that link from an Astro site
- Pricing is transparent and accessible for a small operation (~CAD $79/month)
- Contact Jane to: (1) confirm they will provide a formal written PHIPA agent agreement (separate from standard Terms of Use), and (2) build custom intake forms for the consultation booking flow

**General contact form:** Use OceanMD (if already subscribed) or Jane App's contact/intake form builder. Avoid separate form builders (JotForm, Formstack) that create an additional compliance surface.

### Alternative: Formity.ca (managed, all-in-one forms)

If the owner prefers a single vendor to handle all forms (including refill, transfer, and contact) without self-service complexity, Formity.ca is worth requesting a quote. Their managed model means forms are built and maintained by a Canadian vendor with explicit PHIPA claims. Combine with Jane App for booking. Requires a quote and formal agreement review.

### Why NOT the other vendors (summary):
- **JotForm:** PHIPA compliance explicitly not certified; Canadian DC only on unaffordable Enterprise plan
- **Formstack:** US data residency; no PHIPA agreement; extremely expensive
- **Calendly:** Explicitly prohibits PHI in ToS; not HIPAA or PHIPA compliant on any plan
- **Cal.com:** Booking only; BAA add-on is expensive; self-hosting adds complexity; no refill/transfer forms
- **Cortico:** Strong compliance but tightly coupled to physician EMRs; pharmacy-standalone viability unconfirmed; better fit for clinics than independent pharmacies
- **Refill Assistant:** PHIPA/Canadian residency unconfirmed; US-focused; full website builder (unnecessary)
- **CommForms:** No third-party audits found; very small vendor; higher business continuity risk

---

## 4. Open Questions for the Owner

Before proceeding, the pharmacy owner should answer or investigate the following:

1. **Does Four Winds currently use or plan to use a pharmacy management system (PMS) or EMR?** OceanMD and Cortico both offer richer integrations with systems like OSCAR, Accuro, and PS Suite. If a PMS is in use or planned, this affects which vendor integrates best and may reduce manual data re-entry.

2. **Is integrated booking (consultation + vaccine scheduling) a priority for launch, or is the refill/transfer form the more urgent need?** If booking can wait, start with OceanMD forms only. If booking is day-one, budget for Jane App alongside OceanMD (or find a single-vendor solution).

3. **What is the monthly budget for digital forms/booking infrastructure?** The realistic minimum for a PHIPA-compliant setup is approximately CAD $80–200/month. If budget is extremely constrained, the owner should understand that free or near-free options do not exist for PHIPA-compliant health information collection.

4. **Will the pharmacy accept delivery requests that include health information (Rx details, patient conditions) via the form, or will delivery requests be health-information-free (name, address, phone only)?** If delivery forms collect Rx numbers or health details, they fall under PHIPA. If they collect only logistics information (no PHI), a simpler PIPEDA-only solution may be acceptable for that specific form.

5. **Does the owner have legal counsel familiar with PHIPA to review vendor agreements?** A pharmacist signing a PHIPA agent agreement with a SaaS vendor should have that agreement reviewed by a lawyer familiar with Ontario health information law. The Ontario College of Pharmacists (OCP) also publishes guidance on PHIPA obligations for pharmacies that the owner should review.

6. **Who will manage ongoing consent documentation and breach response?** PHIPA requires the pharmacy to maintain a written privacy policy, patient consent records, and a breach notification process. The chosen vendor handles technical safeguards, but the pharmacy owner is responsible for the administrative and consent framework. Consider whether a consultant or the OCP privacy resources can support this.

7. **Will the same OceanMD (or other) forms be used across multiple future locations or only this single North York location?** Pricing and account structure may differ for multi-location setups.

---

## 5. Next Steps

1. **Contact OceanMD sales:** Visit [oceanmd.com/pricing](https://www.oceanmd.com/pricing/) or email their sales team. Ask specifically: (a) pharmacy-without-EMR support, (b) current pricing for website forms + online booking licences, (c) written PHIPA agent agreement.
2. **Contact Jane App:** Start a free trial at [jane.app](https://jane.app). Before storing any patient data, request their PHIPA agent agreement template from support.
3. **Request quote from Formity.ca:** Visit [formity.ca/contact](https://formity.ca/contact/) and describe the four form types needed.
4. **Review OCP PHIPA resources:** The Ontario College of Pharmacists maintains PHIPA fact sheets and guidance at [ocpinfo.com](https://www.ocpinfo.com/practice-education/practice-tools/fact-sheets/personal-health-info/) that are directly applicable to pharmacy obligations.
5. **Legal review:** Have a PHIPA-familiar lawyer review any vendor agent agreement before executing.

---

*Research conducted 2026-05-26. All pricing and compliance claims should be independently verified directly with vendors before contractual engagement. Vendor policies and pricing change; this document reflects information available at time of research.*
