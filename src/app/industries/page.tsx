import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Supply | Texas Flange & Fitting Supply",
  description:
    "Flanges and fittings supplied to oil and gas, petrochemical, power generation, waterworks, chemical processing, mining, pulp and paper, food and beverage, agriculture, HVAC, marine, and data center customers.",
};

const industries = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    eyebrow: "Energy Sector",
    blurb:
      "Upstream wellhead, midstream pipeline, and downstream refining. API 6A, NACE MR0175 sour service, and chrome-moly forgings.",
  },
  {
    slug: "petrochemical",
    name: "Petrochemical",
    eyebrow: "Process Industry",
    blurb:
      "Reactors, distillation columns, and transfer piping. ASME B16.5 Class 150 through 1500 with full material traceability.",
  },
  {
    slug: "power-generation",
    name: "Power Generation",
    eyebrow: "Utility Sector",
    blurb:
      "High temperature steam piping in F22 and F91, cooling water in AWWA lightweight, and combined-cycle plant balance of plant.",
  },
  {
    slug: "waterworks",
    name: "Water & Wastewater",
    eyebrow: "Municipal Sector",
    blurb:
      "AWWA C207 Class B, D, E, and F. Class 125LW lightweight steel. Treatment plants, distribution mains, and pump stations.",
  },
  {
    slug: "chemical-processing",
    name: "Chemical Processing",
    eyebrow: "Process Industry",
    blurb:
      "Stainless 304 and 316L for corrosive service. Hastelloy and Monel for severe duty. Lined flanges for aggressive media.",
  },
  {
    slug: "mining",
    name: "Mining & Minerals",
    eyebrow: "Heavy Industry",
    blurb:
      "Slurry lines, tailings transfer, and dewatering. Carbon steel with replaceable wear components for abrasive service.",
  },
  {
    slug: "pulp-paper",
    name: "Pulp & Paper",
    eyebrow: "Process Industry",
    blurb:
      "Bleach plant chloride service in duplex 2205 and super duplex 2507. Recovery boilers and white and black liquor lines.",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    eyebrow: "Sanitary Process",
    blurb:
      "316L stainless with sanitary finishes. CIP compatible fittings. Lower pressure with strict purity requirements.",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    eyebrow: "Ag & Irrigation",
    blurb:
      "Irrigation mains, fertilizer transfer, and anhydrous ammonia service requiring stainless materials.",
  },
  {
    slug: "hvac",
    name: "HVAC & Mechanical",
    eyebrow: "Building Systems",
    blurb:
      "Chilled water, hot water heating, and low pressure steam. Lightweight flanges for cooling, ASME B16.5 for process loops.",
  },
  {
    slug: "marine",
    name: "Marine & Shipbuilding",
    eyebrow: "Marine Sector",
    blurb:
      "Seawater service in Monel 400, copper-nickel, and bronze. ABS, USCG, and ABYC compliant material packages.",
  },
  {
    slug: "data-centers",
    name: "Data Centers",
    eyebrow: "Critical Facilities",
    blurb:
      "Cooling loops, CRAH and CRAC piping, and chilled water mains. Lightweight flanges sized for high volume, lower pressure duty.",
  },
];

export default function IndustriesHubPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            Industries We Supply
          </p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">
            From Wellhead to Water Main
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Texas Flange stocks and sources flanges, fittings, and forgings for
            twelve core industries. Each sector carries its own pressure
            classes, material codes, and corrosion realities. We speak the
            specification before we quote the price.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="block bg-white border border-gray-200 p-6 hover:border-[#B45309] hover:shadow-lg transition"
              >
                <p className="text-[#B45309] uppercase tracking-wider text-xs mb-2">
                  {industry.eyebrow}
                </p>
                <h2 className="font-display text-2xl text-[#1B1F23] mb-3">
                  {industry.name}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {industry.blurb}
                </p>
                <p className="text-[#B45309] text-sm mt-4 font-medium">
                  View industry detail
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            Why Texas Flange
          </p>
          <h2 className="font-display text-4xl text-[#1B1F23] mb-6">
            Cross-Industry Specification Depth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="font-display text-xl text-[#1B1F23] mb-3">
                One Supply House, Many Sectors
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A pipeline contractor and a food processor have nothing in
                common except a flange face. We carry the full range so the
                same purchase order can cover both.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-[#1B1F23] mb-3">
                Code and Standard Fluency
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ASME B16.5, B16.47, API 6A, AWWA C207, MSS SP-44, and the
                lightweight ANSI B16.1 cast iron pattern. We match the spec on
                the drawing without translation errors.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-[#1B1F23] mb-3">
                Material Traceability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mill test reports, heat numbers, and PMI on demand. Sour
                service, NACE, and positive material identification handled as
                routine, not as an exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-4">
            Tell Us Your Service Conditions
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Pressure, temperature, media, and code. Send the line list and we
            will return a quote with the right material grade for your
            industry.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#B45309] px-8 py-4 font-medium hover:bg-gray-100 transition"
            >
              (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border border-white px-8 py-4 font-medium hover:bg-white hover:text-[#B45309] transition"
            >
              sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
