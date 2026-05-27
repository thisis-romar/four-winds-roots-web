# Google Business Profile Disambiguation Strategy

## The problem: "Four Winds pharmacy" search confusion

**Can Pharm Services Inc** occupies the adjacent unit at **3932A Keele St** — the same street
address as Four Winds Roots Pharmacy. Directory evidence (Yellow Pages, Tiendeo) confirms that
Can Pharm was formerly listed under the name **"Guardian Four Winds Pharmacy"** at this exact
address.

This means patients searching for "Four Winds pharmacy" or "Four Winds Keele" may find:
- The old Guardian Four Winds / Can Pharm listing (a different business)
- Potentially misattributed reviews, phone numbers, or hours
- Confusion about which "Four Winds" pharmacy they are contacting

This is a **launch-blocking issue** for local search and must be resolved before the website goes live.

## Evidence

| Source | Listing found | Name used |
|---|---|---|
| Yellow Pages | 3932A Keele St, North York | "Guardian Four Winds Pharmacy" |
| Tiendeo | 3932A Keele St, North York | "Guardian Pharmacy — A Keele Street" |
| Medimap | 3932A Keele St, North York | "Can Pharm Services Inc" |
| Central Health Line | 3932 Keele St (possibly same) | Varies |

**Phone overlap risk:** Some directories list Can Pharm with phone (416) 398-8200 — the same
number used for Four Winds Roots. Owner must confirm which phone belongs to which entity and
ensure directories are separated.

## Action plan

### 1. Claim and verify the Google Business Profile (GBP) — highest priority

- Navigate to [business.google.com](https://business.google.com) and claim/verify the listing
  for **Four Winds Roots Pharmacy**.
- Ensure the **canonical business name** used in the GBP matches the chosen brand name exactly
  (confirm with owner — see `design/content-questionnaire.md`).
- Set the correct **primary category**: `Pharmacy`. Add secondary categories if applicable:
  `Optician`, `Holistic medicine practitioner`, or `Wellness center`.
- Publish the correct **phone, address, hours, website URL, and photos** immediately.
- If the old "Guardian Four Winds" listing appears in Google, use the GBP dashboard to request
  removal of duplicate listings or flag them as closed/incorrect.

### 2. Canonical name — pick one and lock it

The pharmacy has appeared under at least four variants across directories:
- "Four Winds Roots Pharmacy"
- "R.O.O.T.S. Four Winds Pharmacy"
- "Roots Four Winds Pharmacy"
- (via Can Pharm) "Guardian Four Winds Pharmacy"

**Choose one canonical form** (confirm with owner), then:
- Use it identically in the GBP, the website, all JSON-LD schema, and all directories.
- Inconsistent NAP (Name, Address, Phone) suppresses local ranking; Google uses exact-match signals.

Recommendation: **"Four Winds Roots Pharmacy"** — most distinctive, avoids the "Guardian" / 
Can Pharm legacy association.

### 3. NAP consistency cleanup — one-time sweep

Update the business name and address on every major directory to the canonical form. Priority
directories to correct:

| Directory | Action |
|---|---|
| Google Business Profile | Claim + verify + correct name |
| Yellow Pages (yellowpages.ca) | Separate Can Pharm listing; ensure Four Winds has correct entry |
| Central Health Line | Update name + hours |
| Cortico | Claim listing if available |
| Medimap | Update or claim |
| Lumino Health (Sun Life) | Correct name |
| Yelp | Update |
| PharmacyList.ca | Update |
| Facebook | Ensure correct name and address |

### 4. JSON-LD schema disambiguation

In the website's LocalBusiness/Pharmacy schema (see `research/local-seo/schema-draft.json`),
include:

```json
{
  "@type": "Pharmacy",
  "name": "Four Winds Roots Pharmacy",
  "disambiguatingDescription": "Independent holistic pharmacy at 3932A Keele St, North York. Not affiliated with Can Pharm Services or Guardian Pharmacy.",
  "address": {
    "streetAddress": "3932A Keele St",
    "addressLocality": "North York",
    "addressRegion": "ON",
    "postalCode": "M3J 1N8"
  }
}
```

The `disambiguatingDescription` field is specifically designed for this use case — it helps
search engines distinguish between co-located entities.

### 5. Homepage copy — soft disambiguation

Without being adversarial, include language on the homepage that clearly anchors the brand:

> "Four Winds Roots Pharmacy — your independent holistic pharmacy at 3932A Keele Street,
> North York. Serving the Keele & Finch community with personalized care since [year]."

This kind of explicit, location-anchored copy helps Google resolve entity ambiguity.

### 6. Monitor for confusion after launch

- Set up a Google Alert for "Four Winds pharmacy" to catch incorrect listings or reviews
  appearing on the wrong profile.
- Periodically check the old "Guardian Four Winds" / Can Pharm listing to confirm it does
  not resurface with Four Winds Roots contact info.

## Owner action items (cannot be done without owner)

- [ ] Confirm canonical business name
- [ ] Confirm phone number ownership (is (416) 398-8200 Four Winds Roots' number, separate from Can Pharm?)
- [ ] Provide Google account credentials to claim GBP (or claim it yourself — agent cannot do this)
- [ ] Provide founding year / "serving since" date for homepage copy
- [ ] Confirm whether any formal relationship with Can Pharm / Guardian exists

## Timeline

This must be completed **before the site launches**. If the GBP is claimed and the canonical
name is locked before launch, the website's internal links + JSON-LD will reinforce the correct
entity immediately upon indexing. Launching without GBP disambiguation risks sending patients
to the wrong listing.
