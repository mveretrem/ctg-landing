import Image from "next/image"
import { Mail } from "lucide-react"
import CompanyContainer from "./components/CompanyContainer"

export default function Home() {
  const companiesData = [
    { link: "https://www.geappliancesairandwater.com/", src: "/images/ge.png", alt: "GE", tagline: "VRF, PTACs, VTACs, Rooftop Units, Ducted HVAC, Ductless Mini-Splits" },
    { link: "https://iaq.na.panasonic.com/professional/ventilation-strategy", src: "/images/panasonic.png", alt: "Panasonic", tagline: "Ventilation Fans, ERVs, Air Purification, Smart Controls" },
    { link: "https://www.hitachiaircon.com/us/products/single-zone-commercial-ac", src: "/images/hitachi.jpeg", alt: "Hitachi", tagline: "Ductless Splits, Mini-VRF Heat Pumps, Air-to-Water Heat Pumps" },
    { link: "https://www.friedrich.com/professional/home", src: "/images/friedrich.jpg", alt: "Friedrich", tagline: "PTACs, VTACs, Ductless Splits, Packaged Heat Pumps" },
    { link: "https://bulldogheatpump.com/", src: "/images/bulldog.png", alt: "Bulldog", tagline: "Hybrid WSHP" },
    { link: "https://www.captiveaire.com/catalogcontent/fans/rtu_doas/paragon.asp", src: "/images/captiveair.png", alt: "CaptiveAire", tagline: "Paragon DOAS, RTUs & Fans" },
    { link: "https://www.proloncontrols.com/", src: "/images/prolon.png", alt: "Prolon", tagline: "HVAC Control Systems, Sensors, Software & Applications" },
    { link: "https://chamflex.com/", src: "/images/chamflex.png", alt: "Chamflex", tagline: "Hose Kits, Manual or Automatic Balancing Valves" },
    { link: "https://www.z-flex.com/", src: "/images/zflex.png", alt: "Z-Flex Venting Systems", tagline: "Venting Systems" },
    { link: "https://uniclampusa.com/collections/all", src: "/images/uniclamp.png", alt: "Uniclamp", tagline: "Pipe Clamps & Ties" },
    { link: "https://cerro.com/", src: "/images/cerro.png", alt: "Cerro", tagline: "Copper Tubing & Linesets" },
    { link: "https://www.rapidlockingsystem.com/", src: "/images/rls.png", alt: "RLS", tagline: "HVAC/R Press Fittings" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/warehouse.jpg"
            alt="CTG Warehouse"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="bg-white/90 p-8 rounded-xl shadow-lg inline-block">
            <Image
              src="/images/CTG.jpg"
              alt="Construction Technologies Group LLC"
              width={500}
              height={150}
              className="h-auto w-auto mx-auto"
              priority
            />
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-6 max-w-3xl mx-auto">
              Construction Technologies Group is an applied representative of manufacturers of HVAC/R equipment and
              components, serving Maryland, Virginia and Washington, DC.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="space-y-0">
        {/* Multi-Unit Residential */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffa00e]">
                  MULTI-UNIT RESIDENTIAL FACILITY EXPERTS
                </h2>
                <p className="text-lg text-gray-800 mb-4">
                  We specialize in providing application and equipment solutions for heating, cooling and ventilation
                  design/build and retrofit projects for multi-unit residential facilities:
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Apartments
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Condominiums
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Mixed-Use
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Dormitories
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Assisted-Living Facilities
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Hotels
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Resorts
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/condo1.jpg"
                  alt="Multi-Unit Residential Facilities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Solutions */}
        <section className="py-16 bg-gradient-to-bl from-gray-100 to-gray-300">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/hvac1.jpg" alt="Commercial HVAC Solutions" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffa00e]">
                  COMMERCIAL &amp; LIGHT COMMERCIAL HVAC/R SOLUTIONS
                </h2>
                <p className="text-lg text-gray-800 mb-4">
                  We also support mechanical contractors with application and equipment solutions in the commercial and
                  light commercial space:
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Office/Tenant Fit Outs
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Historic Building Retrofits
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Schools (Classrooms, Auditoriums &amp; Athletic space)
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Worship Space/Churches
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Medical Office Buildings
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    Retail
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Support */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffa00e]">
                  APPLICATION SUPPORT &amp; ESTIMATING
                </h2>
                <p className="text-lg text-gray-800 mb-4">
                  We are available to visit your site to evaluate your heating, cooling or ventilation needs to develop
                  schematic-level solutions and budgets, or even final design/build or retrofit estimates.
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  To schedule a preliminary site visit or to obtain pricing for an existing project, please email:
                </p>
                <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
                  <p className="font-bold text-xl mb-4">Contact Us</p>
                  <a
                    href="mailto:solutions@ctgsupply.com"
                    className="inline-flex items-center text-[#ffa00e] hover:text-orange-700 transition-colors text-lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    solutions@ctgsupply.com
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/estimating1.png"
                  alt="Application Support & Estimating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Equipment */}
        <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-300">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffa00e]">QUALITY EQUIPMENT AND COMPONENTS</h2>
              <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
                To provide the highest quality of application support expected by our customers, we partner with the
                following manufacturers to provide multi-unit residential and commercial facility solutions:
              </p>
            </div>

            {/* Partner Logos */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                {companiesData.map((company) => (
                  <CompanyContainer 
                    key={company.link + company.alt}
                    link={company.link}
                    src={company.src}
                    alt={company.alt}
                    tagline={company.tagline}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/images/CTG.jpg"
            alt="Construction Technologies Group LLC"
            width={200}
            height={60}
            className="h-auto w-auto mx-auto mb-4"
          />
          <p>&copy; {new Date().getFullYear()} Construction Technologies Group LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
