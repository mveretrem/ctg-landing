import Image from "next/image"
import { ArrowRight, ArrowUpRight, Building2, Check, Factory, Mail, MapPin, Phone } from "lucide-react"
import CompanyContainer from "./components/CompanyContainer"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, companiesData, logoSize } from "./data"

export default function Home() {
  const markets = [
    {
      id: "residential",
      icon: Building2,
      eyebrow: "Multi-Unit Residential",
      title: "Multi-unit residential facility experts",
      body: "We specialize in providing application and equipment solutions for heating, cooling and ventilation design/build and retrofit projects for multi-unit residential facilities:",
      image: "/images/condo1.jpg",
      imageAlt: "Multi-unit residential building",
      items: ["Apartments", "Condominiums", "Mixed-Use", "Dormitories", "Assisted-Living Facilities", "Hotels", "Resorts"],
    },
    {
      id: "commercial",
      icon: Factory,
      eyebrow: "Commercial & Light Commercial",
      title: "Commercial & light commercial HVAC/R solutions",
      body: "We also support mechanical contractors with application and equipment solutions in the commercial and light commercial space:",
      image: "/images/hvac1.jpg",
      imageAlt: "Commercial ductwork and HVAC equipment",
      items: [
        "Office/Tenant Fit Outs",
        "Historic Building Retrofits",
        "Schools (Classrooms, Auditoriums & Athletic space)",
        "Worship Space/Churches",
        "Medical Office Buildings",
        "Retail",
      ],
    },
  ];

  const steps = [
    { title: "Site visit", body: "We visit your site to evaluate your heating, cooling or ventilation needs." },
    { title: "Schematic solutions & budgets", body: "We develop schematic-level application solutions and budget pricing." },
    { title: "Final estimates", body: "We deliver final design/build or retrofit estimates, ready for your bid." },
  ];

  const navLinks = [
    { href: "#markets", label: "Markets" },
    { href: "#support", label: "Application Support" },
    { href: "#manufacturers", label: "Manufacturers" },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="shrink-0" aria-label="Construction Technologies Group home">
            <Image src="/images/CTG.jpg" alt="Construction Technologies Group LLC" width={856} height={201} className="h-8 w-auto sm:h-9" priority />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ctg-orange-dark sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-ctg-orange-dark" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email us"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800 sm:px-4"
            >
              <Mail className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">Contact us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/warehouse.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center] opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40 lg:via-ink/80 lg:to-ink/10" />
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-16 lg:px-8 lg:pb-24 lg:pt-32">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-300 sm:text-xs">
              <MapPin className="h-3.5 w-3.5 text-ctg-orange" aria-hidden />
              Maryland · Virginia · Washington, DC
            </p>
            <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              Applied HVAC/R representation, <span className="text-ctg-orange">engineered for your project.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
              Construction Technologies Group is an applied representative of manufacturers of HVAC/R equipment and
              components, serving Maryland, Virginia and Washington, DC.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${EMAIL}?subject=Site%20visit%20request`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ctg-orange px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_8px_24px_-8px_rgba(255,160,14,0.6)] transition-colors hover:bg-ctg-orange-dark"
              >
                Schedule a site visit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur">
              {[
                { k: `${companiesData.length}`, v: "Manufacturer lines" },
                { k: "2", v: "Core markets" },
                { k: "3", v: "Jurisdictions served" },
              ].map((s) => (
                <div key={s.v} className="px-4 py-4 sm:px-6 sm:py-5">
                  <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-xs text-stone-400 sm:text-sm">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Talk to a rep */}
          <aside className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white shadow-2xl backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ctg-orange">Talk to a rep</p>
            <p className="mt-3 font-display text-2xl font-bold leading-tight">Get application support or pricing on your next project.</p>
            <div className="mt-6 space-y-3">
              <a href={`tel:${PHONE_TEL}`} className="group flex items-center gap-4 rounded-2xl bg-white p-4 text-ink transition hover:bg-stone-100">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ctg-orange">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-stone-500">Call</span>
                  <span className="block font-display text-lg font-bold">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 rounded-2xl border border-white/15 p-4 transition hover:bg-white/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-ctg-orange" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-stone-400">Email</span>
                  <span className="block truncate font-semibold">{EMAIL}</span>
                </span>
              </a>
            </div>
          </aside>
        </div>

        {/* Logo marquee */}
        <div className="border-t border-white/10 bg-white">
          <div className="mx-auto flex max-w-7xl items-center gap-6 py-5 pl-4 sm:pl-6 lg:pl-8">
            <p className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 sm:block">Representing</p>
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee items-center motion-reduce:animate-none hover:[animation-play-state:paused]">
                {[...companiesData, ...companiesData].map((c, i) => {
                  const size = logoSize(c, 2200, 44, 130)
                  return (
                    <div key={`${c.alt}-${i}`} className="flex h-12 shrink-0 items-center px-7 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" aria-hidden={i >= companiesData.length}>
                      <Image src={c.src} alt={i < companiesData.length ? c.alt : ""} loading="eager" width={size.width} height={size.height} style={{ width: size.width, height: size.height }} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Markets */}
        <section id="markets" className="scroll-mt-16 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ctg-orange-dark">Markets we serve</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Heating, cooling and ventilation solutions for the buildings you build.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {markets.map((m) => (
                <article key={m.id} className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white sm:left-6">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ctg-orange text-ink">
                        <m.icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold">{m.eyebrow}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{m.title}</h3>
                    <p className="mt-3 leading-relaxed text-stone-600">{m.body}</p>
                    <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                      {m.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-ctg-orange-dark" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Application Support */}
        <section id="support" className="relative isolate scroll-mt-16 overflow-hidden bg-ink py-20 text-white sm:py-28">
          <div
            className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]"
            aria-hidden
          />
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ctg-orange">Application support &amp; estimating</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                From first walkthrough to final number.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-400">
                We are available to visit your site to evaluate your heating, cooling or ventilation needs to develop
                schematic-level solutions and budgets, or even final design/build or retrofit estimates.
              </p>

              <ol className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-5 px-5 py-5 sm:px-6">
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
            </div>

            <div className="pb-24 sm:pb-10">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/estimating1.png"
                    alt="Engineer reviewing a project on a tablet"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-[62%_center]"
                  />
                </div>
                <div className="absolute -bottom-24 left-3 right-3 rounded-2xl bg-white p-5 text-ink shadow-2xl sm:-bottom-10 sm:left-auto sm:right-6 sm:w-[22rem]">
                  <p className="text-sm text-stone-500">
                    To schedule a preliminary site visit or to obtain pricing for an existing project, call or email:
                  </p>
                  <div className="mt-3 space-y-2">
                    <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 font-semibold hover:text-ctg-orange-dark">
                      <Phone className="h-4 w-4 text-ctg-orange-dark" aria-hidden />
                      {PHONE_DISPLAY}
                    </a>
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 font-semibold hover:text-ctg-orange-dark">
                      <Mail className="h-4 w-4 text-ctg-orange-dark" aria-hidden />
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturers */}
        <section id="manufacturers" className="scroll-mt-16 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ctg-orange-dark">Quality equipment and components</p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Manufacturers we represent</h2>
              </div>
              <p className="max-w-md leading-relaxed text-stone-600">
                To provide the highest quality of application support expected by our customers, we partner with the
                following manufacturers to provide multi-unit residential and commercial facility solutions.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {companiesData.map((company) => (
                <CompanyContainer key={company.link + company.alt} company={company} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ctg-orange px-6 py-12 sm:px-12 sm:py-16">
            <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border-[40px] border-white/20" aria-hidden />
            <div className="absolute -bottom-32 right-40 -z-10 h-64 w-64 rounded-full border-[32px] border-ink/5" aria-hidden />
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Have a project on the board?</h2>
                <p className="mt-3 text-lg text-ink/75">
                  Send us drawings, a scope, or just an address. We&apos;ll come out, take a look and get you a solution and a number.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/80 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  Email us
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white pb-20 md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
          <div>
            <Image src="/images/CTG.jpg" alt="Construction Technologies Group LLC" width={856} height={201} className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-500">
              Applied representative of manufacturers of HVAC/R equipment and components, serving Maryland, Virginia and Washington, DC.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Explore</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-stone-600">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Contact</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-stone-600">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-ink">
                <Phone className="h-4 w-4 text-ctg-orange-dark" aria-hidden />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-ink">
                <Mail className="h-4 w-4 text-ctg-orange-dark" aria-hidden />
                {EMAIL}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ctg-orange-dark" aria-hidden />
                MD · VA · DC
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-100">
          <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-stone-500 sm:px-6 lg:px-8">
            &copy; {new Date().getFullYear()} Construction Technologies Group LLC. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile quick-contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-stone-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-ctg-orange py-3 text-sm font-semibold text-ink">
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-semibold text-white">
          <Mail className="h-4 w-4" aria-hidden />
          Email
        </a>
      </div>
    </div>
  )
}
