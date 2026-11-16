import type React from "react"
import type { Metadata } from "next"
import { Archivo, Inter } from "next/font/google"
import { ADDRESS_LINES, BRAND, EMAIL, PHONE_TEL, SERVICE_AREA, SITE_URL, companiesData } from "./data"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" })

const TITLE = "HVAC Equipment Rep for MD, VA & DC | CTG Supply"
const DESCRIPTION =
  "HVAC manufacturers' rep for GE, Panasonic, Hitachi, Friedrich and more. Site visits, application support and bid estimates for multifamily and commercial projects in MD, VA & DC."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: BRAND,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/warehouse.jpg", alt: "Construction Technologies Group HVAC equipment warehouse" }],
  },
}

// LocalBusiness data so Google and AI search can tie the name, phone, address
// and service area together. Built from the same constants the page renders.
const [street, cityLine] = ADDRESS_LINES
const [, city, region, postalCode] = cityLine.match(/^(.+), ([A-Z]{2}) (\d{5})$/) ?? []
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BRAND,
  alternateName: "CTG Supply",
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/images/CTG.jpg`,
  image: `${SITE_URL}/images/warehouse.jpg`,
  telephone: PHONE_TEL,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: street,
    addressLocality: city,
    addressRegion: region,
    postalCode,
    addressCountry: "US",
  },
  areaServed: SERVICE_AREA.map((name) => ({ "@type": "AdministrativeArea", name })),
  brand: companiesData.map((c) => ({ "@type": "Brand", name: c.alt })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
