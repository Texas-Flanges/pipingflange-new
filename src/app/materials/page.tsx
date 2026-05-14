import Link from "next/link";

export const metadata = {
  title: "Flange & Fitting Materials | Carbon, Stainless, Alloy, Exotic | Texas Flange",
  description:
    "50+ material grades stocked and sourced for the full pressure spectrum. Carbon steel A105 and A694, stainless 304/316, chrome-moly F11/F22/F91, and exotic alloys including Inconel, Monel, Hastelloy, and duplex.",
};

export default function MaterialsHubPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Materials Catalog
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            50+ Material Grades. One Source.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            From waterworks-grade A36 plate through API-spec A694 high yield
            and the nickel alloys that handle sour service and aggressive
            chemistry, Texas Flange stocks and sources the full material
            spectrum required by modern piping systems. One distributor,
            mill-certified inventory, and the documentation your QA team
            actually wants to see.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            The Four Families We Carry
          </h2>
          <p className="text-lg leading-relaxed mb-10 text-[#1B1F23]">
            Material selection drives pressure rating, temperature limits,
            corrosion life, and welding procedure. Every flange and fitting
            we supply falls into one of four families. Pick the right family
            first, then narrow to a grade.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/materials/carbon-steel"
              className="block bg-white border border-gray-200 p-8 hover:border-[#B45309] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Carbon Steel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A105 forged flanges, A350 LF2 and LF3 for low temperature,
                A516-70 plate, and the full A694 high yield range from F42
                through F70 for transmission pipeline service.
              </p>
            </Link>
            <Link
              href="/materials/stainless-steel"
              className="block bg-white border border-gray-200 p-8 hover:border-[#B45309] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Stainless Steel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Austenitic F304/304L and F316/316L are the workhorses.
                F321 handles elevated temperature where chromium carbide
                precipitation is a concern. All to ASTM A182.
              </p>
            </Link>
            <Link
              href="/materials/alloy-steel"
              className="block bg-white border border-gray-200 p-8 hover:border-[#B45309] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Alloy Steel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Chrome-moly grades F11, F22, and F91 for elevated temperature
                creep resistance and hydrogen service. Plus low temperature
                LF grades when impact testing is required.
              </p>
            </Link>
            <Link
              href="/materials/exotic-alloys"
              className="block bg-white border border-gray-200 p-8 hover:border-[#B45309] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Exotic Alloys
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hastelloy C276 and C22, Inconel 625, Monel 400, Incoloy 825,
                duplex 2205 and super duplex 2507, plus titanium and copper
                alloys for the jobs nothing else survives.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            A Framework For Picking The Right Material
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Most material disputes on a project come from skipping one of
            four questions. Walk through them in order and the spec sheet
            usually writes itself.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                1. What is the design pressure and temperature?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                ASME B16.5 pressure-temperature tables drop sharply with
                temperature. A105 derates fast above 500F. F22 holds rating
                up around 1000F. A694 high yield earns its Class 600 and
                above ratings through heat treatment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                2. What is the fluid and how corrosive is it?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Chlorides push you to 316L minimum and often to duplex.
                Wet sour service triggers NACE MR0175 hardness limits.
                Hydrofluoric acid alky service is Monel territory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                3. What code governs the system?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                ASME B31.3 process piping, B31.1 power, B31.4 liquid
                pipelines, B31.8 gas transmission, and AWWA for water all
                impose their own material rules. The code chooses the spec
                before you do.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                4. What is the minimum design metal temperature?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A105 is good to roughly -20F without supplementary impact
                testing. LF2 takes you to -50F, LF3 to -150F, and austenitic
                stainless covers cryogenic without a second thought.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Domestic Versus Import
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Buy America, Buy American, BAA, and project-specific domestic
            clauses are not the same rule. We carry both domestic
            melt-and-manufacture material and import material with full
            mill test reports, and we keep the documentation trail clean
            so your inspector can sign off without a second visit.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            For a deeper read on the difference between the various domestic
            content rules, see our reference page on{" "}
            <Link
              href="/resources"
              className="text-[#B45309] underline hover:no-underline"
            >
              domestic versus import sourcing
            </Link>{" "}
            in the resources library.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Not Sure Which Grade You Need?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send us the line spec, the service conditions, or just the
            drawing. We will come back with a material recommendation and
            a quote, usually the same business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12814848325"
              className="bg-white text-[#B45309] px-8 py-3 font-semibold hover:bg-gray-100"
            >
              Call (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#B45309]"
            >
              Email sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
