---
title: "Google Business Profile — Legacy Listing Cleanup"
version: "2.0"
last_updated: "2026-05-27"
status: active
category: seo
owner: pending_owner_review
description: "Action plan to claim and correct the GBP and all directory listings under stale legacy names, following the clarification that Can Pharm Service Inc is the pharmacy's legal operating entity."
---

# Google Business Profile — Legacy Listing Cleanup

## Clarification (2026-05-27)

**Can Pharm Service Inc is the legal operating entity for R.O.O.T.S Four Winds Pharmacy.**
The pharmacy at 3932A Keele Street, Toronto ON M3J 1N8, phone (416) 398-8200 is the client.

This supersedes the earlier "adjacent competitor" theory. The previous version of this document
treated Can Pharm as a separate competitor at the same address — that was incorrect. Can Pharm
Service Inc *is* the pharmacy operator.

---

## The problem: stale legacy listings under old brand names

The pharmacy has operated under different names and directory entries over time. These old
listings still surface in search results and intercept patients:

| Directory | Listed name | Status |
|---|---|---|
| Yellow Pages | "Guardian Four Winds Pharmacy" | Old Guardian franchise name — needs updating |
| Medimap | "Can Pharm Services Inc" | Legal entity name only — no patient-facing brand |
| Lumino / Cortico | "R.O.O.T.S. Four Winds Pharmacy" | Variant spelling — needs alignment |
| CHL / PharmacyList | "Roots Four Winds Pharmacy" | Variant — needs alignment |
| Google Business Profile | Unknown / unverified | **Must be claimed and verified immediately** |

The core risk: a patient searching "Four Winds pharmacy" or "R.O.O.T.S pharmacy Keele" may land
on a stale Yellow Pages listing that shows "Guardian Four Winds Pharmacy" with no hours, no
website, and possibly wrong information. That is a lost patient.

---

## Canonical name decision (confirm with owner)

Pick **one** name and use it identically everywhere — GBP, website, all directories, schema.json.

**Recommended:** `R.O.O.T.S Four Winds Pharmacy` or `Four Winds Roots Pharmacy`
- Avoid "Guardian Four Winds" — Guardian was a franchise brand the pharmacy has left
- Avoid "Can Pharm Services Inc" as the public-facing name — it's the corporate entity, not the
  patient-facing brand
- The "R.O.O.T.S" acronym is distinctive; confirm with owner whether to expand it or keep it

---

## Action plan

### 1. Claim the Google Business Profile (highest priority — owner action)

The GBP for this pharmacy may exist under "Guardian Four Winds Pharmacy" or "R.O.O.T.S Four
Winds Pharmacy." Because Can Pharm Service Inc is the operating entity:

1. Go to [business.google.com](https://business.google.com) and search for the pharmacy
2. If a listing exists under any variant name at 3932A Keele St — **claim it as the owner**
   (Can Pharm Service Inc / the pharmacist's Google account)
3. Once claimed, update:
   - **Name** → confirmed canonical name
   - **Primary category** → Pharmacy
   - **Secondary categories** → Optician, Holistic medicine practitioner (if applicable)
   - **Phone** → (416) 398-8200
   - **Address** → 3932A Keele St, Toronto ON M3J 1N8
   - **Hours** → confirmed weekly hours
   - **Website** → the new website URL once live
   - **Photos** → storefront, interior, optical area, team
4. If multiple listings exist for the same address under different names, request removal of
   duplicates from within the GBP dashboard

### 2. Canonical name sweep — one-time update across all directories

After confirming the canonical name with the owner, update every directory:

| Directory | Current name | Action |
|---|---|---|
| Google Business Profile | Unknown | Claim + update (Step 1 above) |
| Yellow Pages | "Guardian Four Winds Pharmacy" | Claim and update to canonical name |
| Medimap | "Can Pharm Services Inc" | Update to patient-facing brand name |
| Lumino Health (Sun Life) | "R.O.O.T.S. Four Winds Pharmacy" | Align spelling to canonical |
| Cortico | Variant | Update |
| Central Health Line | Variant | Update |
| PharmacyList.ca | "Roots Four Winds Pharmacy" | Align to canonical |
| Yelp | Any listing found | Update |
| Facebook | Any page | Update name + link to website |

### 3. JSON-LD schema — canonical name + disambiguating description

In `site/src/data/schema.json`, the `disambiguatingDescription` field clarifies the entity
for search engines, especially given the name history:

```json
{
  "@type": "Pharmacy",
  "name": "[confirmed canonical name]",
  "legalName": "Can Pharm Service Inc",
  "disambiguatingDescription": "Independent holistic pharmacy at 3932A Keele St, North York —
    formerly listed as Guardian Four Winds Pharmacy. Now operating as [canonical name] with
    holistic wellness, optical, and full pharmacy services.",
  "address": {
    "streetAddress": "3932A Keele St",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "postalCode": "M3J 1N8"
  }
}
```

Adding `legalName: "Can Pharm Service Inc"` helps Google connect the corporate entity to the
patient-facing brand — resolving any entity ambiguity from the directory name variants.

### 4. Homepage copy — soft brand anchoring

The homepage copy should clearly anchor the current brand name, especially for patients who
knew the pharmacy as "Guardian Four Winds" or "R.O.O.T.S.":

> "[Canonical name] — your independent holistic pharmacy at 3932A Keele Street, North York.
> Serving the Keele & Finch community with personalized care since [year]."

This helps Google resolve entity identity when crawling the new site.

### 5. Monitor after launch

- Set a Google Alert for "Four Winds pharmacy Keele" and "R.O.O.T.S pharmacy" to catch any
  new or resurfaced stale listings
- Check Yellow Pages 30 days post-launch to confirm the Guardian listing has been updated

---

## Owner action items

- [ ] Confirm the canonical public-facing brand name to use everywhere
- [ ] Claim the GBP (requires owner's Google account)
- [ ] Confirm founding year / "serving since" date for homepage copy
- [ ] Confirm whether "R.O.O.T.S" is an acronym and if so what it stands for
  (this is valuable brand storytelling for the About page)

---

## What this is NOT

This is not a competitor issue. Can Pharm Service Inc is the pharmacy operator —
not a separate business at an adjacent unit. All directory cleanup below is for the
**client's own listings**, not a competitor's.

*Updated: 2026-05-27 — previous version incorrectly treated Can Pharm as a competitor.*
