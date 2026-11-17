# SEO Roast Roadmap: ctgsupply.com (updated 2026-11-16)

Verdict at start: crawlable and fast, but the title said "Construction Technologies Group LLC" and nothing a contractor would type into Google.

| # | Tier | Issue | Revenue impact | Fix | Owner | Status |
|---|---|---|---|---|---|---|
| 1 | REVENUE | Title had no "HVAC" and no service area | Missed "HVAC rep Virginia" / "GE VRF rep DC" searches | Title + description name HVAC, brands, MD/VA/DC | agent | shipped |
| 2 | REVENUE | No LocalBusiness data, canonical, OG | Google/AI couldn't connect name, phone, address, area | JSON-LD from `app/data.ts` incl. Mon–Fri 8–6 hours | agent | shipped |
| 3 | REVENUE | No robots.txt or sitemap | Slower discovery | `app/robots.ts`, `app/sitemap.ts` | agent | shipped |
| 4 | COMPOUNDING | One page for 12 manufacturers | Couldn't rank for "<brand> rep MD VA DC" | 6 line pages at `/manufacturers/<slug>` | agent | shipped |
| 5 | COMPOUNDING | Search Console | No index/query data | Sitemap submitted, indexing requested for home + 2 line pages | agent | shipped |
| 6 | COMPOUNDING | No Google Business Profile | Not in local pack | Profile created: Air conditioning system supplier, Suite D, MD/VA/DC, Mon–Fri 8–6 | agent | created; **owner records verification video** |
| 7 | COMPOUNDING | Manufacturer "find a rep" listings | Highest-trust links a rep can get | Email each manufacturer (drafts in `seo/outreach.md`) | owner | next |
| 8 | COMPOUNDING | Shop ↔ CTG links | Authority not shared | CTG → shop shipped; shop → CTG after `feat/ndl-accounts-pricing` merges | agent | half done |
| 9 | COMPOUNDING | Bing Webmaster / Bing Places / Apple | Bing feeds ChatGPT/Copilot; Apple Maps | Webmaster: import from GSC (in progress). Places/Apple: after GBP verification | owner + agent | in progress |
| 10 | COMPOUNDING | Reviews, citations, trade associations | Local ranking + trust | See `seo/outreach.md` | owner | next |
| 11 | REVENUE | CTA is mailto/tel only | Desktop visitors without a mail client bounce | Project-intake form reusing the FormSubmit setup once Pantry's is proven | agent | later |
| 12 | REVIEW | Search Console data | See real queries | Re-check titles and line pages | agent | ~2026-12-07 |

## Fluff
- Done: estimating image 703 KB → 147 KB, hero 390 KB → 297 KB, starter SVGs removed.
- Homepage hero/intro copy left as the owner set it.
