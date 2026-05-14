import Link from "next/link";

export const metadata = {
  title: "Flange Standards Reference | ASME, ANSI, AWWA, DIN, API | Texas Flange",
  description:
    "Complete reference for flange standards we supply: ASME B16.5 and B16.47, ANSI B16.1, AWWA C207 and C228, DIN/EN 1092-1, API 6A/6BX, MSS SP-44, and NACE MR0175.",
};

const standards = [
  {
    code: "ASME B16.5",
    title: "Pipe Flanges 1/2\" - 24\"",
    summary:
      "The workhorse spec for industrial flanges through 24 inches. Classes 150 through 2500, raised face, flat face, and RTJ.",
    href: "/standards/asme-flanges",
  },
  {
    code: "ASME B16.47",
    title: "Large Diameter Flanges 26\" - 60\"",
    summary:
      "Series A (MSS SP-44 lineage) and Series B (API 605 lineage). Same nominal size, very different bolt patterns. Not interchangeable.",
    href: "/standards/asme-flanges",
  },
  {
    code: "AWWA C207",
    title: "Steel Pipe Flanges for Waterworks",
    summary:
      "Class B (86 psi), Class D (150/175 psi), Class E (275 psi), Class F (300 psi). Sizes 4\" through 144\". The waterworks backbone.",
    href: "/standards/awwa-flanges",
  },
  {
    code: "ANSI B16.1",
    title: "Cast Iron Pipe Flanges",
    summary:
      "Class 25, 125, and 250 cast iron. Critical for retrofit and HVAC work because Class 125LW steel flanges share its bolt pattern.",
    href: "/standards/ansi-flanges",
  },
  {
    code: "DIN / EN 1092-1",
    title: "European Steel Flanges",
    summary:
      "PN 6 through PN 400. Eleven flange types covering weld neck, slip-on, blind, lap joint, and loose configurations.",
    href: "/standards/din-flanges",
  },
  {
    code: "API 6A / 6BX",
    title: "Wellhead and Christmas Tree Flanges",
    summary:
      "Pressure ratings to 20,000 psi. The other end of the spectrum from AWWA Class B. Sour service and ultra-high-pressure applications.",
    href: "/standards/asme-flanges",
  },
  {
    code: "MSS SP-44",
    title: "Steel Pipeline Flanges",
    summary:
      "Large diameter pipeline flanges that fed directly into the ASME B16.47 Series A standard. Common on transmission pipelines.",
    href: "/standards/asme-flanges",
  },
  {
    code: "NACE MR0175",
    title: "Sour Service Materials",
    summary:
      "Not a flange standard - a materials standard. Governs hardness and chemistry for H2S environments. Required across upstream oil and gas.",
    href: "/materials/alloy-steel",
  },
];

export default function StandardsHubPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Built to Code. Across Every Standard.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            From 86 PSI municipal water flanges to 20,000 PSI wellhead
            connections, we supply product built to the codes your specs
            require. This is our working reference for the flange standards we
            stock and source every day.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            The Standards We Live In
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
            A flange is only as good as the specification it was built to. The
            standard governs dimensions, tolerance, material chemistry, marking,
            pressure-temperature ratings, and acceptable face finishes. Pick the
            wrong code and you can end up with a flange that bolts up just fine
            but is rated for a fraction of the pressure your system actually
            sees. Below are the eight standards that cover the vast majority of
            flange work we do.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((s) => (
              <Link
                key={s.code}
                href={s.href}
                className="bg-white border border-gray-200 rounded p-6 hover:border-[#B45309] hover:shadow-md transition"
              >
                <p className="text-[#B45309] font-bold text-sm tracking-wider mb-2">
                  {s.code}
                </p>
                <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {s.summary}
                </p>
                <p className="text-[#B45309] text-sm font-semibold mt-4">
                  Read the reference -&gt;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Why Standards Matter
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Interchangeability
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Bolt patterns, face thickness, and OD must match the mating
                flange. A B16.5 Class 150 flange and an AWWA Class D flange in
                the same nominal size do not always share the same bolt circle.
                The standard is what makes parts swap without a redesign.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Pressure Ratings
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Pressure-temperature ratings are derived from the material group
                and the flange class. ASME and API ratings derate as temperature
                climbs. AWWA flanges have a single working pressure tied to the
                class. Knowing which curve applies is non-negotiable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Traceability
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Code-compliant flanges carry marking that ties heat number,
                material grade, manufacturer, size, and class to a mill cert.
                When an inspector asks where the metal came from, the standard
                is what makes the answer possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Cross-Reference Quick Hits
          </h2>
          <ul className="text-gray-700 leading-relaxed space-y-3 max-w-3xl">
            <li>
              <strong>ASME B16.5 Class 150</strong> roughly aligns with{" "}
              <strong>DIN PN 20</strong>. Roughly. Bolt patterns do not match.
            </li>
            <li>
              <strong>AWWA Class D (175 psi)</strong> shares its bolt circle and
              hole pattern with <strong>ANSI B16.1 Class 125</strong> through
              most common sizes, which is why Class 125LW steel flanges remain
              so popular in waterworks retrofits.
            </li>
            <li>
              <strong>ASME B16.47 Series A</strong> uses fewer, larger bolts
              than <strong>Series B</strong>. They will not swap. Specify
              clearly on every order.
            </li>
            <li>
              <strong>API 6A flanges</strong> at 5000 psi and above are
              fundamentally different geometry from B16.5. Do not assume a
              B16.5 Class 2500 is the same animal as an API 6BX 5K.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-8 max-w-3xl">
            Browse the{" "}
            <Link href="/products/flanges" className="text-[#B45309] underline">
              flange product overview
            </Link>{" "}
            for what we stock, or jump to the{" "}
            <Link href="/tools" className="text-[#B45309] underline">
              tools section
            </Link>{" "}
            for dimensional lookups and bolt charts.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Spec Cross-Check?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Send us your line list or flange schedule. We will confirm the
            standard, class, material, and face finish before anything ships.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#B45309] px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              Call (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#B45309]"
            >
              sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
