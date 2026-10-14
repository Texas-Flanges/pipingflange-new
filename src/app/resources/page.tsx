import CtaBand from "@/components/CtaBand";
import Link from "next/link";

export const metadata = {
  title: "Engineering Reference & Resources",
  description:
    "Technical resources for piping flange specification: dimensional tables, CAD drawings, domestic vs import guidance, and pressure rating references from 86 PSI AWWA through 20K API.",
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#FDBA74] text-sm mb-3">
            Resources
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Engineering Reference
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Specifying flanges across the full pressure spectrum, from 86 PSI
            AWWA waterworks fittings up through 20,000 PSI API 6BX wellhead
            connections, demands more than a parts catalog. The references
            collected here cover the material used when reviewing bid packages,
            validating MTRs, and helping engineers confirm that what they drew
            matches a standard part.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-10">
            Reference Library
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/resources/flange-dimensions"
              className="block bg-white p-8 border-l-4 border-[#B45309] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Flange Dimensions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Outside diameter, bolt circle, bolt count, bolt hole size, hub
                projection, and raised face callouts for ASME B16.5, B16.47,
                AWWA C207, and API 6BX flanges. Illustrative tables and notes
                on the dimensional gotchas that trip up first-time specifiers.
              </p>
            </Link>
            <Link
              href="/resources/cad-drawings"
              className="block bg-white p-8 border-l-4 border-[#B45309] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                CAD Drawings
              </h3>
              <p className="text-gray-700 leading-relaxed">
                2D drawings in DWG, DXF, and PDF formats and 3D models in STEP
                and IGES for weld neck, slip-on, blind, threaded, socket weld,
                lap joint, and RTJ flanges across the standard pressure classes.
                How to request a specific size, class, and facing.
              </p>
            </Link>
            <Link
              href="/resources/domestic-vs-import"
              className="block bg-white p-8 border-l-4 border-[#B45309] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Domestic vs Import
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buy American, ARRA, and BABA compliance walked through in plain
                language, along with the API product specification levels from
                PSL-1 to PSL-4. When melt origin is contractually binding and
                how to specify it on your quote request.
              </p>
            </Link>
            <Link
              href="/resources/technical-specs"
              className="block bg-white p-8 border-l-4 border-[#B45309] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Technical Specs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What a complete flange spec sheet looks like, ASME class to DIN
                PN equivalents, pressure-temperature derating concepts, bolt
                material selection between B7 and B7M, and gasket compatibility
                notes for raised face and ring joint geometries.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Calculation Tools
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            The reference pages above explain what the numbers mean. The tools
            section gives you a working interface to pull dimensions and
            calculate torque values without opening a PDF. Each calculator is
            built around the published standards.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link
              href="/tools/bolt-torque-calculator"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Bolt Torque Calculator
              </h3>
              <p className="text-sm text-gray-400">
                Stud diameter, lubrication factor, and target preload to
                ft-lbs.
              </p>
            </Link>
            <Link
              href="/tools/flange-dimension-calculator"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Flange Dimension Calculator
              </h3>
              <p className="text-sm text-gray-400">
                Size, class, and facing lookup with full dimensional output.
              </p>
            </Link>
          </div>
          <Link
            href="/tools"
            className="inline-block border border-[#B45309] text-[#FDBA74] px-6 py-3 font-semibold hover:bg-[#B45309] hover:text-white transition"
          >
            View All Tools
          </Link>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Long-Form Technical Articles
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            The texasflange.com site hosts a deeper library of
            articles written for engineers, procurement specialists, and field
            crews. The pieces below are the ones most often referenced from
            this site.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://texasflange.com/blog/pipe-flange-pressure-classes-per-asme-b16-5/?ref=pipingflange"
              className="block bg-white p-6 border-l-4 border-[#B45309] hover:shadow-md transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Understanding Flange Pressure Classes
              </h3>
              <p className="text-sm text-gray-600">
                Class 150 through Class 2500 and why class is not the same as
                working pressure.
              </p>
            </a>
            <a
              href="https://texasflange.com/blog/raised-face-vs-flat-face-flange/?ref=pipingflange"
              className="block bg-white p-6 border-l-4 border-[#B45309] hover:shadow-md transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Raised Face vs Flat Face
              </h3>
              <p className="text-sm text-gray-600">
                When to specify each facing and the consequences of mixing
                them.
              </p>
            </a>
            <a
              href="https://texasflange.com/blog/slip-on-vs-weld-neck-flanges-which-one-should-you-choose/?ref=pipingflange"
              className="block bg-white p-6 border-l-4 border-[#B45309] hover:shadow-md transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Weld Neck vs Slip-On Flanges
              </h3>
              <p className="text-sm text-gray-600">
                Cost, installation, and pressure cycling considerations.
              </p>
            </a>
            <a
              href="https://texasflange.com/products/flange-dims-weights/awwa-c207-flanges/?ref=pipingflange"
              className="block bg-white p-6 border-l-4 border-[#B45309] hover:shadow-md transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                AWWA C207 Waterworks Flanges
              </h3>
              <p className="text-sm text-gray-600">
                Class B, D, E, and F flanges for municipal and water treatment
                service.
              </p>
            </a>
            <a
              href="https://texasflange.com/products/flange-dims-weights/api-flange-slide-rule/?ref=pipingflange"
              className="block bg-white p-6 border-l-4 border-[#B45309] hover:shadow-md transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                API 6A Wellhead Flanges
              </h3>
              <p className="text-sm text-gray-600">
                6B and 6BX flanges from 2,000 PSI through 20,000 PSI working
                pressure.
              </p>
            </a>
            <a
              href="https://texasflange.com/blog/the-blueprint-of-quality-how-to-read-a-flange-mill-test-report-mtr/?ref=pipingflange"
              className="block bg-white p-6 border-l-4 border-[#B45309] hover:shadow-md transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Reading an MTR
              </h3>
              <p className="text-sm text-gray-600">
                Material test reports, heat numbers, and chain of custody for
                regulated projects.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            How to Use These Resources
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            For a one-off specification check, the dimension and tech spec
            pages will usually answer the question directly. For active bid
            work, pull the CAD drawings you need, run the relevant calculator,
            and confirm domestic versus import requirements before you send
            the RFQ.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
