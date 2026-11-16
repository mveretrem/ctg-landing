# SEO Roast Roadmap: ctgsupply.com (2026-11-16)

Verdict: Crawlable and fast, but the title says "Construction Technologies Group LLC" and nothing a contractor would type into Google.

| # | Tier | Issue | Revenue impact | Fix | Owner | Status |
|---|---|---|---|---|---|---|
| 1 | REVENUE | Title had no "HVAC" and no service area | Did not match "HVAC rep Virginia" / "GE VRF rep DC" searches | Title + description name HVAC, brands, MD/VA/DC | agent | fixed, not deployed |
| 2 | REVENUE | No LocalBusiness data, no canonical, no OG tags | Google and AI answers could not connect name, phone, address and service area | JSON-LD built from `app/data.ts`, canonical, OG | agent | fixed, not deployed |
| 3 | REVENUE | No robots.txt or sitemap (both 404) | Slower discovery, no sitemap to submit | `app/robots.ts`, `app/sitemap.ts` | agent | fixed, not deployed |
| 4 | COMPOUNDING | Google Business Profile unknown | Local pack ("HVAC supplier near me") is where B2B local buyers click | Claim/verify GBP at 6306 Gravel Ave Suite D, match NAP exactly | owner | next |
| 5 | COMPOUNDING | One page covers 12 manufacturers | Can't rank for "Friedrich PTAC distributor Virginia", "GE VRF rep" | One page per key line (GE VRF/PTAC, Friedrich, Hitachi), 300+ words, project photos | owner + agent | next |
| 6 | COMPOUNDING | No link to shop.ctgsupply.com and back | Shop and rep site don't pass authority to each other | Nav link "Shop" + shop footer link to ctgsupply.com | owner decision | next |
| 7 | COMPOUNDING | Manufacturer "find a rep" listings | Highest-trust links available to a rep | Ask each manufacturer to list/link CTG on their rep locator | owner | next |
| 8 | REVENUE | CTA is mailto/tel only | Desktop visitors without a mail client bounce | Project-intake form (drawings upload) once a mail service is picked | owner decision | later |

## Fluff (ignore until rows above ship)
- `estimating1.png` is 700 KB, `warehouse.jpg` 390 KB: convert to WebP
- Unused Next.js starter SVGs in `public/`
