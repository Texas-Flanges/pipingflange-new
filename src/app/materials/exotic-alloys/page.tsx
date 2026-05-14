import Link from "next/link";

export const metadata = {
  title:
    "Exotic Alloy Flanges & Fittings | Inconel, Monel, Hastelloy, Duplex | Texas Flange",
  description:
    "Exotic alloy material guide. Hastelloy C276 and C22, Inconel 600/625/825, Monel 400 and K-500, Incoloy 800/825, duplex 2205 and super duplex 2507, titanium, and copper alloys for severe service.",
};

export default function ExoticAlloysPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Exotic Alloy Flanges & Fittings
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            When the service environment defeats stainless, the answer
            is usually a nickel alloy, a duplex stainless, or one of the
            reactive metals. We supply the full slate of ASTM B564 nickel
            forgings, duplex and super duplex grades, plus titanium and
            copper alloys for the jobs where ordinary materials simply
            do not survive.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Nickel Alloys - ASTM B564
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-[#1B1F23]">
            ASTM B564 covers nickel alloy forgings for piping flanges
            and fittings. The grades break into families based on which
            chemistry problem they were designed to solve.
          </p>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                Hastelloy C276 and C22
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The nickel-molybdenum-chromium grades. Built for severe
                wet chlorine, mixed acid, hypochlorite, and the kind of
                aggressive chemistry that eats 316 for breakfast.
                C276 is the standard; C22 trades a little molybdenum
                for slightly better oxidizing acid performance. Both
                are common in chemical process, pulp and paper
                bleaching, and flue gas scrubbing.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                Inconel 600, 625, and 825
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                Nickel-chromium and nickel-chromium-molybdenum grades
                designed for high temperature plus aggressive
                chemistry. Inconel 625 in particular is the go-to
                cladding material for sour service vessels, subsea
                manifolds, and topsides equipment where strength,
                weldability, and chloride resistance all matter.
                Inconel 825 (technically Incoloy 825) is the workhorse
                in sulfuric acid and phosphoric acid service.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                Monel 400 and K-500
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                Nickel-copper alloys. Monel 400 is the standard for
                hydrofluoric acid service in refinery HF alkylation
                units, and it is one of the few alloys that resists
                seawater pitting and crevice attack reliably across
                long service life. K-500 adds aluminum and titanium
                for precipitation hardening when strength is needed
                alongside corrosion resistance.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#B45309] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                Incoloy 800 and 825
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                Iron-nickel-chromium grades for high temperature
                oxidation and carburization resistance. Common in
                ethylene cracking furnace tubes and the associated
                flange connections, plus heat exchanger service in
                petrochemical and chemical units.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            Duplex And Super Duplex Stainless
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Duplex stainless steels carry a mixed austenitic-ferritic
            microstructure, which gives them roughly twice the yield
            strength of austenitic 316 along with substantially better
            chloride stress cracking and pitting resistance.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Duplex 2205 is the workhorse and is heavily used in offshore
            topsides piping, seawater service, FPSO process modules, and
            chemical service that defeats 316L but does not justify
            jumping to nickel. Super duplex 2507 pushes the pitting
            resistance equivalent higher and shows up in subsea, riser,
            and the most aggressive seawater duties.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welding duplex correctly is a separate discipline. The
            ferrite-austenite balance has to be maintained through the
            weld and heat affected zone, which means controlled heat
            input and qualified procedures. We will quote the material;
            the welding procedure stays with your fabricator.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Titanium, Copper, Bronze, And Aluminum
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Titanium is the answer for seawater service that runs hot,
            for chlorine and chlorinated brine, and for certain medical
            and chemical service. ASTM B381 covers titanium forgings;
            Grade 2 is the standard commercially pure grade for piping,
            with Grade 5 (Ti-6Al-4V) used when strength matters.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Copper and copper-nickel alloys (C70600 90/10 and C71500
            70/30) cover seawater cooling, condenser, and certain
            HVAC duties. Bronze flanges appear in lower-pressure
            marine and water service. Aluminum flanges are uncommon
            but used in low-temperature LNG service and in certain
            transport and aerospace adjacent applications.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            We source all of these to spec. None of them are common
            enough to keep in deep stock, so lead times are project
            specific.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            When Exotic Alloys Earn Their Cost
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Five service profiles drive the bulk of exotic alloy
            specifications. Sour service governed by NACE MR0175,
            where wet H2S triggers sulfide stress cracking and the
            hardness limits of standard carbon are unworkable.
            Chloride-bearing environments where 316L is on the edge
            of pitting or stress cracking. Refining HF alkylation
            service, which is essentially a Monel decision. Marine
            and subsea, where chloride plus dynamic loading favors
            duplex or super duplex. And cryogenic, where austenitic
            stainless and certain nickel alloys keep their toughness
            below where carbon stops being safe.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            The premium for exotic alloy material is real - a duplex
            flange can cost five times a comparable 316L flange, and
            a Hastelloy C276 forging can run twenty times an A105.
            The justification is almost always lifecycle. A failed
            corroded flange in a chemical service unit can shut a
            plant for a week. The math works.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Related Reading
          </h2>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            For the carbon and stainless baseline against which exotic
            alloy decisions are made, see our{" "}
            <Link
              href="/materials/carbon-steel"
              className="text-[#B45309] underline hover:no-underline"
            >
              carbon steel
            </Link>{" "}
            and{" "}
            <Link
              href="/materials/stainless-steel"
              className="text-[#B45309] underline hover:no-underline"
            >
              stainless steel
            </Link>{" "}
            references. For high temperature service that does not
            require full nickel, the{" "}
            <Link
              href="/materials/alloy-steel"
              className="text-[#B45309] underline hover:no-underline"
            >
              alloy steel page
            </Link>{" "}
            covers the chrome-moly options.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Exotic Alloys, Sourced And Documented
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hastelloy, Inconel, Monel, duplex, titanium. Send the
            grade and the geometry. We will quote material and lead
            time with full traceability.
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
