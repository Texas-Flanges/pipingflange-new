import Link from "next/link";

export const metadata = {
  title:
    "Stainless Steel Flanges & Fittings | F304, F316, F321, A182 | Texas Flange",
  description:
    "Stainless steel material guide. Austenitic F304/304L and F316/316L for general corrosion service, F321 for elevated temperature, and the full ASTM A182 product family. Carried in stock and sourced to spec.",
};

export default function StainlessSteelPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Stainless Steel Flanges & Fittings
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Stainless steel earns its place wherever carbon corrodes too
            quickly, hygiene matters, or temperatures sit high enough that
            chromium oxide stability becomes a real design factor. The
            ASTM A182 family covers forged stainless flanges and fittings,
            with 304/304L and 316/316L as the everyday austenitic defaults
            and a deeper bench of grades for sensitization, elevated
            temperature, and chloride duty.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Austenitic Grades - The Workhorses
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Roughly 70 percent of the stainless flanges and fittings in
            industrial service are austenitic 18-8 family material, and
            the bulk of that is 304 or 316. Three grade tiers cover the
            common service envelopes: <strong>L grades</strong> for
            welded service at standard temperature, <strong>standard
            grades</strong> for general use, and <strong>H grades</strong>
            for elevated temperature where creep strength and carbon
            stability matter.
          </p>
          <p className="text-lg leading-relaxed mb-8 text-[#1B1F23]">
            Most A182 stainless is supplied dual-certified to both the
            standard and L grade (e.g. F304/F304L stamped to the same
            forging), which keeps procurement simple. H grades are a
            separate order with their own UNS number and their own carbon
            and grain-size requirements.
          </p>
          <div className="space-y-8">
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F304 / F304L (UNS S30400 / S30403)
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The general purpose austenitic, typically supplied
                dual-certified F304/304L. The L variant caps carbon below
                0.030 percent to protect against chromium carbide
                precipitation in weld heat-affected zones. Good corrosion
                resistance in mild atmospheric, fresh water, and most
                organic chemistry. Used in food and beverage process
                lines, pharmaceutical utility systems, low-pressure
                refinery and chemical service, and architectural piping.
                Limited in chloride-rich environments where pitting
                begins to appear.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F316 / F316L (UNS S31600 / S31603)
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                Typically supplied dual-certified F316/316L. The
                molybdenum addition (roughly 2 to 3 percent Mo) buys real
                chloride and pitting resistance. The default stainless in
                chemical processing, marine atmospheric exposure,
                brackish service, and seawater-adjacent piping that does
                not warrant the cost of duplex. 316L is the typical spec
                when welding is involved.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F304H / F316H (UNS S30409 / S31609)
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                H grades carry a carbon floor (0.04 to 0.10 percent) and
                a controlled grain size. ASME B31.3 and the relevant
                pressure-vessel codes require H grades for design
                temperatures above approximately 800F, where the
                additional carbon and grain-size control give predictable
                creep strength. Low-carbon L grades are explicitly
                disallowed above that threshold. Specify F304H or F316H
                for elevated-temperature steam, refinery hydrocarbon
                service, and FCC and reformer piping.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F321 / F321H (UNS S32100 / S32109) - Titanium Stabilized
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                Conventional 304 is vulnerable to sensitization when
                service temperature sits in the 800F to 1500F band. F321
                adds titanium to tie up carbon and prevent chromium
                carbide formation, keeping grain-boundary corrosion in
                check at temperature. For elevated-temperature service
                above roughly 1000F where creep matters, F321H is the
                required variant - it carries the same carbon and
                grain-size controls as the other H grades. Common on
                high-temperature exhaust, expansion joints, and refining
                heater service.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F347 / F347H (UNS S34700 / S34709) - Niobium Stabilized
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The niobium (columbium) stabilized counterpart to F321.
                Same sensitization protection mechanism, often preferred
                where weldability and post-weld heat treatment behavior
                favor niobium over titanium. F347H carries the elevated
                carbon and grain-size requirements for service above
                approximately 1000F. Used in refinery reformer service,
                high-temperature hydrogen, and elevated-temperature
                process piping where stabilized austenitic chemistry is
                specified.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F310 / F310S (UNS S31000 / S31008)
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                A 25Cr-20Ni austenitic with substantially higher chromium
                and nickel than 304 or 316. The higher chromium gives
                better scaling resistance at sustained high temperatures,
                pushing usable service up toward 2000F in oxidizing
                atmospheres. Used on furnace and heat-treatment fixtures,
                radiant tubes, and high-temperature exhaust components.
                F310S is the low-carbon variant for welding.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F317L (UNS S31703)
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                A higher-molybdenum (3 to 4 percent Mo) variant of 316L,
                used where 316L is marginal on chloride pitting but the
                jump to duplex or 6Mo is not warranted. Common on flue
                gas desulfurization, pulp bleaching, and chloride-bearing
                aqueous service.
              </p>
            </div>
          </div>
          <div className="bg-[#1B1F23] text-white p-6 mt-8 rounded">
            <p className="text-base leading-relaxed">
              <strong className="text-[#B45309]">Carbon and temperature
              note.</strong> Standard and L grades are not interchangeable
              with H grades above approximately 800F. ASME B31.3 and the
              pressure vessel codes specify minimum carbon for elevated
              service to provide creep strength. If a line list calls out
              service above 800F, confirm whether the spec requires F304H,
              F316H, F321H, or F347H rather than the standard or L variant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            Ferritic And Martensitic - The Other Side Of The Family
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Ferritic grades (the 400-series like 430) and martensitic
            grades (410, 420) show up far less often in flange and
            fitting work than the austenitic 300-series. They are
            magnetic, generally lower in nickel, and have different
            welding and toughness profiles. Most flange specifications
            in process and pipeline service stay inside the A182
            austenitic family for predictability and weldability.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Ferritic and martensitic grades are available when a project
            calls for them, but the design conversation usually starts
            with why a 300-series austenitic will not work. Texas Flange
            can run the tradeoffs on request.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            ASTM A182 - The Spec Behind The Grades
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            ASTM A182 is the umbrella specification for forged or rolled
            alloy and stainless steel pipe flanges, forged fittings, and
            valves intended for high-temperature service. The F-prefix
            grades (F304, F316, F321, F11, F22, F91, and so on) all live
            under A182.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            When a line list calls out "A182 F316L," it is specifying
            both the manufacturing route (forged or rolled to A182
            chemistry, mechanical, and heat-treatment requirements) and
            the grade. Mill test reports trace back to that combined
            requirement.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            When To Pick Stainless
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Stainless earns its premium in four scenarios. First,
            corrosive chemistry where carbon would not survive the
            design life. Second, hygienic service in food, beverage,
            dairy, and pharmaceutical lines where contamination and
            cleanability matter as much as pressure containment. Third,
            elevated temperature where chromium oxide stability beats
            iron oxide. Fourth, architectural or appearance-driven
            installations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            See our work in{" "}
            <Link
              href="/industries"
              className="text-[#B45309] underline hover:no-underline"
            >
              food and beverage
            </Link>{" "}
            and{" "}
            <Link
              href="/industries"
              className="text-[#B45309] underline hover:no-underline"
            >
              chemical processing
            </Link>{" "}
            for typical project profiles.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            The Honest Trade-Offs
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Stainless is more expensive than carbon, usually by a factor
            of three to five on a per-flange basis. It also has lower
            allowable stresses than carbon at room temperature, which
            means heavier wall in some pressure-temperature combinations.
            And it is more sensitive to chloride stress cracking than
            many designers realize - even 316 has limits, which is why
            duplex exists.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            For chloride service that pushes past 316, see our{" "}
            <Link
              href="/materials/exotic-alloys"
              className="text-[#B45309] underline hover:no-underline"
            >
              exotic alloys page
            </Link>
            , which covers duplex and the nickel-rich grades.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Need a Stainless Quote?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            304, 316, 321, 347, 310, 317L, or H grades in any A182 form.
            Send the line list and the schedule to Texas Flange for
            pricing and availability.
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
