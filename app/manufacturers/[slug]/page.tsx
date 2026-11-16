import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Check, Mail, Phone } from "lucide-react"
import SiteFooter from "../../components/SiteFooter"
import SiteHeader from "../../components/SiteHeader"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, logoSize } from "../../data"
import { companyFor, lines } from "../lines"

export const dynamicParams = false

export function generateStaticParams() {
  return lines.map((l) => ({ slug: l.slug }))
}

type Props = { params: Promise<{ slug: string }> }

function findLine(slug: string) {
  const line = lines.find((l) => l.slug === slug)
  if (!line) notFound()
  return line
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const line = findLine((await params).slug)
  const company = companyFor(line)
  const title = `${line.titleKeyword} Rep in MD, VA & DC | CTG Supply`
  const description = `CTG represents ${company.alt} in Maryland, Virginia and Washington, DC: ${company.tagline}. Site visits, application support and bid pricing for contractors.`
  return {
    title,
    description,
    alternates: { canonical: `/manufacturers/${line.slug}` },
    openGraph: { title, description, url: `/manufacturers/${line.slug}` },
  }
}

const steps = [
  { title: "Site visit", body: "We walk the building and look at the heating, cooling or ventilation need." },
  { title: "Selection & budget", body: "We put together a schematic-level equipment selection and budget pricing." },
  { title: "Final estimate", body: "We deliver final design/build or retrofit pricing, ready for your bid." },
]

export default async function LinePage({ params }: Props) {
  const line = findLine((await params).slug)
  const company = companyFor(line)
  const size = logoSize(company, 9000, 80, 260)
  const others = lines.filter((l) => l.slug !== line.slug)
  const subject = encodeURIComponent(`${line.short} pricing request`)

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Manufacturers", item: `${SITE_URL}/#manufacturers` },
      { "@type": "ListItem", position: 3, name: company.alt, item: `${SITE_URL}/manufacturers/${line.slug}` },
    ],
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <SiteHeader />

      <main>
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_320px] lg:items-center lg:px-8">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
                <Link href="/" className="hover:text-ink">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/#manufacturers" className="hover:text-ink">Manufacturers</Link>
                <span className="mx-2">/</span>
                <span className="text-ink">{line.short}</span>
              </nav>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                {company.alt} rep for Maryland, Virginia &amp; DC
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">{line.intro}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
                As the {line.short} representative for the region, Construction Technologies Group helps mechanical
                contractors, engineers and owners pick the right equipment, apply it correctly and get a number for the bid.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${EMAIL}?subject=${subject}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ctg-orange px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ctg-orange-dark"
                >
                  Get {line.short} pricing
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-stone-100"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex h-48 items-center justify-center rounded-3xl border border-stone-200 bg-paper p-8">
              <Image src={company.src} alt={company.alt} width={size.width} height={size.height} style={{ width: size.width, height: size.height }} priority />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight">{line.short} products we quote</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {line.products.map((p) => (
                <article key={p.name} className="rounded-2xl border border-stone-200 bg-white p-6">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 leading-relaxed text-stone-600">{p.body}</p>
                </article>
              ))}
            </div>
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ctg-orange-dark hover:underline"
            >
              See the full {line.short} catalog
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">Where {line.short} fits</h2>
              <p className="mt-3 text-stone-400">Building types where we most often apply {line.short} equipment:</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {line.fits.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ctg-orange" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">How we help</h2>
              <ol className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-5 px-5 py-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ctg-orange/40 font-display text-xs font-bold text-ctg-orange">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-stone-400">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a href={`mailto:${EMAIL}?subject=${subject}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-ctg-orange hover:underline">
                <Mail className="h-4 w-4" aria-hidden />
                {EMAIL}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">Other lines we represent</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/manufacturers/${o.slug}`}
                  className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-ctg-orange hover:text-ctg-orange-dark"
                >
                  {o.titleKeyword}
                </Link>
              ))}
              <Link href="/#manufacturers" className="rounded-full px-4 py-2 text-sm font-semibold text-stone-500 hover:text-ink">
                All manufacturers →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
