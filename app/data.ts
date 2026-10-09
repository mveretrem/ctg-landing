export const EMAIL = "solutions@ctgsupply.com"
export const PHONE_DISPLAY = "(703) 230-0111"
export const PHONE_TEL = "+17032300111"

export interface Company {
  link: string;
  src: string;
  alt: string;
  tagline: string;
  /** Intrinsic pixel size of the trimmed logo file, used to balance logo sizes. */
  w: number;
  h: number;
}

export const companiesData: Company[] = [
  { link: "https://www.geappliancesairandwater.com/", src: "/images/logos/ge.png", alt: "GE Appliances Air & Water", tagline: "VRF, PTACs, VTACs, Rooftop Units, Ducted HVAC, Ductless Mini-Splits", w: 512, h: 512 },
  { link: "https://iaq.na.panasonic.com/professional/ventilation-strategy", src: "/images/logos/panasonic.png", alt: "Panasonic", tagline: "Ventilation Fans, ERVs, Air Purification, Smart Controls", w: 600, h: 92 },
  { link: "https://www.hitachiaircon.com/us/products/single-zone-commercial-ac", src: "/images/logos/hitachi.png", alt: "Hitachi", tagline: "Ductless Splits, Mini-VRF Heat Pumps, Air-to-Water Heat Pumps", w: 1175, h: 235 },
  { link: "https://www.friedrich.com/professional/home", src: "/images/logos/friedrich.png", alt: "Friedrich", tagline: "PTACs, VTACs, Ductless Splits, Packaged Heat Pumps", w: 2700, h: 499 },
  { link: "https://bulldogheatpump.com/", src: "/images/logos/bulldog.png", alt: "Bulldog", tagline: "Hybrid WSHP", w: 2222, h: 479 },
  { link: "https://www.captiveaire.com/catalogcontent/fans/rtu_doas/paragon.asp", src: "/images/logos/captiveair.png", alt: "CaptiveAire", tagline: "Paragon DOAS, RTUs & Fans", w: 1600, h: 220 },
  { link: "https://www.proloncontrols.com/", src: "/images/logos/prolon.png", alt: "Prolon", tagline: "HVAC Control Systems, Sensors, Software & Applications", w: 758, h: 120 },
  { link: "https://chamflex.com/", src: "/images/logos/chamflex.png", alt: "Chamflex", tagline: "Hose Kits, Manual or Automatic Balancing Valves", w: 246, h: 68 },
  { link: "https://www.z-flex.com/", src: "/images/logos/zflex.png", alt: "Z-Flex Venting Systems", tagline: "Venting Systems", w: 174, h: 67 },
  { link: "https://uniclampusa.com/collections/all", src: "/images/logos/uniclamp.png", alt: "Uniclamp", tagline: "Pipe Clamps & Ties", w: 521, h: 272 },
  { link: "https://cerro.com/", src: "/images/logos/cerro.png", alt: "Cerro", tagline: "Copper Tubing & Linesets", w: 217, h: 101 },
  { link: "https://www.rapidlockingsystem.com/", src: "/images/logos/rls.png", alt: "RLS", tagline: "HVAC/R Press Fittings", w: 369, h: 318 },
];

/**
 * Size a logo so every mark covers roughly the same visual area, whatever its
 * aspect ratio: wide wordmarks get shorter, square monograms get narrower.
 */
export function logoSize(company: Pick<Company, "w" | "h">, area: number, maxH: number, maxW: number) {
  const aspect = company.w / company.h
  let h = Math.min(Math.sqrt(area / aspect), maxH)
  let w = h * aspect
  if (w > maxW) {
    w = maxW
    h = w / aspect
  }
  return { width: Math.round(w), height: Math.round(h) }
}
