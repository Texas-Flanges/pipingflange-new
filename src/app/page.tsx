import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import { QUOTE_URL } from "@/components/CtaBand";

const faqs = [
  {
    q: "What pressure range do piping flange standards actually cover end to end?",
    a: "AWWA C207 Class B (86 psi) through Class F (300 psi) and lightweight Class 125LW cover the waterworks side. ASME B16.5 covers Class 150 through Class 2500 for industrial process. API 6A and 6BX cover 2K through 20K psi for wellhead service. The full span is documented across the standards reference pages."
  },
  {
    q: "Are lightweight waterworks and high-pressure oilfield flanges from the same family?",
    a: "No. AWWA C207 lightweight and API 6A high-pressure are entirely separate standards with different dimensional, material, and pressure-rating rules. They often share a vendor ecosystem, but the engineering for each is independent."
  },
  {
    q: "What size range do these standards cover?",
    a: "ASME B16.5 covers 1/2 inch through 24 inch NPS. ASME B16.47 picks up at 26 inch and runs through 60 inch in Series A and Series B. AWWA C207 covers 4 inch through 144 inch for steel water-service flanges. Larger custom diameters exist but are project-specific and quoted case by case."
  },
  {
    q: "What are Buy American flange requirements?",
    a: "Federally funded projects can carry domestic-content rules such as the Buy American Act (BAA), Build America, Buy America (BABA) and American Iron and Steel (AIS). For iron and steel products like flanges, these generally require every manufacturing step, from the initial melting through coating, to happen in the United States, with documentation that traces the material origin. PSL-3 and PSL-4 API material adds further NDE and impact testing requirements."
  },
  {
    q: "What is a mill test report (MTR) on a flange order?",
    a: "A mill test report ties each flange back to its original heat number with chemistry and mechanical properties. EN 10204 3.1 and 3.2 are the typical certification levels for industrial piping. Standard practice is for MTRs to ship with the material rather than be chased afterward."
  },
  {
    q: "How are lead times set on piping flange orders?",
    a: "Lead time depends on size, class, material, and any custom machining. Standard B16.5 carbon and stainless typically move faster than large-diameter A694 or API 6BX, which often involve mill production schedules. Project-specific timelines are confirmed at the quote stage."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-[#1B1F23] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#B45309] to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#FDBA74] uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            AWWA Class B to API 6BX 20K
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white">
            Piping Flanges Across the<br />
            <span className="text-[#FDBA74]">Full Pressure Spectrum</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            A reference for the full pressure range. Class 125LW lightweight
            for waterworks, ASME B16.5 through Class 2500 for industrial process, and API 6A and
            6BX up to 20,000 psi for wellhead service. Carbon, stainless, alloy, and exotic
            material families covered in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={QUOTE_URL}
              className="bg-[#B45309] text-white px-8 py-3 rounded font-semibold hover:bg-[#92400E] transition"
            >
              Request a Quote
            </a>
            <Link
              href="/standards"
              className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition"
            >
              Browse Standards
            </Link>
          </div>
        </div>
      </section>

      {/* Pressure Spectrum Visual */}
      <section className="bg-[#1B1F23] border-t border-[#B45309]/30 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#FDBA74] text-sm mb-3 text-center">The Spectrum</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-white">Every Class, One Reference</h2>
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
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 text-center">
          <Stat number="7" label="Pressure Classes Covered" />
          <Stat number="AWWA + ASME + API" label="Standards Referenced" />
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">What's Covered</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-ink">Flanges, Fittings and Non-Standard Work</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            The flange types, fittings and custom work that show up on a piping spec.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ProductCard
              title="Flanges"
              desc="Weld neck, blind, slip-on, threaded, socket weld, lap joint, reducing, orifice, spectacle blind, plate, long weld neck. 1/2&quot; to 144&quot; NPS. Class 125LW through 2500."
              bullets={["ASME B16.5 & B16.47", "AWWA C207 & C228", "API 6A & 6BX", "DIN & EN 1092-1"]}
              href="https://texasflange.com/flange-types-basics/?ref=pipingflange"
            />
            <ProductCard
              title="Pipe Fittings"
              desc="Elbows, tees, reducers, caps, couplings, unions, and specialty fittings. Butt-weld, socket-weld, and threaded for every service condition."
              bullets={["ASME B16.9 & B16.11", "Schedule 10 through XXH", "Seamless & welded", "Hot induction bends"]}
              href="https://texasflange.com/butt-weld-fittings/?ref=pipingflange"
            />
            <ProductCard
              title="Custom Machining"
              desc="Non-standard bores, overbore flanges, special facings, and tight-tolerance work. Quoted from a drawing or a spec."
              bullets={["Ring-type joint grooves", "Specialty facings and bore work"]}
              href="https://texasflange.com/custom-flanges/?ref=pipingflange"
            />
          </div>
        </div>
      </section>

      {/* Alloy and High Yield */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-4 text-ink">What Are Alloy Piping Flanges?</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            {"\"Alloy\" is a blanket term for material grades that don't fall neatly into the carbon or stainless steel categories. Most nickel alloys land here: think Hastelloy, Inconel, Incoloy, and Monel, along with other commercially available materials like aluminum, titanium, copper, and bronze. Alloy flanges and fittings are made to industry standard specifications. For high nickel alloys specifically, ASTM B564 is the primary spec to know. These materials shine in applications where corrosion resistance or temperature extremes are a concern: corrosive processing environments, refineries, pressure vessel work, and similar demanding service conditions. For a closer look at commonly specified alloys, see the "}
            <a
              href="https://texasflange.com/alloy-pipe-flanges/?ref=pipingflange"
              className="text-[#B45309] underline hover:no-underline"
            >
              Texas Flange alloy flanges page
            </a>
            .
          </p>
          <h2 className="text-4xl font-display font-bold mb-4 text-ink">What About High Yield Carbon Piping Flanges?</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            {"High yield carbon steel is essentially a heat-treated version of standard carbon steel, processed to significantly raise its yield strength, which is the point at which the metal starts to permanently deform under stress. The governing specifications are A694 and MSS SP-44, which cover grades F42 through F70. These piping flanges mate and weld to high yield pipe grades X42 through X70. You'll typically see these flanges specified in higher-pressure, higher-temperature applications, usually Class 600 and above, situations where mild carbon steel just isn't rated for the job requirements. More on high yield flanges is on the "}
            <a
              href="https://texasflange.com/high-yield-flanges/?ref=pipingflange"
              className="text-[#B45309] underline hover:no-underline"
            >
              Texas Flange high yield flanges page
            </a>
            .
          </p>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#FDBA74] text-sm mb-3">Standards & Compliance</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">Built to Code. Documented.</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Each standard sets its own dimensions, pressure ratings, materials and marking rules.
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
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Reference Coverage</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-ink">What This Resource Covers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <WhyCard
              title="Full Pressure Range"
              desc="Most flange references cover one slice of the curve. This one covers AWWA Class B at 86 psi through API 6BX 20K, so a project that crosses pressure ranges does not have to cross multiple reference sites."
            />
            <WhyCard
              title="Material Traceability"
              desc="Mill test reports tie a flange to its heat number. EN 10204 3.1 and 3.2 are the usual certification levels for industrial piping."
            />
            <WhyCard
              title="Pressure-Temperature Context"
              desc="Class is not pressure. The standards reference pages cross-reference class to derated pressure at service temperature using the ASME B16.5 rating tables for each material group, so spec selection lines up with duty."
            />
            <WhyCard
              title="Domestic and Import Background"
              desc="Domestic-content rules such as BAA, BABA and AIS are explained alongside imported material options in the resources section."
            />
            <WhyCard
              title="Specialty Metallurgy"
              desc="Duplex, super duplex, Inconel, Monel, Hastelloy, chrome-moly, and high yield carbon are all covered in the materials section, with notes on where each one earns its premium."
            />
            <WhyCard
              title="Custom and Non-Standard"
              desc="Overbore, special facings, RTJ grooves, and weld overlay sit outside the standard catalog and are quoted from a drawing."
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#FDBA74] text-sm mb-3">Industries</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">From Wellhead to Water Main</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Different industries, different specs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/oil-gas-industry-flanges/", name: "Oil & Gas" },
              { href: "/petrochemical-flanges/", name: "Petrochemical" },
              { href: "/power-plant-industries-flanges/", name: "Power Generation" },
              { href: "/waterworks-flanges/", name: "Water & Wastewater" },
              { href: "/petrochemical-flanges/", name: "Chemical Processing" },
              { href: "/flange-types-basics/", name: "Mining & Minerals" },
              { href: "/flange-types-basics/", name: "Pulp & Paper" },
              { href: "/food-beverage-industries-flanges/", name: "Food & Beverage" },
              { href: "/flange-types-basics/", name: "Agriculture" },
              { href: "/blog/flanges-in-commercial-hvac-what-goes-where-in-the-mechanical-room/", name: "HVAC & Mechanical" },
              { href: "/flange-types-basics/", name: "Marine & Shipbuilding" },
              { href: "/blog/flanges-for-data-center-cooling/", name: "Data Centers" }
            ].map((i) => (
              <a
                key={i.name}
                href={`https://texasflange.com${i.href}?ref=pipingflange`}
                className="bg-[#2A2F35] border border-gray-700 px-4 py-3 rounded text-center text-white hover:border-[#B45309] hover:text-[#FDBA74] transition"
              >
                {i.name}
              </a>
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
            Spec sheets are fine. Understanding why the spec matters is better. These guides explain the
            why behind the spec.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard
              title="Flange Types Guide"
              desc="Weld neck vs. slip-on vs. blind. Application criteria, pros and cons."
              href="https://texasflange.com/blog/the-complete-guide-to-flanges/?ref=pipingflange"
            />
            <TechCard
              title="Pressure-Temperature Ratings"
              desc="ASME B16.5 P-T tables for common materials. How class translates to PSI at temperature."
              href="https://texasflange.com/blog/pipe-flange-pressure-classes-per-asme-b16-5/?ref=pipingflange"
            />
            <TechCard
              title="Bolt Torque Reference"
              desc="Stud bolt sizes and torque references by pressure class."
              href="https://texasflange.com/blog/flange-bolt-torque-values-a-reference-guide-for-every-pressure-class/?ref=pipingflange"
            />
            <TechCard
              title="Material Grade Guide"
              desc="A105 vs. F304 vs. F316 vs. F11. Which grade for which service."
              href="https://texasflange.com/texas-flange-frequently-asked-questions/?ref=pipingflange"
            />
            <TechCard
              title="Corrosion Prevention"
              desc="Coatings, galvanizing, and material selection for corrosive environments."
              href="https://texasflange.com/blog/flange-maintenance-101-prevent-rust-corrosion-effectively/?ref=pipingflange"
            />
            <TechCard
              title="Flange Dimension Tables"
              desc="ASME B16.5 dimensional data. OD, bolt circle, bolt holes, thickness by class."
              href="https://texasflange.com/blind-flanges/?ref=pipingflange"
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
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function SpectrumCard({ tier, range, desc, href }: { tier: string; range: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="block bg-[#2A2F35] border border-gray-700 rounded p-6 hover:border-[#B45309] transition"
    >
      <p className="text-[#FDBA74] text-xs uppercase tracking-wider mb-2 font-semibold">{tier}</p>
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
