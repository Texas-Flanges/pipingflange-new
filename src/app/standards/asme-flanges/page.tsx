import Link from "next/link";

export const metadata = {
  title: "ASME B16.5 and B16.47 Flanges | Texas Flange Reference",
  description:
    "Complete reference for ASME B16.5 (1/2\" - 24\") and ASME B16.47 (26\" - 60\") pipe flanges. Pressure-temperature ratings, classes, materials, and Series A vs Series B explained.",
};

export default function AsmeFlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            ASME B16.5 and B16.47
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            These two standards cover the overwhelming majority of industrial
            steel flanges in service in North America. B16.5 handles the small
            and mid-bore end, B16.47 covers large diameter. Together they
            define class, dimension, tolerance, material, marking, and the
            pressure-temperature ratings that every spec sheet ultimately
            references.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            ASME B16.5: Pipe Flanges and Flanged Fittings, 1/2&quot; - 24&quot;
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            B16.5 is the standard you bump into first when working with carbon
            steel, stainless steel, and alloy flanges in process piping. It
            covers nominal pipe sizes 1/2 inch through 24 inches in seven
            pressure classes and four common face types.
          </p>

          <h3 className="text-xl font-bold text-[#1B1F23] mb-3 mt-8">
            Pressure Classes
          </h3>
          <ul className="text-gray-700 leading-relaxed space-y-2 mb-6">
            <li>
              <strong>Class 150</strong> - the workhorse for moderate-pressure
              service. Roughly 285 psi at ambient with Group 1.1 materials,
              derating as temperature climbs.
            </li>
            <li>
              <strong>Class 300</strong> - the next step up, common on steam
              and hot hydrocarbon lines.
            </li>
            <li>
              <strong>Class 600</strong> - higher pressure process service,
              including many refinery applications.
            </li>
            <li>
              <strong>Class 900</strong> - high-pressure service, often
              specified for steam and chemical work.
            </li>
            <li>
              <strong>Class 1500</strong> - severe service. Compact, heavy,
              expensive.
            </li>
            <li>
              <strong>Class 2500</strong> - the top of the B16.5 range. Beyond
              this you move into API 6A territory.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#1B1F23] mb-3 mt-8">
            Face Types
          </h3>
          <ul className="text-gray-700 leading-relaxed space-y-2 mb-6">
            <li>
              <strong>Raised Face (RF)</strong> - the default for most process
              piping. Concentrated gasket load.
            </li>
            <li>
              <strong>Flat Face (FF)</strong> - used when bolting to a brittle
              flange (cast iron) where bending the cast flange must be avoided.
            </li>
            <li>
              <strong>Ring Type Joint (RTJ)</strong> - metallic ring gasket in a
              machined groove. Used on high-pressure and high-temperature
              service.
            </li>
            <li>
              <strong>Tongue and Groove / Male and Female</strong> - less
              common, used where gasket retention matters.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed max-w-3xl">
            See the{" "}
            <a
              href="https://www.texasflange.com/blog/the-complete-guide-to-flanges/?ref=pipingflange-new"
              className="text-[#B45309] underline"
              target="_blank"
              rel="noopener"
            >
              Complete Guide to Flanges
            </a>{" "}
            for face-finish callouts and gasket selection guidance.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ASME B16.47: Large Diameter Flanges, 26&quot; - 60&quot;
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            B16.47 picks up where B16.5 stops. It covers nominal sizes 26
            inches through 60 inches, but unlike B16.5 it offers two distinct
            series with different bolt patterns. The series you specify
            matters as much as the class.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#2A2F35] p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-3">Series A</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-3">
                Derived from the older <strong>MSS SP-44</strong> standard for
                steel pipeline flanges. Series A flanges are heavier overall,
                with fewer but larger-diameter bolts on a wider bolt circle.
                Designed to handle higher bolt loads and the bending forces
                seen on large transmission pipelines.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Common where pipeline operators and process plants need extra
                margin on large lines.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-3">Series B</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-3">
                Derived from the older <strong>API 605</strong> standard.
                Series B flanges are lighter, with more bolts of smaller
                diameter on a tighter bolt circle. The geometry favors
                compactness and reduced material cost where the application
                allows.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Common on process vessels and applications where weight and
                outside dimensions matter.
              </p>
            </div>
          </div>

          <div className="bg-[#B45309] bg-opacity-20 border-l-4 border-[#B45309] p-6 mt-8">
            <p className="text-white font-semibold mb-2">
              Series A and Series B are not interchangeable.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              A 36-inch Class 300 Series A flange has a different bolt circle,
              different bolt count, and different OD than a 36-inch Class 300
              Series B flange. Mating them is not possible without a transition
              piece. Always confirm the series on the spec sheet, the
              requisition, and the mill cert before the flange ships.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            Materials We Commonly Supply
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            B16.5 and B16.47 cover dimensional requirements. The material
            specification governs chemistry and mechanical properties. The
            combination is what gives you a final pressure-temperature rating.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Carbon Steel</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A105 (forged), A350 LF2 (low-temp impact tested), A516-70
                (plate origin for blinds and large diameter). See{" "}
                <Link
                  href="/materials/carbon-steel"
                  className="text-[#B45309] underline"
                >
                  carbon steel materials
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Stainless Steel</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                F304 / 304L and F316 / 316L are the everyday austenitics. F321,
                F347, and duplex grades for specific service. See{" "}
                <Link
                  href="/materials/stainless-steel"
                  className="text-[#B45309] underline"
                >
                  stainless steel materials
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Alloy Steel</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                F11 (1.25Cr-0.5Mo), F22 (2.25Cr-1Mo), F91 (9Cr-1Mo-V) for
                elevated temperature service. See{" "}
                <Link
                  href="/materials/alloy-steel"
                  className="text-[#B45309] underline"
                >
                  alloy steel materials
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Line Pipe Grades</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A694 F42, F52, F60, F65, and F70 for pipeline service that
                requires matched yield with the connecting pipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Common Applications
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            B16.5 shows up everywhere process piping does: refineries,
            petrochemical plants, gas processing, power generation, chemical
            production, pulp and paper, and food and beverage. B16.47 takes
            over on large-bore transmission, separator vessels, large
            heat-exchanger nozzles, and oversized process headers. If the line
            is over 24 inches, B16.47 is almost always the right reference.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need ASME Flanges for Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We carry B16.5 through 24 inches and source B16.47 in both series
            from the size and class that matches your spec. Send the line list
            and we will confirm material, class, and face finish on every
            line item.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#B45309] px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              Call (281) 484-8325
            </a>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#B45309]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
