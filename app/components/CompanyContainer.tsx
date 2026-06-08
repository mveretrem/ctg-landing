import Image from "next/image"

interface CompanyContainerProps {
  link: string;
  src: string;
  alt: string;
  tagline: string;
}

export default function CompanyContainer({ link, src, alt, tagline }: CompanyContainerProps) {
  return (
    <div className="flex h-32 w-full items-center justify-center p-1 shadow-md rounded-xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 flex flex-col items-center transform hover:scale-105 transition-transform gap-2"
      >
        <Image src={src} alt={alt} width={200} height={200} className="h-16 w-auto" />
        <div className="text-sm text-center">
          <span className="font-semibold">{tagline}</span>
        </div>
      </a>
    </div>
  )
}