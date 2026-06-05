import Link from "next/link";

export const metadata = {
  title: "Flanges | Class 125LW to API 6BX 20K | Texas Flange Supply",
  description:
    "The full flange catalog from one supplier. Weld neck, slip-on, blind, threaded, socket weld, lap joint, RTJ, and more. ASME B16.5, B16.47, AWWA C207, API 6A, and API 6BX from 86 PSI to 20,000 PSI.",
};

function TypeCard({ name, blurb }: { name: string; blurb: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6">
      <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">{name}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{blurb}</p>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-gray-700 py-3">
      <span className="text-gray-300">{label}</span>
      <span className="text-white font-semibold text-right">{value}</span>
    </div>
  );
}

export default function FlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Flanges</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Every Flange Type. Every Pressure Class.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Class 125LW for 86 psi waterworks. ASME B16.5 process flanges from 150 through 2500.
            ASME B16.47 Series A and B for large diameter. API 6A and API 6BX wellhead service all
            the way to 20,000 psi. The standards reference covers the full pressure range; Texas
            Flange supplies into projects across it.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Catalog</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">Every Flange Type</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            The twelve flange types below cover roughly 95 percent of what shows up on a piping
            isometric. The other 5 percent is custom, covered on the{" "}
            <Link href="/products/custom-machining" className="text-[#B45309] underline">
              custom machining
            </Link>{" "}
            page.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <TypeCard
              name="Weld Neck"
              blurb="The workhorse for high pressure, high temperature, and cyclic service. Long tapered hub transfers stress from the flange ring into the pipe wall. Specified for most process and pipeline work."
            />
            <TypeCard
              name="Slip-On"
              blurb="Slides over the pipe and fillet welds on both sides. Lower cost than weld neck, easier alignment, but lower fatigue rating. Common on utility and lower-pressure process lines."
            />
            <TypeCard
              name="Blind"
              blurb="Solid flange used to close the end of a pipe, valve, or vessel nozzle. Frequently drilled and machined later for instrumentation. Stocked in all standard classes and materials."
            />
            <TypeCard
              name="Threaded"
              blurb="NPT threaded bore for piping that cannot be welded. Common on small bore utility lines, instrument connections, and certain hazardous-area piping where welding is restricted."
            />
            <TypeCard
              name="Socket Weld"
              blurb="Pipe drops into a counterbore and is fillet welded on the outside. Used on small bore high-pressure lines typically 2 inch and below. Sized to ASME B16.5."
            />
            <TypeCard
              name="Lap Joint"
              blurb="Used with a stub end so the flange can rotate for bolt-hole alignment. Common in stainless and exotic alloy systems where the flange itself can be carbon to save cost."
            />
            <TypeCard
              name="Reducing"
              blurb="Single flange that reduces from one size to another without an additional reducer fitting. Useful when space is tight or schedule is critical."
            />
            <TypeCard
              name="Orifice"
              blurb="Paired flanges with tapped pressure connections for orifice plate flow measurement. Stocked in weld neck and slip-on configurations across standard classes."
            />
            <TypeCard
              name="Spectacle Blind"
              blurb="Figure-8 plate with a blind on one end and a spacer ring on the other. Pivots between positions for positive isolation during maintenance and turnarounds."
            />
            <TypeCard
              name="Long Weld Neck"
              blurb="Extended neck used as a nozzle on pressure vessels and column trays. Bored to match vessel wall thickness rather than standard pipe schedule."
            />
            <TypeCard
              name="Plate"
              blurb="Flat plate flange machined from rolled plate. Cost-effective for large-diameter, lower-pressure service such as water and HVAC distribution."
            />
            <TypeCard
              name="Ring-Type Joint"
              blurb="RTJ facing with metal ring gasket for high-pressure and high-temperature sealing. Standard on API 6A wellhead components and many B16.5 Class 900 and above applications."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Lightweight Families</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Two Separate Lightweight Standards
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            Lightweight steel flanges live in two distinct standard families that are frequently
            confused. ASME B16.1 Class 125LW is a lightweight steel flange built to the B16.1
            cast-iron dimensional pattern for bolt-up to legacy cast-iron systems. AWWA C207 is a
            separate waterworks specification with its own pressure classes (B, D, E, F) and its
            own dimensional rules. They are not the same standard and they are not interchangeable
            on every fit.
          </p>

          <h3 className="text-2xl font-display font-bold text-white mb-4 mt-6">
            ASME B16.1 Class 125LW
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            The lightweight (LW) variant of the B16.1 cast-iron flange family, produced in steel
            instead of cast iron. Same outside diameter, bolt circle, and bolt hole pattern as
            B16.1 Class 125 cast iron, which is the point: it bolts directly to legacy cast-iron
            valves, pumps, and existing flanges without an adapter. Common on retrofit waterworks
            and HVAC distribution where the mating component is cast iron.
          </p>

          <h3 className="text-2xl font-display font-bold text-white mb-4 mt-10">
            AWWA C207 Steel Pipe Flanges
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-8">
            The dedicated waterworks specification for steel ring and hub flanges from 4 inch up
            through 144 inch. AWWA organizes pressure into lettered classes rather than the ASME
            pound-class system. Drilling on Class B, D, and E up through 24 inch matches B16.1
            Class 125, which is why C207 ties into 125LW retrofit work, but the underlying
            standard is independent.
          </p>

          <div className="bg-[#0F1316] border border-gray-700 p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              AWWA C207 Pressure Ratings
            </h3>
            <SpecRow label="Class B - 4 in to 144 in" value="86 psi" />
            <SpecRow label="Class D (12 in and smaller)" value="175 psi" />
            <SpecRow label="Class D (larger than 12 in)" value="150 psi" />
            <SpecRow label="Class E - 4 in to 144 in" value="275 psi" />
            <SpecRow label="Class F - 4 in to 144 in" value="300 psi" />
          </div>
          <p className="text-gray-300 leading-relaxed max-w-3xl mt-8">
            Above 24 inch and for Class F, drilling should be confirmed before ordering since the
            B16.1 alignment no longer holds. The full AWWA C207 reference, including stainless
            counterpart C228, is on the{" "}
            <Link href="/standards/awwa-flanges" className="text-[#B45309] underline">
              AWWA flanges page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Process</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            ASME B16.5 and B16.47
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            The two standards that cover the bulk of refinery, petrochemical, midstream, and
            general process piping. B16.5 handles 1/2 inch through 24 inch. B16.47 picks up at 26
            inch and runs through 60 inch in Series A and Series B, each with its own dimensional
            family.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                ASME B16.5 - 1/2 in through 24 in
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pressure classes 150, 300, 400, 600, 900, 1500, and 2500. Standard facings include
                raised face, flat face, ring-type joint, and tongue-and-groove. Materials from A105
                carbon up through stainless, low-temp, and chrome-moly alloy steels.
              </p>
              <Link
                href="/standards/asme-flanges"
                className="text-[#B45309] font-semibold text-sm"
              >
                B16.5 reference -&gt;
              </Link>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                ASME B16.47 - 26 in through 60 in
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Series A (formerly MSS SP-44) and Series B (formerly API 605) cover large
                diameter. Different outside diameters and bolt patterns between the two, so always
                confirm which series the line was originally designed to.
              </p>
              <Link
                href="/standards/asme-flanges"
                className="text-[#B45309] font-semibold text-sm"
              >
                B16.47 reference -&gt;
              </Link>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-8 max-w-3xl">
            Pressure-temperature ratings drop as temperature rises. As a typical example from
            ASME B16.5 Table 2, a Group 1.1 Class 300 carbon steel flange rated at 740 psi at
            ambient derates toward the mid-500 psi range by 700F. The B16.5 tables are the
            source of truth; class alone never equals working pressure once temperature is in
            the equation. Texas Flange can provide the rating curves on request.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">High Pressure</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">API 6A and API 6BX</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            Wellhead service, BOP stacks, choke and kill manifolds, and surface production
            equipment. The 6A specification covers everything from 2,000 psi working pressure
            through 20,000 psi, with the 6BX dimensional family taking over at the higher
            pressure tiers where the standard 6B geometry runs out of safety margin.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F1316] border border-gray-700 p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4">Working Pressure</h3>
              <SpecRow label="2,000 psi (2K)" value="6B" />
              <SpecRow label="3,000 psi (3K)" value="6B" />
              <SpecRow label="5,000 psi (5K)" value="6B" />
              <SpecRow label="10,000 psi (10K)" value="6BX" />
              <SpecRow label="15,000 psi (15K)" value="6BX" />
              <SpecRow label="20,000 psi (20K)" value="6BX" />
            </div>
            <div className="bg-[#0F1316] border border-gray-700 p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Product Specification Levels PSL-1 through PSL-4, with PSL-3 and PSL-4 carrying
                additional NDE and impact testing requirements. NACE MR0175 / ISO 15156 compliance
                for sour service.
              </p>
              <p className="text-gray-300 leading-relaxed">
                RTJ facings only. Ring gaskets are typically BX style on 6BX and R style on 6B.
                Mixing them up is a bad day for everyone involved.
              </p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mt-8 max-w-3xl">
            API 605 is the older large-diameter specification still referenced on some legacy
            projects. It is now folded into ASME B16.47 Series B for new construction, though
            we still see 605 callouts on replacement parts for older facilities.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Materials</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            Specifications and Materials
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            Material selection drives more headaches than dimensional selection. The list below
            covers the bulk of what appears on industrial line lists. Less common grades are
            covered on the individual material reference pages.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Carbon and Low Temp
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>A105</strong> - standard carbon for ambient and moderate temperature.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>A350 LF2</strong> - low-temperature carbon, impact tested to -50 F.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>A694 F52 through F70</strong> - high-yield pipeline grades for transmission
                service.
              </p>
              <Link
                href="/materials/carbon-steel"
                className="text-[#B45309] font-semibold text-sm"
              >
                Carbon steel detail -&gt;
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">Stainless</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F304 / F304L</strong> - general-purpose austenitic stainless.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F316 / F316L</strong> - molybdenum-bearing for improved chloride
                resistance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>F321, F347</strong> - stabilized grades for elevated temperature.
              </p>
              <Link
                href="/materials/stainless-steel"
                className="text-[#B45309] font-semibold text-sm"
              >
                Stainless detail -&gt;
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">Alloy</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F11 (1-1/4 Cr)</strong> - moderate elevated temperature service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F22 (2-1/4 Cr)</strong> - hydrogen and high-temp service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>F91 (9 Cr)</strong> - high-pressure steam and power generation.
              </p>
              <Link
                href="/materials/alloy-steel"
                className="text-[#B45309] font-semibold text-sm"
              >
                Alloy steel detail -&gt;
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">Exotic</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Duplex 2205, Super Duplex 2507</strong> - offshore and sour service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Inconel 625, 825</strong> - high-temperature corrosion resistance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Hastelloy C276, Monel 400, Titanium Gr 2</strong> - specialty service.
              </p>
              <Link
                href="/materials/exotic-alloys"
                className="text-[#B45309] font-semibold text-sm"
              >
                Exotic alloys detail -&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Technical Resources
          </p>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Read Before You Specify
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">
            Reference content from the Texas Flange technical library. Useful when reviewing a
            line list or when the standard in question is not the one you specify every day.
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.texasflange.com/blog/the-complete-guide-to-flanges/?ref=pipingflange-new"
                className="text-[#B45309] underline"
                target="_blank"
                rel="noopener"
              >
                The Complete Guide to Flanges
              </a>
              <span className="text-gray-300"> - types, facings, ratings, and selection logic.</span>
            </li>
            <li>
              <Link href="/standards/awwa-flanges" className="text-[#B45309] underline">
                AWWA C207 Reference
              </Link>
              <span className="text-gray-300"> - lightweight pressure classes and drilling.</span>
            </li>
            <li>
              <Link href="/standards/asme-flanges" className="text-[#B45309] underline">
                ASME B16.5 / B16.47 Reference
              </Link>
              <span className="text-gray-300"> - dimensions, facings, and material groups.</span>
            </li>
            <li>
              <Link href="/tools" className="text-[#B45309] underline">
                Pressure-Temperature Calculator
              </Link>
              <span className="text-gray-300"> - find the derated pressure at your service temp.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Send the Line List
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Email a BOM, an isometric, or a take-off to{" "}
            <a href="mailto:sales@texasflange.com" className="underline">Texas Flange</a>{" "}
            for pricing against current stock and confirmed lead times on mill-ship items.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#B45309] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="mailto:sales@texasflange.com"
              className="inline-block border border-white text-white font-semibold px-8 py-3 hover:bg-white hover:text-[#B45309] transition-colors"
            >
              sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
