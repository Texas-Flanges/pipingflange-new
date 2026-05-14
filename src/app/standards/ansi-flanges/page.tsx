import Link from "next/link";

export const metadata = {
  title: "ANSI B16.1 Cast Iron Flanges | Class 125 and Class 125LW Compatibility | Texas Flange",
  description:
    "ANSI B16.1 cast iron pipe flanges in Class 25, 125, and 250. The key reference for why Class 125LW lightweight steel flanges share bolt patterns with cast iron, enabling waterworks retrofit.",
};

export default function AnsiFlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            ANSI B16.1: Cast Iron Pipe Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            ANSI B16.1 covers cast iron pipe flanges and flanged fittings in
            Class 25, 125, and 250. It might look like a niche legacy standard
            until you realize the entire lightweight steel flange family
            (Class 125LW) was designed to bolt up to it. This is the spec that
            keeps decades of municipal and HVAC piping serviceable.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            What ANSI B16.1 Covers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            B16.1 sets dimensions, tolerance, drilling, and pressure-temperature
            ratings for gray iron flanges and flanged fittings. The standard is
            organized into three classes that reflect the pressure regime the
            flange is designed for.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-2">
                CLASS 25
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Light-Duty Cast Iron
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                25 psi maximum non-shock working pressure. Largely obsolete on
                new installations, but you will run into it on older municipal
                and industrial water systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-2">
                CLASS 125
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Standard Cast Iron
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The most common cast iron class. 175 psi cold working pressure
                in smaller sizes, derating with diameter. This is the bolt
                pattern that Class 125LW steel flanges were designed to match.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#B45309] font-bold text-sm tracking-wider mb-2">
                CLASS 250
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Heavy Cast Iron
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                400 psi cold working pressure in smaller sizes. Heavier
                cross-section than Class 125, used where higher pressure or
                shock loading is expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Why ANSI B16.1 Still Matters
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Cast iron flanges are not going to win any modern process piping
            competitions. So why does this standard show up so often on
            quotes? Three reasons.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Retrofit Compatibility
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Municipal and industrial water systems built decades ago used
                Class 125 cast iron flanges as their default. Replacing a
                fitting, valve, or section of pipe means matching that bolt
                pattern. Class 125LW steel flanges exist specifically for this.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                HVAC Service
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Chilled water, condenser water, and low-pressure steam systems
                in commercial and institutional buildings still spec to B16.1
                drilling. Pumps, valves, and strainers often ship with B16.1
                flanged ports.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Low-Pressure Distribution
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Plant water mains, fire protection headers below 175 psi, and
                older process water loops continue to be specified in B16.1
                drilling so the parts ecosystem stays interchangeable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            The Class 125LW Connection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            Here is the key piece of the puzzle. <strong>Class 125LW</strong>{" "}
            (Lightweight) steel flanges are forged or plate-cut steel flanges
            built with the same outside diameter, bolt circle, and bolt hole
            count as ANSI B16.1 Class 125 cast iron flanges. They are lighter
            in cross-section than a comparable B16.5 Class 150 steel flange,
            which means they cost less and weigh less, and they bolt directly
            to existing B16.1 Class 125 cast iron fittings without an adapter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            Class 125LW flanges are not B16.5 flanges. They are not B16.1
            flanges either. They are typically produced to{" "}
            <Link
              href="/standards/awwa-flanges"
              className="text-[#B45309] underline"
            >
              AWWA C207
            </Link>{" "}
            material specifications and used heavily in waterworks, fire
            protection, and HVAC service where the pressure rating fits and the
            cost savings make sense.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            When a spec calls for a steel flange that bolts to a cast iron
            valve or pump, the answer is almost always a Class 125LW slip-on,
            blind, or weld neck flange.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Materials and Typical Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Cast Iron Grades
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-3">
                Gray iron per ASTM A126 Class A, B, and C is the historical
                material for B16.1 flanges. Class B is the most common.
                Ductile iron (ASTM A536) flanges exist for higher impact
                resistance but fall under separate dimensional standards in
                most cases.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Cast iron is brittle. This is why flat-face flanges (FF) are
                used when mating steel to cast iron - a raised face concentrates
                load and can crack the cast iron flange.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Where You See B16.1
              </h3>
              <ul className="text-gray-300 leading-relaxed text-sm space-y-2">
                <li>Municipal water distribution (low pressure)</li>
                <li>Wastewater treatment plant headers</li>
                <li>HVAC chilled and condenser water</li>
                <li>Low-pressure steam and condensate</li>
                <li>Fire protection mains (older systems)</li>
                <li>
                  Plant utility water and any application using cast iron
                  pumps, valves, or strainers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need Class 125 or 125LW Flanges?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We stock Class 125LW steel flanges 4 inch through 144 inch in
            slip-on, weld neck, and blind configurations, and we source cast
            iron flanges when the spec calls for the real thing. Tell us the
            mating part and we will match the bolt pattern.
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
