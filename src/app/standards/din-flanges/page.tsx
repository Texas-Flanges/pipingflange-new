import Link from "next/link";

export const metadata = {
  title: "DIN / EN 1092-1 Flanges | PN Ratings and Type Reference | Texas Flange",
  description:
    "DIN and EN 1092-1 flange reference. PN 6 through PN 400 pressure ratings, Type 01 through Type 05 configurations, European material grades, and rough comparison to ASME pressure classes.",
};

export default function DinFlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            DIN and EN 1092-1 Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            When the project documents come in metric and the pressure class
            is written as PN, you are in EN 1092-1 territory. This is the
            European standard for steel pipe flanges, descended from the older
            DIN series. It uses Pressure Nominal (PN) ratings, metric
            dimensions, and a numbered type system that maps cleanly to the
            usual flange configurations.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            PN Pressure Ratings
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            PN stands for Pressure Nominal, expressed in bar. EN 1092-1 covers
            a wide range of pressure classes, from low-pressure utility service
            up through severe-service applications. The full set includes:
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              "PN 6",
              "PN 10",
              "PN 16",
              "PN 25",
              "PN 40",
              "PN 63",
              "PN 100",
              "PN 160",
              "PN 250",
              "PN 320",
              "PN 400",
            ].map((pn) => (
              <div
                key={pn}
                className="bg-white border border-gray-200 rounded p-4 text-center"
              >
                <p className="text-[#B45309] font-bold text-lg">{pn}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed max-w-3xl text-sm">
            Each PN rating represents nominal pressure in bar at a reference
            temperature, typically 20 degrees C. Actual allowable working
            pressure derates with temperature and material, similar to ASME
            ratings but with a different reference curve.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Rough Comparison to ASME Classes
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            PN ratings and ASME pressure classes are not directly
            interchangeable, but the rough alignment helps when a project mixes
            European and American specs. Bolt patterns, OD, and face
            dimensions do not match - this is for pressure regime only, not
            mechanical compatibility.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-[#2A2F35] border border-gray-700">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-bold">DIN / EN PN</th>
                  <th className="text-left p-4 font-bold">Rough ASME Class</th>
                  <th className="text-left p-4 font-bold">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="p-4">PN 10 / PN 16</td>
                  <td className="p-4">Class 150</td>
                  <td className="p-4">Common low-pressure overlap</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">PN 25 / PN 40</td>
                  <td className="p-4">Class 300</td>
                  <td className="p-4">Standard process service</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">PN 63 / PN 100</td>
                  <td className="p-4">Class 600</td>
                  <td className="p-4">Higher-pressure process</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">PN 160</td>
                  <td className="p-4">Class 900</td>
                  <td className="p-4">Approximate alignment</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">PN 250</td>
                  <td className="p-4">Class 1500</td>
                  <td className="p-4">Severe service</td>
                </tr>
                <tr>
                  <td className="p-4">PN 400</td>
                  <td className="p-4">Class 2500</td>
                  <td className="p-4">Top of the standard range</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed mt-6 max-w-3xl text-sm">
            Reminder: a PN 40 flange will not bolt up to a Class 300 flange.
            Bolt count, bolt circle, hole diameter, and OD are all different.
            The pressure regime aligns; the mechanical interface does not.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            EN 1092-1 Flange Types
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            EN 1092-1 numbers each flange configuration. The most common types
            you will see on European specs:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-1">
                TYPE 01
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Plate Flange (Flat)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Flat plate flange for welding to pipe. The simplest
                configuration, used at lower pressures where a hub is not
                required.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-1">
                TYPE 02
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Loose Flange with Weld Neck Collar
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Two-piece arrangement. The flange rotates freely on a collar
                welded to the pipe. Allows easy alignment of bolt holes during
                assembly.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-1">
                TYPE 04
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Loose Lap Joint Flange
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Backing flange used with a lap joint stub end. Equivalent to
                the ASME lap joint configuration. Common when the line is an
                expensive alloy and the flange can be carbon steel.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-1">
                TYPE 05
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Blind Flange
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Closes off the end of a line. Solid disc with bolt holes, no
                bore. Functionally identical to an ASME B16.5 blind.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-1">
                TYPE 11
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Weld Neck Flange
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The European weld neck. Long tapered hub welded butt-joint to
                pipe. The default for higher-pressure service. Equivalent in
                role to a B16.5 weld neck.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-1">
                TYPE 12
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Hubbed Slip-On Flange
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Hubbed slip-on configuration. The pipe slides through, the
                flange is fillet welded on both faces. Equivalent to a B16.5
                slip-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Materials per EN 1092-1
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            EN 1092-1 references European material specifications that often
            cross-reference to familiar ASTM grades. The common ones:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2A2F35] p-5 rounded">
              <h3 className="font-bold text-white mb-2">P250GH</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Carbon steel for elevated temperature service. Roughly
                analogous to ASTM A105 for many applications.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-5 rounded">
              <h3 className="font-bold text-white mb-2">P265GH</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Higher-strength carbon steel for pressure equipment. Common on
                PN 25 and above in larger sizes.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-5 rounded">
              <h3 className="font-bold text-white mb-2">16Mo3</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Molybdenum-alloyed steel for moderate elevated temperature
                service. Comparable in role to ASTM A182 F1.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-5 rounded">
              <h3 className="font-bold text-white mb-2">A105 Substitution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                On many North American projects with European spec callouts,
                ASTM A105 is accepted as an equivalent to P250GH with
                appropriate documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            When You Will See DIN / EN 1092-1
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-4">
            European engineering contractors building US projects, ISO-aligned
            facilities, equipment skids fabricated overseas, and any project
            where the line list or P&amp;ID came out of a European EPC.
            Pharmaceutical, food and beverage, and certain chemical projects
            use EN 1092-1 by default even on US soil because the upstream
            equipment was sourced from Europe.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            We source DIN and EN 1092-1 flanges in the standard PN ratings and
            type configurations to match what your spec calls for. For
            cross-spec projects with both ASME and EN piping, we will help
            confirm the right adapter or transition strategy.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            DIN or EN 1092-1 on the Spec Sheet?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Send the schedule with PN ratings, types, and materials. We will
            source to spec and confirm the dimensional package matches your
            mating equipment before anything ships.
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
