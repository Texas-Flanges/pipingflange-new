import Link from "next/link";

export const metadata = {
  title: "AWWA C207 and C228 Flanges | Class B, D, E, F and 125LW | Texas Flange",
  description:
    "Comprehensive reference for AWWA C207 steel flanges (Class B, D, E, F) and AWWA C228 stainless steel flanges. Pressure ratings, 125LW compatibility, sizing 4\" through 144\", and waterworks applications.",
};

export default function AwwaFlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            AWWA C207 and C228: Waterworks Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            If your line is moving water, AWWA is almost certainly your
            standard. C207 covers steel pipe flanges for waterworks service
            from 86 psi all the way through 300 psi. C228 covers their
            stainless steel counterparts. Together they cover municipal
            distribution, treatment plants, transmission mains, pump stations,
            cooling water, fire protection, and the lightweight steel flange
            family that has become the default for utility-grade piping.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            AWWA C207 Pressure Classes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            C207 organizes steel flanges into four pressure classes. The class
            determines working pressure, flange thickness, and where the
            flange is appropriate in the system. All four classes are
            available across the full 4 inch through 144 inch size range.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-gray-300">
              <thead className="bg-[#1B1F23] text-white">
                <tr>
                  <th className="text-left p-4 font-bold">Class</th>
                  <th className="text-left p-4 font-bold">Working Pressure</th>
                  <th className="text-left p-4 font-bold">Size Range</th>
                  <th className="text-left p-4 font-bold">Typical Service</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold">Class B</td>
                  <td className="p-4">86 psi</td>
                  <td className="p-4">4&quot; - 144&quot;</td>
                  <td className="p-4">Low-pressure water distribution</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-bold">Class D</td>
                  <td className="p-4">
                    175 psi (sizes thru 12&quot;)<br />150 psi (over 12&quot;)
                  </td>
                  <td className="p-4">4&quot; - 144&quot;</td>
                  <td className="p-4">Standard waterworks service</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold">Class E</td>
                  <td className="p-4">275 psi</td>
                  <td className="p-4">4&quot; - 144&quot;</td>
                  <td className="p-4">Higher-pressure transmission mains</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Class F</td>
                  <td className="p-4">300 psi</td>
                  <td className="p-4">4&quot; - 144&quot;</td>
                  <td className="p-4">High-pressure industrial water</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl text-sm">
            Note: Class D has a stepped working pressure. Through 12 inch the
            rating is 175 psi. From 14 inch through 144 inch the rating drops
            to 150 psi. This catches engineers who assume a single rating
            across the whole size range.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Class 125LW Steel Flanges: The Workhorse
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            Class 125LW (Lightweight) flanges are the most-specified flange in
            the waterworks world, and the reason has very little to do with
            water pressure and everything to do with bolt patterns.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            A Class 125LW steel flange has the <strong>same outside
            diameter, same bolt circle, and same number and size of bolt holes
            </strong>{" "}
            as a corresponding ANSI B16.1 Class 125 cast iron flange. That
            dimensional match is the whole point. It lets a steel flange bolt
            up directly to a cast iron valve, pump, strainer, or existing
            section of cast iron pipe without an adapter or a custom drill.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            What makes the 125LW different from a B16.5 Class 150 is the
            cross-section. The flange is thinner and lighter, which keeps cost
            and weight down. It is produced from AWWA C207 material
            specifications (typically ASTM A36 plate or A105 forgings) rather
            than the heavier-duty B16.5 material spec, and the result is a
            flange purpose-built for low and moderate pressure water service.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Class 125LW is supplied across the full configuration range:
            slip-on, weld neck, blind, threaded, and lap joint, in sizes 4 inch
            through 144 inch. For higher-pressure service, AWWA C207 Class E
            and Class F flanges fill the gap between 125LW and the heavier
            B16.5 classes.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 max-w-3xl">
            For more on the bolt pattern compatibility, see the{" "}
            <Link
              href="/standards/ansi-flanges"
              className="text-[#B45309] underline"
            >
              ANSI B16.1 reference page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            AWWA C228: Stainless Steel Waterworks Flanges
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            C228 is the stainless steel counterpart to C207. It applies the
            same dimensional and pressure-class framework to stainless flanges
            intended for waterworks service, with material requirements that
            address corrosion in aggressive water environments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            Common materials per C228 include 304/304L and 316/316L
            austenitics. The standard is increasingly specified on potable
            water projects where lead-free certification, chloride resistance,
            and long service life justify the up-front material premium over
            carbon steel.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            See{" "}
            <Link
              href="/materials/stainless-steel"
              className="text-[#B45309] underline"
            >
              stainless steel materials
            </Link>{" "}
            for the grades we stock and source.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Materials We Supply Under AWWA C207
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#2A2F35] p-6 rounded">
              <h3 className="text-lg font-bold text-white mb-2">ASTM A36</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Common plate-cut material for blind flanges and large diameter
                slip-on rings. Carbon steel, weldable, cost-effective. The
                default for Class B and Class D plate flanges.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6 rounded">
              <h3 className="text-lg font-bold text-white mb-2">
                ASTM A516-70
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Pressure vessel quality plate. Specified for higher-pressure
                blinds and large diameter flanges where notch toughness and
                weldability matter. Common on Class E and Class F.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6 rounded">
              <h3 className="text-lg font-bold text-white mb-2">ASTM A105</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Carbon steel forging used where the flange is forged rather
                than cut from plate. Common on smaller bore weld neck and
                slip-on Class 125LW flanges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Where AWWA Flanges Go to Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-3">
                Municipal Water and Wastewater
              </h3>
              <ul className="text-gray-700 leading-relaxed text-sm space-y-2">
                <li>Treatment plant headers and process piping</li>
                <li>Distribution mains and transmission lines</li>
                <li>Pump station suction and discharge</li>
                <li>Aeration and clarifier piping</li>
                <li>Chemical feed lines (with appropriate liner or alloy)</li>
                <li>Reservoir and tank connections</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-3">
                Industrial Water Service
              </h3>
              <ul className="text-gray-700 leading-relaxed text-sm space-y-2">
                <li>Cooling tower intake and discharge</li>
                <li>HVAC chilled water and condenser water</li>
                <li>Fire protection mains and riser headers</li>
                <li>Plant utility water distribution</li>
                <li>Boiler feedwater (low-pressure side)</li>
                <li>Power plant circulating water</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-8 max-w-3xl">
            For more on the full range of waterworks fittings and flange
            configurations we supply, see the{" "}
            <Link
              href="/products/flanges"
              className="text-[#B45309] underline"
            >
              flange product overview
            </Link>{" "}
            or browse{" "}
            <Link href="/industries" className="text-[#B45309] underline">
              industries served
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            AWWA Flanges, From 4&quot; to 144&quot;
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Class B through Class F, 125LW for the cast iron retrofit work,
            C228 stainless when the water is aggressive. Send the schedule and
            we will match class, drilling, and configuration line by line.
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
