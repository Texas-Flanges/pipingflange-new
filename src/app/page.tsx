import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B1F23] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#B45309] to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#B45309] uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            From 86 PSI to 20K
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white">
            Piping Flanges Across the<br />
            <span className="text-[#B45309]">Full Pressure Spectrum</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Most flange suppliers pick a lane. We stock the entire road. Class 125LW lightweight
            for waterworks. ASME B16.5 through Class 2500 for industrial process. API 6A and 6BX
            up to 20,000 psi for wellhead service. Carbon, stainless, alloy, exotic. One source.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#B45309] text-white px-8 py-3 rounded font-semibold hover:bg-[#92400E] transition"
            >
              Request a Quote
            </Link>
            <Link
              href="/products/flanges"
              className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition"
            >
              Browse Flanges
            </Link>
          </div>
        </div>
      </section>

      {/* Pressure Spectrum Visual */}
      <section className="bg-[#1B1F23] border-t border-[#B45309]/30 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3 text-center">The Spectrum</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-white">One Source, Every Class</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <SpectrumCard tier="Lightweight" range="86 - 300 PSI" desc="Class 125LW, AWWA C207 B/D/E/F. Waterworks, cooling loops, large diameter up to 144&quot;." href="/standards/awwa-flanges" />
            <SpectrumCard tier="Standard" range="150 - 600 Class" desc="ASME B16.5 and B16.47. The industrial workhorse range. Process piping, refining, utilities." href="/standards/asme-flanges" />
            <SpectrumCard tier="High Pressure" range="900 - 2500 Class" desc="Heavy-wall ASME for steam, high-temp hydrocarbon, and critical service." href="/standards/asme-flanges" />
            <SpectrumCard tier="API Service" range="2K - 20K PSI" desc="API 6A and 6BX for wellhead, BOP, and drilling. RTJ facings with proper ring gaskets." href="/standards/asme-flanges" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat number="144&quot;" label="Max Diameter" />
          <Stat number="20K" label="Max PSI Class" />
          <Stat number="50+" label="Material Grades" />
          <Stat number="1986" label="Supplying Since" />
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">What We Supply</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-ink">Three Product Categories. Thousands of Configurations.</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Every piece traceable, tested, and ready to install. From a single blind for a maintenance
            shutdown to a full BOM for new construction.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ProductCard
              title="Flanges"
              desc="Weld neck, blind, slip-on, threaded, socket weld, lap joint, reducing, orifice, spectacle blind, plate, long weld neck. 1/2&quot; to 144&quot; NPS. Class 125LW through 2500."
              bullets={["ASME B16.5 & B16.47", "AWWA C207 & C228", "API 6A & 6BX", "DIN & EN 1092-1"]}
              href="/products/flanges"
            />
            <ProductCard
              title="Pipe Fittings"
              desc="Elbows, tees, reducers, caps, couplings, unions, and specialty fittings. Butt-weld, socket-weld, and threaded for every service condition."
              bullets={["ASME B16.9 & B16.11", "Schedule 10 through XXH", "Seamless & welded", "Hot induction bends"]}
              href="/products/fittings"
            />
            <ProductCard
              title="Custom Machining"
              desc="Non-standard bores, overbore flanges, special facings, tight-tolerance work. Drawings or specs, either works. We have the supply chain."
              bullets={["CNC turning & milling", "Ring-type joint grooves", "Weld overlay & hard facing", "Full MTR documentation"]}
              href="/products/custom-machining"
            />
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Standards & Compliance</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">Built to Code. Documented.</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Every flange ships with full material traceability and dimensional verification against
            the standard it was ordered to. No gray areas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StandardCard code="ASME B16.5" desc="Pipe Flanges 1/2&quot; - 24&quot;" />
            <StandardCard code="ASME B16.47" desc="Large Diameter 26&quot; - 60&quot;" />
            <StandardCard code="AWWA C207" desc="Steel Pipe Flanges 4&quot; - 144&quot;" />
            <StandardCard code="API 6A / 6BX" desc="Wellhead & Drilling Equipment" />
            <StandardCard code="ANSI B16.1" desc="Cast Iron Class 125, 250" />
            <StandardCard code="DIN / EN 1092" desc="European PN 6 - PN 400" />
            <StandardCard code="MSS SP-44" desc="High Yield F42 - F70" />
            <StandardCard code="NACE MR0175" desc="Sour Service Materials" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">The Difference</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-ink">Why Engineers and Buyers Pick Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <WhyCard
              title="Full Pressure Range"
              desc="Most distributors cover one slice of the curve. We supply the whole thing, which means your project doesn't get split across three vendors with three sets of paperwork."
            />
            <WhyCard
              title="MTRs Before the Truck Shows Up"
              desc="Every order includes mill test reports traceable to the heat number. EN 10204 3.1 and 3.2 certificates available on request. No paper chase after delivery."
            />
            <WhyCard
              title="Pressure-Rated Right"
              desc="We cross-reference your service conditions against ASME P-T tables before quoting. If the class doesn't fit the duty, we will say so before you cut a PO."
            />
            <WhyCard
              title="Domestic and Import"
              desc="Buy American requirements covered. Budget projects also covered. We source from qualified mills on both sides of the equation."
            />
            <WhyCard
              title="Specialty Metallurgy"
              desc="Duplex, super duplex, Inconel, Monel, Hastelloy, chrome-moly, high yield carbon. If the service calls for it, we have the supply chain for it."
            />
            <WhyCard
              title="Custom Without the Wait"
              desc="Overbore, special facings, RTJ grooves, weld overlay. Standard catalog stops where most jobs actually start. Our machine shop handles the rest."
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Sectors We Serve</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">From Wellhead to Water Main</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Different industries, different specs, same standard of execution.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { slug: "oil-gas", name: "Oil & Gas" },
              { slug: "petrochemical", name: "Petrochemical" },
              { slug: "power-generation", name: "Power Generation" },
              { slug: "waterworks", name: "Water & Wastewater" },
              { slug: "chemical-processing", name: "Chemical Processing" },
              { slug: "mining", name: "Mining & Minerals" },
              { slug: "pulp-paper", name: "Pulp & Paper" },
              { slug: "food-beverage", name: "Food & Beverage" },
              { slug: "agriculture", name: "Agriculture" },
              { slug: "hvac", name: "HVAC & Mechanical" },
              { slug: "marine", name: "Marine & Shipbuilding" },
              { slug: "data-centers", name: "Data Centers" }
            ].map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="bg-[#2A2F35] border border-gray-700 px-4 py-3 rounded text-center text-white hover:border-[#B45309] hover:text-[#B45309] transition"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Technical Resources</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-ink">Engineering Reference</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Spec sheets are fine. Understanding why the spec matters is better. These guides help
            your team make faster, more confident decisions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard
              title="Flange Types Guide"
              desc="Weld neck vs. slip-on vs. blind. Application criteria, pros and cons."
              href="https://www.texasflange.com/blog/the-complete-guide-to-flanges/?ref=pipingflange-new"
            />
            <TechCard
              title="Pressure-Temperature Ratings"
              desc="ASME B16.5 P-T tables for common materials. How class translates to PSI at temperature."
              href="https://www.texasflange.com/blog/use-of-asme-b16-5-standards-for-flange-pressure-ratings/?ref=pipingflange-new"
            />
            <TechCard
              title="Bolt Torque Reference"
              desc="Recommended torque values for B7 studs by size and lubrication condition."
              href="https://www.texasflange.com/blog/bolt-dimensions-explained-a-complete-guide-to-measuring-diameter-threads-and-length/?ref=pipingflange-new"
            />
            <TechCard
              title="Material Grade Guide"
              desc="A105 vs. F304 vs. F316 vs. F11. Which grade for which service."
              href="https://www.texasflange.com/blog/do-you-offer-different-material-grades-for-a-variety-of-industrial-flanges/?ref=pipingflange-new"
            />
            <TechCard
              title="Corrosion Prevention"
              desc="Coatings, galvanizing, and material selection for corrosive environments."
              href="https://www.texasflange.com/blog/flange-maintenance-101-prevent-rust-corrosion-effectively/?ref=pipingflange-new"
            />
            <TechCard
              title="Flange Dimension Tables"
              desc="ASME B16.5 dimensional data. OD, bolt circle, bolt holes, thickness by class."
              href="https://www.texasflange.com/flange-drawings-models2/blind/?ref=pipingflange-new"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Common Questions</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-ink">Frequently Asked</h2>
          <div className="space-y-6">
            <FaqItem
              q="What is the full pressure range you cover?"
              a="Lightweight Class 125LW (86 psi) and AWWA C207 Class B through F (up to 300 psi), ASME B16.5 Class 150 through Class 2500, and API 6A/6BX from 2K through 20K psi. If your project crosses pressure ranges, you can specify everything from one vendor."
            />
            <FaqItem
              q="Do you handle both lightweight waterworks and high-pressure oilfield?"
              a="Yes. Most distributors specialize in one or the other. We supply both, plus everything in between. A water treatment plant, a refinery, and a wellhead project can all order from the same paperwork."
            />
            <FaqItem
              q="What size range can you handle?"
              a="Standard inventory covers 1/2 inch through 24 inch NPS. Large diameter flanges from 26 inch through 144 inch are available to ASME B16.47 and AWWA C207 specs. We have supplied flanges up to 120 inch OD on custom projects."
            />
            <FaqItem
              q="Can you supply flanges with domestic melt requirements?"
              a="Yes. We stock Buy American and ARRA compliant flanges and can provide full domestic melt and production documentation when required. PSL-3 and PSL-4 API material available on request."
            />
            <FaqItem
              q="Do you provide mill test reports?"
              a="Every order ships with MTRs traceable to the original heat number. EN 10204 3.1 and 3.2 certificates available on request. You get the documentation before the truck arrives, not after."
            />
            <FaqItem
              q="What is your typical lead time?"
              a="Standard flanges ship from stock. Custom and high-pressure API work follows a clear production timeline with updates. Rush options available when the shutdown clock is running. Call (281) 484-8325 for project-specific timelines."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B45309] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Need Piping Flanges? Let's Talk.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need ten slip-ons for a maintenance job or ten thousand weld necks for a
            new build, the process starts with a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#B45309] px-8 py-3 rounded font-bold hover:bg-cream transition"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+12814848325"
              className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#B45309] transition"
            >
              (281) 484-8325
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SpectrumCard({ tier, range, desc, href }: { tier: string; range: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="block bg-[#2A2F35] border border-gray-700 rounded p-6 hover:border-[#B45309] transition"
    >
      <p className="text-[#B45309] text-xs uppercase tracking-wider mb-2 font-semibold">{tier}</p>
      <p className="text-white font-display text-2xl mb-3">{range}</p>
      <p className="text-gray-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
    </Link>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-4xl md:text-5xl font-display font-bold text-[#B45309]" dangerouslySetInnerHTML={{ __html: number }} />
      <p className="text-gray-700 text-sm uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
}

function ProductCard({ title, desc, bullets, href }: { title: string; desc: string; bullets: string[]; href: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded p-6 hover:border-[#B45309] transition">
      <h3 className="text-2xl font-display font-bold mb-3 text-ink">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
      <ul className="space-y-1 text-sm text-gray-700 mb-6">
        {bullets.map((b) => (
          <li key={b} className="flex items-start">
            <span className="text-[#B45309] mr-2">&#10003;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link href={href} className="text-[#B45309] font-semibold hover:text-[#92400E]">
        View Details &rarr;
      </Link>
    </div>
  );
}

function StandardCard({ code, desc }: { code: string; desc: string }) {
  return (
    <div className="border border-gray-700 rounded p-4 bg-[#2A2F35]">
      <p className="text-white font-display font-bold text-lg mb-1">{code}</p>
      <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

function WhyCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-4 border-[#B45309] pl-5">
      <h3 className="text-xl font-display font-bold mb-2 text-ink">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </div>
  );
}

function TechCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-200 rounded p-5 hover:border-[#B45309] transition"
    >
      <h3 className="font-display font-bold text-lg mb-2 text-ink">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
      <p className="text-[#B45309] text-sm mt-3 font-semibold">Access Resource &rarr;</p>
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-white border border-gray-200 rounded p-5 group">
      <summary className="font-semibold text-ink cursor-pointer flex justify-between items-center">
        <span>{q}</span>
        <span className="text-[#B45309] group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-700 mt-3 leading-relaxed">{a}</p>
    </details>
  );
}
