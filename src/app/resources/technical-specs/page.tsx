import Link from "next/link";

export const metadata = {
  title: "Technical Specifications Overview | Texas Flange",
  description:
    "How to read a flange specification sheet. ASME class to DIN PN equivalents, pressure-temperature derating, B7 and B7M bolt material selection, and gasket compatibility for raised face and ring joint flanges.",
};

export default function TechnicalSpecsPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Resources / Technical Specs
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Technical Specifications Overview
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            A flange specification is a contract between the designer, the
            supplier, and the fabricator. It carries the geometric data
            needed to fit the part into a piping system, the metallurgical
            data needed to qualify the part for service, and the
            documentation references that let the project owner verify both.
            This page walks through what each section of a typical spec
            sheet means and how to read it without missing the points that
            matter at the bolt-up.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Anatomy of a Flange Spec Sheet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The header carries the part identifier, usually a combination of
            size, class, type, facing, and material. NPS 6 Class 300 weld
            neck raised face A105 is a complete identifier for the most
            common process flange in carbon steel. Below the header the
            sheet typically opens with the dimensional block: outside
            diameter, bolt circle, bolt count and size, hub dimensions, face
            height and diameter, and bore matched to a pipe schedule.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Below the dimensions, the material block calls out the forging
            specification, usually an ASTM number such as A105 for carbon
            steel, A350 LF2 for low temperature carbon steel, A182 F304 or
            F316 for austenitic stainless, A182 F11 or F22 for chrome moly,
            and A182 F44, F51, or F53 for the duplex and super duplex
            families. The material block also notes any supplementary
            requirements such as NACE MR0175 trim for sour service or
            HIC testing for hydrogen-containing service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The documentation block lists the deliverable paperwork:
            mill test report, certificate of conformance, dimensional
            inspection report, hardness data, and where required NDE
            results. The applicable standards block references the design
            code, usually ASME B16.5, B16.47, AWWA C207, or an API spec.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ASME Class to DIN PN Equivalents
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            The ANSI class system and the DIN pressure nominal (PN) system
            describe similar things but are not directly interchangeable.
            The figures below are approximate working pressure equivalents
            useful for first-pass cross referencing. For a real interchange
            decision, dimensional compatibility and gasket selection both
            need separate confirmation.
          </p>
          <div className="bg-[#2a2f35] p-6 overflow-x-auto">
            <table className="w-full text-gray-300">
              <thead className="border-b border-gray-600">
                <tr>
                  <th className="text-left py-3">ASME Class</th>
                  <th className="text-left py-3">Approx PN</th>
                  <th className="text-left py-3">CWP (psi)</th>
                  <th className="text-left py-3">Typical Service</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-700">
                  <td className="py-3">Class 150</td>
                  <td>PN 20</td>
                  <td>285</td>
                  <td>General process, utilities</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3">Class 300</td>
                  <td>PN 50</td>
                  <td>740</td>
                  <td>Process, steam</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3">Class 600</td>
                  <td>PN 100</td>
                  <td>1480</td>
                  <td>Refining, gas service</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3">Class 900</td>
                  <td>PN 150</td>
                  <td>2220</td>
                  <td>High pressure process</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3">Class 1500</td>
                  <td>PN 250</td>
                  <td>3705</td>
                  <td>Hydroprocessing, wellhead</td>
                </tr>
                <tr>
                  <td className="py-3">Class 2500</td>
                  <td>PN 420</td>
                  <td>6170</td>
                  <td>Very high pressure process</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Pressure-Temperature Derating
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A flange class is not a working pressure. It is an index into a
            pressure-temperature rating table where the actual allowable
            working pressure decreases as temperature increases. A Class 300
            A105 flange holds 740 PSI at 100 degrees F but only about 530
            PSI at 600 degrees F. The derating curve is published in
            ASME B16.5 Table 2 for each material group.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Material group is the key concept. Carbon steels, low alloy
            steels, stainless steels, and nickel alloys each derate on
            different curves. A Class 300 F316 stainless flange and a Class
            300 A105 carbon steel flange have the same dimensions and the
            same nominal class, but their working pressures at temperature
            are different because they sit on different curves in the table.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At low temperatures the picture also matters. Below minus 20
            degrees F most carbon steels need impact testing or substitution
            with A350 LF2 to maintain ductility. The spec sheet should call
            out the minimum design metal temperature alongside the design
            pressure to capture both ends of the operating envelope.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Bolt Material Selection
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            ASTM A193 Grade B7 is the standard stud bolt material for most
            flanged joints in ambient and elevated temperature service. It
            is a quenched and tempered chromium molybdenum alloy steel with
            a minimum tensile of 125 ksi for diameters up to 2-1/2 inches.
            Paired with ASTM A194 Grade 2H heavy hex nuts, B7 covers the
            majority of process piping applications.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            For low temperature service, ASTM A320 Grade L7 is the parallel
            material with Charpy impact testing at minus 150 degrees F.
            L7 is required where the design metal temperature falls below
            minus 20 degrees F.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            B7M is the same chemistry as B7 but with a reduced hardness
            ceiling of 235 HBW maximum. The lower hardness improves
            resistance to sulfide stress cracking and is the bolt material
            specified for NACE MR0175 sour service. The trade-off is lower
            allowable stress, so the engineering check must confirm that
            joint preload remains adequate.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Stainless bolting in B8 or B8M is used where the bolt itself
            must resist corrosive media, typically in chemical service or
            external marine exposure. Galvanic compatibility with the
            flange material needs review when mixing stainless bolts with
            carbon steel flanges.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Gasket Compatibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Raised face flanges seat soft gaskets, spiral wound gaskets, or
            kammprofile gaskets, depending on service. Soft sheet gaskets in
            graphite or PTFE composites suit lower pressure utility lines.
            Spiral wound gaskets with stainless windings and graphite or
            PTFE fillers cover most process service through Class 600 and
            into Class 900 with the right inner ring detail. The gasket
            outside diameter must clear the bolt circle and the inside
            diameter must seat against the raised face.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ring joint flanges use solid metal ring gaskets seated in the
            machined groove. R-series oval and octagonal rings cover most
            API 6B and ASME B16.5 RTJ flanges. BX-series rings are pressure
            energized and cover API 6BX flanges from 5,000 PSI through
            20,000 PSI working pressure. The ring number and material must
            match the groove specification. Soft iron, low carbon steel,
            stainless, and Inconel are common ring materials, with the
            choice driven by service media and hardness compatibility with
            the groove.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For full material data on the flange itself, see our materials
            section covering carbon steel, stainless steel, alloy steel, and
            exotic alloys.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Working References
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            The calculators and articles below cover the day-to-day spec
            work that follows from the concepts on this page.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tools/pressure-temperature-rating"
              className="inline-block bg-[#B45309] text-white px-6 py-3 font-semibold hover:bg-[#92400e] transition"
            >
              P-T Rating Calculator
            </Link>
            <Link
              href="/tools/bolt-torque-calculator"
              className="inline-block border border-[#B45309] text-[#B45309] px-6 py-3 font-semibold hover:bg-[#B45309] hover:text-white transition"
            >
              Bolt Torque Calculator
            </Link>
            <Link
              href="/materials/carbon-steel"
              className="inline-block border border-gray-500 text-gray-300 px-6 py-3 font-semibold hover:bg-gray-700 transition"
            >
              Carbon Steel
            </Link>
            <Link
              href="/materials/stainless-steel"
              className="inline-block border border-gray-500 text-gray-300 px-6 py-3 font-semibold hover:bg-gray-700 transition"
            >
              Stainless Steel
            </Link>
            <a
              href="https://www.texasflange.com/blog/gasket-selection-guide/?ref=pipingflange-new"
              className="inline-block border border-gray-500 text-gray-300 px-6 py-3 font-semibold hover:bg-gray-700 transition"
            >
              Gasket Selection Guide
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Spec Sheet Review?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Send the document to sales@texasflange.com or call
            (281) 484-8325. Our inside sales group reviews specs every day
            and will flag any items that need clarification before quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#B45309] px-8 py-3 font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
