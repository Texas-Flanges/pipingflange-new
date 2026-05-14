import Link from "next/link";

export const metadata = {
  title: "Domestic vs Import Flanges | Texas Flange",
  description:
    "Buy American, ARRA, and BABA compliance for piping flanges. API PSL-1 through PSL-4 explained. When melt origin matters and how to specify it on your quote.",
};

export default function DomesticVsImportPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Resources / Domestic vs Import
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Where Your Flanges Were Melted Matters
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            On a commercial project, the cheapest qualifying flange usually
            wins. On a federally funded project, an export pipeline subject
            to API monogram requirements, or a refinery turnaround governed by
            an owner specification with melt origin language, the calculation
            shifts. Knowing the difference between domestic and import supply,
            and how to document it, prevents the kind of paperwork problem
            that holds a release at the project gate.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Buy American, ARRA, and BABA
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Buy American is the umbrella name for a family of federal
            procurement rules that require iron and steel content to be melted
            and poured in the United States for projects funded with federal
            dollars. The Buy American Act of 1933 applies to direct federal
            procurement. The American Recovery and Reinvestment Act of 2009,
            known as ARRA, extended similar requirements to projects funded
            through stimulus programs. The Build America, Buy America Act of
            2021, known as BABA, broadened the iron and steel coverage to
            infrastructure projects receiving federal financial assistance,
            including water and wastewater projects funded through state
            revolving funds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For flanges and fittings, the practical effect is that the heat
            of steel from which the part is forged or cast must be melted and
            poured at a US mill, and the subsequent forging and machining must
            also occur in the United States. The mill test report carries the
            heat number and the country of melt. The fabricator certifies the
            country of manufacture on a separate document.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When a project specification calls out one of these programs, we
            source the flanges from our domestic mill partners and supply the
            documentation package with the parts. Substitution from foreign
            stock is not possible once the spec is set, so confirming
            applicability at the quote stage saves the rework later.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            API Product Specification Levels
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            API 6A and several related specifications use product
            specification levels, abbreviated PSL, to define the testing,
            inspection, traceability, and quality control rigor applied to a
            part. The higher the PSL, the more documentation and verification
            attaches to each piece.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-3">
                PSL-1
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Baseline. Chemical and mechanical testing on a heat basis,
                visual inspection, hydrostatic test where applicable. Suitable
                for standard service and the default for most commercial
                applications.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-3">
                PSL-2
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Adds Charpy impact testing per heat, magnetic particle
                inspection on critical surfaces, and additional traceability.
                Common for sour service trim and for owner specifications
                requiring better cold weather toughness data.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-3">
                PSL-3
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Adds individual piece serialization, ultrasonic examination,
                expanded NDE, and full chain of custody from heat through
                final inspection. Frequently called out on critical wellhead
                and high-pressure components.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-3">
                PSL-4
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Highest level. All PSL-3 requirements plus product-specific
                hardness testing, environmental qualification, and the most
                comprehensive documentation package. Reserved for the most
                demanding service environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Domestic Melt Advantages
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Traceability is the most concrete benefit. The mill test report
            arrives faster, the heat number ties directly to a US-issued
            certificate, and any follow-on testing or third-party verification
            can be coordinated inside the same time zone. For project owners
            running cause-of-failure investigations or for fabricators
            preparing ASME code data reports, domestic supply removes a layer
            of friction from the documentation process.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compliance is the second benefit. Where the project specification
            invokes Buy American, ARRA, BABA, or an owner-specific melt
            country requirement, domestic supply is the only qualifying option.
            The cost premium is real but predictable, and the avoided risk of
            a non-compliant release is usually worth it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lead time on certain stock sizes can also favor domestic supply,
            particularly for forged carbon steel weld neck flanges in standard
            classes where our domestic partners hold inventory.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Import Supply Advantages
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            Cost is the obvious benefit. For commercial projects without a
            melt restriction, qualified import supply often runs at a
            meaningful discount to domestic equivalents while still meeting
            ASME, MSS, or AWWA dimensional and material requirements.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            Availability of unusual sizes and exotic alloys is the second
            benefit. Several of our import mill partners run regular
            production of duplex, super duplex, and nickel alloy flanges in
            sizes that domestic mills make only on a per-order basis. When the
            project needs a 16 inch Class 600 super duplex weld neck on a
            tight schedule, the import route is sometimes the only one with
            stock available.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Lead time flexibility runs both directions. Import supply can
            shorten lead time when the right stock is sitting in a US bonded
            warehouse, and it can also be the source of last resort for very
            long lead time domestic items where the project schedule cannot
            absorb the wait.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            How to Specify on a Quote
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The cleanest specification language calls out three things. First,
            the applicable compliance program by name, for example "Buy
            America compliant per BABA" or "domestic melt and pour per Buy
            American Act." Second, the documentation required, which usually
            includes MTR with heat number, certificate of origin, and where
            applicable the API monogram or PSL level. Third, the inspection
            level, which may invoke a third-party inspector or owner witness
            at the mill.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For PSL specifications the language is shorter: "API 6A PSL-2"
            tied to the size, class, and material is usually enough for the
            quote desk to route to the right mill partner. When the spec is
            silent on melt origin, we will quote the lowest cost qualifying
            source, which is usually but not always import.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Common Pitfalls
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            Assuming a part is domestic because the supplier is US-based is
            the most frequent error. A distributor headquartered in Texas can
            hold a warehouse full of imported flanges. The melt country lives
            on the MTR, not on the invoice address.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            Missing documentation is the second pitfall. The flange may have
            been melted and forged domestically but the certificate of origin
            never made it into the project file. Without the paper, the
            compliance argument cannot be made at the gate.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Specifying a PSL level higher than the service requires drives
            cost and lead time up without operational benefit. PSL-3 on a
            standard refinery utility line is overkill. The right approach is
            to match PSL to the criticality of the service the part will see.
          </p>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Quoting a Compliance-Sensitive Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the
            specification language from your contract. We will source to
            match and supply the documentation package.
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
