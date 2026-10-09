import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { type Company, logoSize } from "../data"

export default function CompanyContainer({ company }: { company: Company }) {
  const { link, src, alt, tagline } = company
  const size = logoSize(company, 6000, 64, 200)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ctg-orange/60 hover:shadow-[0_16px_40px_-16px_rgba(20,22,26,0.25)]"
    >
      <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 transition-colors group-hover:border-ctg-orange group-hover:bg-ctg-orange group-hover:text-ink">
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </span>
      <div className="flex h-20 items-center">
        <Image src={src} alt={alt} loading="eager" width={size.width} height={size.height} style={{ width: size.width, height: size.height }} />
      </div>
      <div className="mt-5 border-t border-stone-100 pt-4">
        <p className="font-display text-[15px] font-semibold text-ink">{alt}</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-500">{tagline}</p>
      </div>
    </a>
  )
}
