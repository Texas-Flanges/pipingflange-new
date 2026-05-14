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
            chromium oxide stability becomes a real design factor. We stock
            and source the full ASTM A182 product family, with 304/304L
            and 316/316L moving through inventory every week.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Austenitic Grades - The Workhorses
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-[#1B1F23]">
            Roughly 70 percent of the stainless flanges and fittings on
            the planet are austenitic 18-8 family material, and the bulk
            of that is 304 or 316 in dual-certified L variants. The L
            designation caps carbon below 0.030 percent, which protects
            against chromium carbide precipitation in the heat-affected
            zone of welds.
          </p>
          <div className="space-y-8">
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F304 / F304L
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The general purpose austenitic. Good corrosion resistance
                in mild atmospheric, fresh water, and most organic
                chemistry. Used heavily in food and beverage process
                lines, pharmaceutical utility systems, low-pressure
                refinery and chemical service, and architectural piping.
                Limited in chloride-rich environments, where pitting
                starts to appear.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F316 / F316L
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The molybdenum addition in 316 (roughly 2 to 3 percent
                Mo) buys real chloride and pitting resistance. This is
                the default stainless in chemical processing, marine
                atmospheric exposure, brackish service, and most
                seawater-adjacent piping that does not warrant the cost
                of duplex. 316L is the typical spec when welding is
                involved.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F321 - Titanium Stabilized
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                When service temperature sits in the 800F to 1500F band,
                conventional 304 is vulnerable to sensitization. F321
                adds titanium to tie up carbon and prevent chromium
                carbide formation, which keeps grain-boundary corrosion
                in check at temperature. Common on high-temperature
                exhaust, expansion joints, and certain refining service.
              </p>
            </div>
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
            We can source ferritic and martensitic grades when a project
            calls for it, but the conversation usually starts with why
            300-series will not work. Get in touch and we will run the
            tradeoffs.
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
            Stainless Quote, Same Business Day
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            304, 316, 321, in any A182 form. Send the line and the
            schedule, we will come back with stock or lead time.
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
