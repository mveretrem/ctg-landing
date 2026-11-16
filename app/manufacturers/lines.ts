import { companiesData, type Company } from "../data"

export interface Product {
  name: string
  body: string
}

export interface Line {
  slug: string
  /** Must match `alt` in companiesData so logo, link and tagline come from one place. */
  company: string
  /** Short brand name used in titles and buttons. */
  short: string
  /** The search phrase the page title leads with, e.g. "GE VRF & PTAC". */
  titleKeyword: string
  intro: string
  products: Product[]
  fits: string[]
}

export const lines: Line[] = [
  {
    slug: "ge-appliances-air-water",
    company: "GE Appliances Air & Water Solutions",
    short: "GE",
    titleKeyword: "GE VRF & PTAC",
    intro:
      "GE Appliances Air & Water Solutions covers the full range of a multifamily or hospitality job, from through-the-wall PTACs in every unit to VRF and rooftop equipment for the common areas.",
    products: [
      { name: "VRF systems", body: "Variable refrigerant flow heat pump and heat recovery systems that serve many zones from one outdoor unit, a common pick for mid-rise multifamily, offices and mixed-use buildings." },
      { name: "PTACs", body: "Packaged terminal air conditioners and heat pumps for hotel rooms, apartments, dorms and assisted-living units, installed through the wall with a sleeve and grille." },
      { name: "VTACs", body: "Vertical terminal units that sit in a closet and duct to one or more rooms, keeping equipment out of sight in apartments and suites." },
      { name: "Rooftop units", body: "Packaged rooftop units for retail, light commercial and common-area loads." },
      { name: "Ducted HVAC and ductless mini-splits", body: "Split systems for units, amenity spaces and spot loads where a central system does not fit." },
    ],
    fits: ["Apartments", "Hotels", "Dormitories", "Assisted-Living Facilities", "Mixed-Use", "Offices"],
  },
  {
    slug: "friedrich",
    company: "Friedrich",
    short: "Friedrich",
    titleKeyword: "Friedrich PTAC & VTAC",
    intro:
      "Friedrich is a long-standing name in room and terminal air conditioning. We help contractors select and price Friedrich PTACs, VTACs, ductless splits and packaged heat pumps for unit-by-unit heating and cooling.",
    products: [
      { name: "PTACs", body: "Through-the-wall packaged terminal units for hotels, apartments, senior living and dorms, available as cooling with electric heat or as heat pumps." },
      { name: "VTACs", body: "Vertical packaged units installed in a closet and ducted to the space, used where a through-the-wall unit is not wanted in the room." },
      { name: "Ductless splits", body: "Wall-mounted and multi-zone ductless systems for units, offices and additions." },
      { name: "Packaged heat pumps", body: "Self-contained heat pump units for individual spaces and small zones." },
    ],
    fits: ["Hotels", "Apartments", "Condominiums", "Assisted-Living Facilities", "Dormitories"],
  },
  {
    slug: "hitachi",
    company: "Hitachi",
    short: "Hitachi",
    titleKeyword: "Hitachi Ductless & Mini-VRF",
    intro:
      "Hitachi ductless and mini-VRF heat pumps give contractors an efficient way to heat and cool individual units, small commercial spaces and retrofits without new ductwork.",
    products: [
      { name: "Ductless splits", body: "Single-zone and multi-zone ductless heat pumps for apartments, offices and spaces added on to existing buildings." },
      { name: "Mini-VRF heat pumps", body: "Compact variable refrigerant flow systems that serve several indoor units from one outdoor unit, sized for townhomes, small offices and retail." },
      { name: "Air-to-water heat pumps", body: "Heat pumps that make hot or chilled water for hydronic systems, a path to electrifying boiler-based buildings." },
    ],
    fits: ["Apartments", "Condominiums", "Office/Tenant Fit Outs", "Historic Building Retrofits", "Retail"],
  },
  {
    slug: "panasonic",
    company: "Panasonic",
    short: "Panasonic",
    titleKeyword: "Panasonic Ventilation & ERV",
    intro:
      "Panasonic ventilation products help multifamily and commercial projects meet code-required fresh air and exhaust while keeping units quiet and energy use down.",
    products: [
      { name: "Ventilation fans", body: "Quiet bath and continuous exhaust fans for apartments, condos and offices." },
      { name: "ERVs", body: "Energy recovery ventilators that bring in fresh air and recover heat and moisture from the exhaust air, often required in tight multifamily construction." },
      { name: "Air purification", body: "Products that improve indoor air quality in occupied spaces." },
      { name: "Smart controls", body: "Controls that run fans and ventilation on schedules, humidity or occupancy." },
    ],
    fits: ["Apartments", "Condominiums", "Dormitories", "Assisted-Living Facilities", "Offices"],
  },
  {
    slug: "bulldog",
    company: "Bulldog",
    short: "Bulldog",
    titleKeyword: "Bulldog Hybrid Water-Source Heat Pump",
    intro:
      "Bulldog hybrid water-source heat pumps serve buildings that run on a water loop, giving each unit its own heating and cooling from a shared building system.",
    products: [
      { name: "Hybrid water-source heat pumps", body: "Unit-level heat pumps that exchange heat with a building water loop, used in multifamily towers, hotels and offices where each space needs its own control." },
    ],
    fits: ["Apartments", "Condominiums", "Hotels", "Mixed-Use"],
  },
  {
    slug: "captiveaire",
    company: "CaptiveAire",
    short: "CaptiveAire",
    titleKeyword: "CaptiveAire Paragon DOAS",
    intro:
      "CaptiveAire Paragon dedicated outdoor air systems, rooftop units and fans handle the fresh-air and exhaust side of commercial and multifamily buildings.",
    products: [
      { name: "Paragon DOAS", body: "Dedicated outdoor air systems that condition 100% outside air before it reaches the space, separating ventilation from the heating and cooling equipment." },
      { name: "Rooftop units", body: "Packaged rooftop equipment for commercial and common-area loads." },
      { name: "Fans", body: "Supply and exhaust fans for commercial buildings, corridors and multifamily ventilation." },
    ],
    fits: ["Schools (Classrooms, Auditoriums & Athletic space)", "Worship Space/Churches", "Medical Office Buildings", "Apartments", "Retail"],
  },
]

export function companyFor(line: Line): Company {
  const company = companiesData.find((c) => c.alt === line.company)
  if (!company) throw new Error(`No company "${line.company}" in companiesData`)
  return company
}

export function lineForCompany(company: Company): Line | undefined {
  return lines.find((l) => l.company === company.alt)
}
