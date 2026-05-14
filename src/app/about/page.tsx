import Link from "next/link";

export const metadata = {
  title: "About This Resource",
  description: "About the Piping Flange resource. The full-spectrum pipe flange reference and supply source built around the work of Texas Flange & Fitting Supply."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">About This Resource</p>
          <h1 className="text-5xl font-display font-bold mb-6 text-white">A Reference for the Full Pressure Spectrum</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Most flange references are built around one end of the curve. This one is not. It exists
            because engineers, buyers, and procurement teams shouldn't have to chase three vendors and
            three reference sites to spec out a complete piping system.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto prose-content">
          <h2 className="text-3xl font-display font-bold mb-6 text-ink">Why This Site Exists</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Piping systems do not live on one pressure class. A petrochemical plant might run cooling
            water through Class 125LW lightweight flanges on the intake, ASME B16.5 Class 300 through
            the process loop, and API 6BX at the wellhead feeding the unit. Different specs, different
            documentation, often different vendors. The result is procurement complexity that costs
            more than the flanges themselves.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This resource was built to flatten that. Specs for lightweight AWWA service sit alongside
            specs for API wellhead service. Material guides for A105 carbon sit alongside guides for
            Inconel and Hastelloy. Sourcing comes from a single point. Documentation matches.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">What You Can Find Here</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Reference content for every major flange standard in commercial use:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>ASME B16.5 and B16.47 for general industrial process</li>
            <li>AWWA C207 and ANSI B16.1 for waterworks and lightweight service</li>
            <li>API 6A and 6BX for wellhead and high-pressure oil and gas</li>
            <li>DIN and EN 1092-1 for European metric specs</li>
            <li>MSS SP-44 for high yield carbon (X42 through X70 mating)</li>
            <li>NACE MR0175 material restrictions for sour service</li>
          </ul>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">Who Is Behind It</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The supply side of this resource is Texas Flange &amp; Fitting Supply, a Houston-area
            flange and fitting source that has been shipping into oil and gas, waterworks, power,
            petrochemical, and general manufacturing since 1986. The content here draws on that
            history, the engineering work that goes into every quote, and the technical questions
            that come in by phone every week.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            What that means in practice: the information here was not pulled from a textbook. It was
            pulled from the work of actually getting flanges to job sites with the right paperwork
            and the right metallurgy.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">How To Use It</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            If you are speccing flanges, the <Link href="/standards" className="text-[#B45309] font-semibold">Standards</Link> and
            {" "}<Link href="/materials" className="text-[#B45309] font-semibold">Materials</Link> sections will help you cross-reference
            class to pressure to material. If you are looking at a specific application, the
            {" "}<Link href="/industries" className="text-[#B45309] font-semibold">Industries</Link> pages map common flange selections
            to common service conditions. If you need actual dimensions, the
            {" "}<Link href="/tools" className="text-[#B45309] font-semibold">Tools</Link> section has calculators for bolt torque,
            flange dimensions, and pressure-temperature lookup.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you are ready to source, the contact info is right there. No web forms that route
            into a void.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Ready to Talk Flanges?</h2>
          <p className="text-lg text-white/90 mb-6">
            The supply team is one phone call away.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#B45309] px-8 py-3 rounded font-bold hover:bg-cream transition">
              Request a Quote
            </Link>
            <a href="tel:+12814848325" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#B45309] transition">
              (281) 484-8325
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
