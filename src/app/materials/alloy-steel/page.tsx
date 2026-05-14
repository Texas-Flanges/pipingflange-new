import Link from "next/link";

export const metadata = {
  title:
    "Alloy Steel Flanges & Fittings | F11, F22, F91 Chrome-Moly | Texas Flange",
  description:
    "Alloy steel material guide. Chrome-moly F11, F22, and F91 for elevated temperature creep resistance and hydrogen service, plus A350 LF grades for cold service. Specified, sourced, and documented.",
};

export default function AlloySteelPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Alloy Steel Flanges & Fittings
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            When the service temperature climbs past where carbon can hold
            its strength, or the hydrogen partial pressure makes carbon a
            liability, chrome-moly alloy is the answer. We supply the
            F11, F22, and F91 grades that cover refinery, power, and
            petrochemical high-temperature service, plus the A350 LF
            forgings that handle the cold end of the spectrum.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Chrome-Moly Grades
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-[#1B1F23]">
            Chrome-moly steels are low alloy steels with chromium for
            oxidation and corrosion resistance and molybdenum for elevated
            temperature creep strength. The standard chrome-moly grades
            for forged flanges all live under ASTM A182.
          </p>
          <div className="space-y-8">
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                A182 F11 - 1.25Cr / 0.5Mo
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The entry point of the chrome-moly family. F11 is used
                where service temperature pushes carbon past its
                comfortable rating but does not justify the cost of F22
                or F91. Typical applications include moderate-temperature
                steam piping, hydrotreater service, and the lower-
                temperature crude unit lines in refineries. Common in
                Class 2 hardness and Class 3 normalized-and-tempered
                conditions.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                A182 F22 - 2.25Cr / 1Mo
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                F22 is the high-temperature workhorse. With more chromium
                and molybdenum than F11, it holds its strength well above
                900F and is the standard for hydroprocessing service in
                refineries, where elevated temperature meets high
                hydrogen partial pressure. F22 in V or W modified form
                (with added vanadium) shows up in heavy-wall hydrocracker
                piping where Nelson chart limits matter.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                A182 F91 - 9Cr / 1Mo Modified
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                F91 is the modern high-temperature alloy for supercritical
                and ultra-supercritical steam service. The grade pushes
                allowable stresses at temperature well above F22, which
                lets designers use thinner walls and lighter flanges in
                power plant main steam and hot reheat piping. F91 demands
                careful welding and heat treatment - get the post weld
                heat treatment wrong and the toughness suffers badly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            Low Temperature Alloy - The A350 LF Grades
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            The other end of the alloy spectrum is low temperature service.
            A350 LF2 is sometimes grouped with carbon and sometimes with
            alloy, depending on how the project organizes its material
            classes. LF2 is a carbon steel forging with impact testing at
            -50F, which makes it the standard for cold-climate gas
            processing.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            A350 LF3 carries roughly 3.5 percent nickel and is qualified
            to -150F, which puts it in the deep cryogenic carbon range
            used heavily on LNG and ethylene service. Below LF3 the next
            steps are 9 percent nickel plate or austenitic stainless.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            For the full breakdown on LF grades and the related cryogenic
            family, see the cold-service section of our{" "}
            <Link
              href="/materials/carbon-steel"
              className="text-[#B45309] underline hover:no-underline"
            >
              carbon steel page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Where Alloy Steel Belongs
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Chrome-moly alloy steels show up in three core sectors. In
            refineries, they cover hydroprocessing, catalytic reformer,
            and crude vacuum tower service where temperature and hydrogen
            push carbon past its limits. In power generation, they
            dominate the main steam, hot reheat, and superheater piping
            of fossil fuel and nuclear plants. In petrochemical service,
            they are common on cracking furnaces, ethylene production,
            and high-temperature process headers.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            Each of those duties demands the right grade, the right heat
            treatment condition, and matched welding procedures. We can
            quote the flange and document the heat number; the welding
            procedure is on you and your fabricator.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            Why Alloy Over Carbon
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Three reasons drive the alloy decision. First, creep
            resistance - once metal temperature climbs past 800F the
            allowable stress on carbon drops sharply, while chrome-moly
            grades hold their numbers much further up the curve. Second,
            hydrogen service - the Nelson chart sets carbon limits low
            relative to F11, F22, and the V-modified grades, so high
            hydrogen partial pressure pushes the spec up the alloy
            ladder. Third, oxidation resistance at temperature, where
            chromium oxide scale outperforms iron oxide.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            If your line list shows design temperature above 800F, design
            pressure above Class 600, or any meaningful hydrogen partial
            pressure, alloy steel is usually the right starting point.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Chrome-Moly Quoted The Same Day
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            F11, F22, F91, in standard B16.5 or large-bore configurations.
            Send the spec and we will source it.
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
