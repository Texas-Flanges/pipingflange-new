import Link from "next/link";

export const metadata = {
  title:
    "Carbon Steel Flanges & Fittings | A105, LF2, LF3, A516, A694 | Texas Flange",
  description:
    "Carbon steel material guide. A105 forged flanges for standard service, A350 LF2 and LF3 for low temperature, A516-70 plate for waterworks, and full A694 high yield F42 through F70 for transmission pipelines.",
};

export default function CarbonSteelPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Carbon Steel Flanges & Fittings
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Carbon steel is still the default for the majority of process,
            pipeline, and utility piping in North America. We stock the
            standard ASTM A105 and A350 grades for general and low
            temperature service, A516-70 plate for waterworks, and the
            full A694 high yield range for transmission pipeline service
            from Class 600 on up.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Standard Carbon Grades
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                ASTM A105 - Forged Flanges
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                A105 is the carbon steel forging grade that covers most
                ASME B16.5 flanges in ambient and moderately elevated
                service. It is suitable up to roughly 800F, but ASME
                pressure-temperature tables derate the material steeply
                above 500F, which is why high-temperature service typically
                shifts to chrome-moly alloy. For minimum design metal
                temperature below about -20F, A105 needs supplementary
                impact testing or a switch to A350 LF2.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                ASTM A350 LF2 - Low Temperature To -50F
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                LF2 is the impact-tested forging that takes over below the
                A105 limit. Charpy testing is performed at -50F as standard,
                making LF2 the workhorse for cold-climate gas processing,
                LNG export trains, ethylene and propylene service, and
                anywhere a low MDMT lands on the line list. Mechanically
                similar to A105, so substitution is usually transparent
                to downstream calculations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                ASTM A350 LF3 - Low Temperature To -150F
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                LF3 carries about 3.5 percent nickel, which gives it
                Charpy performance down around -150F. This is the spec
                for deep cryogenic carbon service before you have to step
                up into austenitic stainless or 9 percent nickel plate.
                Common on LNG and ethylene flange packages.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                ASTM A516-70 - Pressure Vessel Plate
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                When a flange is cut from plate rather than forged, A516
                Grade 70 is the standard carbon pressure vessel plate. It
                is the typical base material for cut-plate ring flanges,
                blinds, and the large-diameter AWWA ring and hub flanges
                used in waterworks. A516-70 is also routinely used as a
                substitute for A105 on cut-plate fabrications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            High Yield Carbon - The A694 Family
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            For transmission pipeline service, standard A105 yield strength
            is not enough. ASTM A694 covers heat-treated carbon and low
            alloy steel forgings designed to match the higher yield grades
            of line pipe. The grades are designated by minimum yield
            strength in ksi: F42, F46, F52, F56, F60, F65, and F70.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            A694 forgings are governed by MSS SP-44, the standard for
            steel pipeline flanges, rather than ASME B16.5. They are
            typically specified in Class 600 and above and mate cleanly
            to API 5L pipe grades X42 through X70. Welding procedures
            need to account for the heat treatment - a sloppy weld can
            undo the property gains the forging spec delivers.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F42 through F52
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The lower yield grades of the A694 family. Common on
                gathering systems and lower-pressure transmission lines
                where the operator wants A694 documentation without
                paying for full F65 or F70 property work.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F56 and F60
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The middle of the range. F60 in particular shows up
                frequently on natural gas transmission where the pipe
                is X60 and the operator wants a matching flange yield
                without going to full F65.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F65
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Probably the most-stocked A694 grade in the United
                States. Pairs to X65 line pipe, handles Class 900 and
                1500 service, and is the typical specification on long
                haul gas transmission.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F70
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The top of the standard A694 range. F70 is used on the
                highest-pressure transmission systems and on offshore
                risers where every pound of wall thickness saved at
                the flange matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Where Carbon Steel Fits
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Carbon steel covers the bulk of the work in oil and gas
            production, midstream gathering and transmission, refineries,
            petrochemical plants, power generation balance-of-plant, and
            general industrial utilities. It is also the standard for
            municipal waterworks and large diameter water transmission,
            usually in the form of AWWA C207 ring or hub flanges cut
            from A36 or A516-70 plate.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            For applications that step outside carbon's comfort zone -
            temperatures above 800F, aggressive chemistry, sour gas, or
            cryogenic service - browse our{" "}
            <Link
              href="/materials/alloy-steel"
              className="text-[#B45309] underline hover:no-underline"
            >
              alloy steel
            </Link>
            ,{" "}
            <Link
              href="/materials/stainless-steel"
              className="text-[#B45309] underline hover:no-underline"
            >
              stainless
            </Link>
            , and{" "}
            <Link
              href="/materials/exotic-alloys"
              className="text-[#B45309] underline hover:no-underline"
            >
              exotic alloy
            </Link>{" "}
            sections.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            Known Limitations
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Carbon steel corrodes. In wet or chloride-bearing service it
            corrodes faster, and in sour service it is subject to sulfide
            stress cracking unless hardness is controlled to NACE MR0175.
            Above roughly 800F it loses strength rapidly, and above 900F
            graphitization and creep become design concerns that push the
            spec into chrome-moly territory.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Carbon also has poor low-temperature toughness without
            supplementary testing, which is exactly why the A350 LF
            grades exist. Get the MDMT right at design time and the
            material picks itself.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Need Carbon Steel On A Schedule?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Standard A105 and LF2 ship same week. A694 in any grade,
            quote turned around fast with mill test reports.
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
