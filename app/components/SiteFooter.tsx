import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { ADDRESS_LINES, EMAIL, MAP_URL, PHONE_DISPLAY, PHONE_TEL } from "../data"
import { navLinks } from "./SiteHeader"

export default function SiteFooter() {
  return (
    <>
  {/* Footer */}
  <footer className="border-t border-stone-200 bg-white pb-20 md:pb-0">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
      <div>
        <Image src="/images/CTG.jpg" alt="Construction Technologies Group LLC" width={856} height={201} className="h-10 w-auto" />
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-500">
          Applied representative of manufacturers of HVAC equipment and components, serving Maryland, Virginia and Washington, DC.
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
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 hover:text-ink">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ctg-orange-dark" aria-hidden />
            <address className="not-italic">
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </address>
          </a>
          <p className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-ctg-orange-dark" aria-hidden />
            Mon–Fri, 8am–6pm
          </p>
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
    </>
  )
}
