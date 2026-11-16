import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SHOP_URL } from "../data"

export const navLinks = [
  { href: "/#markets", label: "Markets" },
  { href: "/#support", label: "Application Support" },
  { href: "/#manufacturers", label: "Manufacturers" },
  { href: SHOP_URL, label: "Shop" },
]

export default function SiteHeader() {
  return (
  <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="shrink-0" aria-label="Construction Technologies Group home">
        <Image src="/images/CTG.jpg" alt="Construction Technologies Group LLC" width={856} height={201} className="h-8 w-auto sm:h-9" priority />
      </Link>
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

  )
}
