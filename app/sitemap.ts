import type { MetadataRoute } from "next"
import { SITE_URL } from "./data"
import { lines } from "./manufacturers/lines"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    ...lines.map((l) => ({ url: `${SITE_URL}/manufacturers/${l.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ]
}
