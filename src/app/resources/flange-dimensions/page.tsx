import Link from "next/link";

export const metadata = {
  title: "Flange Dimensions Reference | Texas Flange",
  description:
    "Dimensional reference for ASME B16.5, B16.47, AWWA C207, and API 6BX flanges. OD, bolt circle, bolt count, hub projection, and raised face callouts with common specification gotchas.",
};

export default function FlangeDimensionsPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Resources / Flange Dimensions
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Flange Dimensions Reference
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            A flange is a stack of dimensions. Get any one of them wrong and
            the joint either will not bolt up or will not seal. The pages of
            ASME B16.5 and the parallel tables in B16.47, AWWA C207, and API 6A
            exist to give every supplier and every fabricator the same numbers
            for the same part. Below is an orientation to what those tables
            contain and the specification traps that catch first-time buyers.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            What a Dimension Table Contains
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every standardized flange table presents the same family of
            dimensions, even when the standard itself is written for a
            different pressure regime. Outside diameter sets the physical
            footprint of the flange and determines whether the part will clear
            adjacent piping, supports, and equipment nozzles. Bolt circle
            diameter dictates where the studs land relative to that outside
            diameter and is the single most common interchange criterion when
            an engineer is checking whether an AWWA C207 Class D flange will
            bolt up to an ANSI B16.1 Class 125 mating part.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bolt count and bolt hole diameter combine with bolt circle to
            define the bolting pattern. The bolt holes are straddle drilled,
            meaning they sit symmetrically across the principal horizontal and
            vertical centerlines of the flange face. Hub dimensions cover
            length through hub, hub diameter at the base, hub diameter at the
            point of welding, and the small end bore that matches the pipe
            schedule the flange will be welded to. Raised face dimensions add
            face height above the back of the flange and face diameter, both
            of which the gasket selection depends on directly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For ring joint flanges the raised face is replaced by an octagonal
            or oval groove machined into the face. The groove number, groove
            mean diameter, groove width, and groove depth all come straight
            from the API or ASME tables and must match the ring gasket
            geometry on both sides of the joint.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ASME B16.5 Class 150 and Class 300 - Common Sizes
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            The figures below are illustrative for orientation purposes only.
            For working dimensions use the live tables in our dimension
            calculator or the published standard.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Class 150 Weld Neck
              </h3>
              <table className="w-full text-sm text-gray-300">
                <thead className="border-b border-gray-600">
                  <tr>
                    <th className="text-left py-2">Size</th>
                    <th className="text-left py-2">OD</th>
                    <th className="text-left py-2">BC</th>
                    <th className="text-left py-2">Bolts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2">4 in</td><td>9.00</td><td>7.50</td><td>8 x 3/4</td></tr>
                  <tr><td className="py-2">6 in</td><td>11.00</td><td>9.50</td><td>8 x 7/8</td></tr>
                  <tr><td className="py-2">8 in</td><td>13.50</td><td>11.75</td><td>8 x 7/8</td></tr>
                  <tr><td className="py-2">12 in</td><td>19.00</td><td>17.00</td><td>12 x 7/8</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Class 300 Weld Neck
              </h3>
              <table className="w-full text-sm text-gray-300">
                <thead className="border-b border-gray-600">
                  <tr>
                    <th className="text-left py-2">Size</th>
                    <th className="text-left py-2">OD</th>
                    <th className="text-left py-2">BC</th>
                    <th className="text-left py-2">Bolts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2">4 in</td><td>10.00</td><td>7.88</td><td>8 x 7/8</td></tr>
                  <tr><td className="py-2">6 in</td><td>12.50</td><td>10.62</td><td>12 x 7/8</td></tr>
                  <tr><td className="py-2">8 in</td><td>15.00</td><td>13.00</td><td>12 x 1</td></tr>
                  <tr><td className="py-2">12 in</td><td>20.50</td><td>17.75</td><td>16 x 1-1/4</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            AWWA C207 Waterworks Dimensions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            AWWA C207 covers steel flanges for waterworks service and is
            written for the lighter pressures typical of municipal water
            distribution and treatment. The Class B, D, E, and F families
            top out around 86, 175, 275, and 300 PSI cold working pressure
            respectively. The dimensional importance is that Class D shares
            its outside diameter, bolt circle, bolt count, and bolt hole size
            with ANSI B16.1 Class 125 cast iron and with the ANSI B16.5
            Class 150 pattern in most sizes. That dimensional compatibility is
            why an AWWA flanged butterfly valve can be bolted to a Class 150
            steel pipe flange in the field.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What does not transfer is the working pressure. A Class B flange
            at 86 PSI looks identical to a Class 125 cast iron flange from the
            bolt side, but it is not rated for the same service. Always confirm
            the class stamping and the project specification before assuming
            interchangeability.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            API 6BX Ring Joint Callouts
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            API 6BX flanges run from 2,000 PSI through 20,000 PSI working
            pressure for wellhead and surface equipment service. The
            dimensional set adds an octagonal RTJ groove machined into a
            recessed face. The groove is specified by its R-number, which
            indexes into a table of mean diameter, width, and depth values.
            R-26 through R-90 covers most flange sizes in the 6BX family. The
            ring gasket number must match exactly on both sides of the joint
            or the metal-to-metal seal will not form.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Pressure energized ring gaskets such as the BX series rely on the
            groove geometry to seat the ring against the trapezoidal walls of
            the groove. A worn or damaged groove will leak even with a new
            gasket installed at the correct torque.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Specification Gotchas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Class 600 and higher raised face flanges have a 1/4 inch raised
            face by default. Class 150 and 300 have a 1/16 inch raised face.
            When that detail is missed, the bolt length and gasket compression
            calculations both come out wrong. Check the standard or our
            dimension calculator before ordering studs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            ASME B16.47 Series A and Series B cover large diameter flanges
            from NPS 26 through NPS 60 but use different dimensional patterns.
            Series A is the heavier MSS SP-44 derived pattern. Series B is
            lighter and comes from API 605. The two are not interchangeable in
            either bolt pattern or outside diameter. The bid document must
            call out the series.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lightweight Class 125LW flanges intended for valve bodies and pump
            casings share the bolt pattern with Class 150 but are dimensionally
            lighter through the hub and face. They are not rated for the same
            piping service and should not be substituted without engineering
            review.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Working Tools and Drawings
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            For a full dimensional lookup with any size and class combination,
            use our calculator. For PDF and CAD drawings of the specific
            flange you need, see the CAD drawings page or the legacy drawing
            library on texasflange.com.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tools/flange-dimension-calculator"
              className="inline-block bg-[#B45309] text-white px-6 py-3 font-semibold hover:bg-[#92400e] transition"
            >
              Dimension Calculator
            </Link>
            <Link
              href="/resources/cad-drawings"
              className="inline-block border border-[#B45309] text-[#B45309] px-6 py-3 font-semibold hover:bg-[#B45309] hover:text-white transition"
            >
              CAD Drawings
            </Link>
            <a
              href="https://www.texasflange.com/flange-drawings-models2/blind/?ref=pipingflange-new"
              className="inline-block border border-gray-500 text-gray-300 px-6 py-3 font-semibold hover:bg-gray-700 transition"
            >
              Blind Flange Drawings
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Dimension Confirmed?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the size,
            class, and facing. We will confirm against our stock and send the
            dimensional drawing for review.
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
