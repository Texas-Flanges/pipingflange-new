import Link from "next/link";

export const metadata = {
  title: "Products | Flanges, Fittings & Custom Machining | Texas Flange",
  description:
    "Three product categories covering the full pressure spectrum from 86 PSI waterworks through 20K wellhead. Source flanges, fittings, and custom machining from a single supplier.",
};

type CategoryCardProps = {
  eyebrow: string;
  title: string;
  href: string;
  body: string;
  bullets: string[];
};

function CategoryCard({ eyebrow, title, href, body, bullets }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-gray-200 p-8 hover:border-[#B45309] transition-colors"
    >
      <p className="uppercase tracking-wider text-[#B45309] text-xs mb-3">{eyebrow}</p>
      <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-5">{body}</p>
      <ul className="space-y-2 mb-6">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-gray-700">
            - {b}
          </li>
        ))}
      </ul>
      <span className="text-[#B45309] font-semibold text-sm">Explore the category -&gt;</span>
    </Link>
  );
}

function StandardChip({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block border border-gray-600 px-4 py-2 text-sm text-gray-300 hover:border-[#B45309] hover:text-white transition-colors"
    >
      {label}
    </Link>
  );
}

export default function ProductsHubPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Product Catalog</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Three Product Categories. Every Configuration.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Flanges, fittings, and custom machined components stocked and sourced from one place.
            Lightweight Class 125LW waterworks lines at 86 psi through ASME B16.5 process classes
            and into 20,000 psi API 6BX wellhead service. Most distributors pick a lane. We stock
            the entire road.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Browse</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-10">
            Pick a Category
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard
              eyebrow="Category 01"
              title="Flanges"
              href="/products/flanges"
              body="The full flange catalog. Weld neck, slip-on, blind, threaded, socket weld, lap joint, reducing, orifice, spectacle blind, long weld neck, and ring-type joint. ASME B16.5, B16.47, AWWA C207, API 6A, and API 6BX all under one roof."
              bullets={[
                "Class 125LW through 20K pressure ratings",
                "1/2 inch through 144 inch diameters",
                "Carbon, stainless, alloy, and exotic materials",
              ]}
            />
            <CategoryCard
              eyebrow="Category 02"
              title="Pipe Fittings"
              href="/products/fittings"
              body="Butt-weld, socket-weld, and threaded fittings to ASME B16.9 and B16.11. Elbows, tees, reducers, caps, couplings, unions, and stub ends. Schedule 10 through XXH and hot induction bends for non-standard radii."
              bullets={[
                "Full schedule range 10 through XXH",
                "Butt-weld, socket-weld, and threaded",
                "Hot induction bends to spec",
              ]}
            />
            <CategoryCard
              eyebrow="Category 03"
              title="Custom Machining"
              href="/products/custom-machining"
              body="Non-standard bores, overbore flanges, custom facings, ring-type joint grooves, and weld overlay. Send a drawing or a specification and we will quote it. Reverse engineering on legacy components is also part of the program."
              bullets={[
                "Non-standard bores and overbores",
                "Custom facings and RTJ grooves",
                "Weld overlay and hard facing",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Standards Coverage</p>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            From 86 PSI to 20K
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            A flange or fitting is only as useful as the standard it conforms to. We stock and
            source across the entire pressure spectrum so you do not have to call three suppliers
            to complete one project.
          </p>
          <div className="flex flex-wrap gap-3">
            <StandardChip label="ASME B16.5" href="/standards/asme-flanges" />
            <StandardChip label="ASME B16.47 Series A/B" href="/standards/asme-flanges" />
            <StandardChip label="ANSI" href="/standards/ansi-flanges" />
            <StandardChip label="AWWA C207" href="/standards/awwa-flanges" />
            <StandardChip label="DIN / EN 1092" href="/standards/din-flanges" />
            <StandardChip label="API 6A" href="/products/flanges" />
            <StandardChip label="API 6BX" href="/products/flanges" />
            <StandardChip label="API 605" href="/products/flanges" />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Why Source Here</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-10">
            Built for Procurement, Engineering, and Project Managers
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                One Supplier, Full Pressure Spectrum
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Waterworks contractor needs Class 125LW at 86 psi this morning. Refinery turnaround
                needs F22 weld neck at 1500. Wellhead fabricator needs 10K studded outlets by Friday.
                Same phone number. Same purchase order workflow. Same MTR package.
              </p>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Material Traceability That Survives an Audit
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mill Test Reports tied to heat numbers, NACE MR0175 for sour service when specified,
                PSL-3 and PSL-4 documentation on API 6A items, and full chemistry and mechanical
                reports on request. Standard practice, not an upcharge.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Inventory You Can Actually See
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Houston-area stock for the common sizes and schedules, mill direct for the long
                tail. If we do not have it on the shelf, we will tell you a real lead time instead
                of guessing.
              </p>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Engineering Help Without the Sales Routine
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bring the drawing, the line list, or the question. We will tell you what fits, what
                does not, and what the standard actually says. See the{" "}
                <Link href="/resources" className="text-[#B45309] underline">
                  resources library
                </Link>{" "}
                and{" "}
                <Link href="/tools" className="text-[#B45309] underline">
                  reference tools
                </Link>{" "}
                for self-serve material.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Ready for a Quote?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Send a line list, a drawing, or a question. We will come back with stock, lead times,
            and pricing on real items, not a brochure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#B45309] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:2814848325"
              className="inline-block border border-white text-white font-semibold px-8 py-3 hover:bg-white hover:text-[#B45309] transition-colors"
            >
              Call (281) 484-8325
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
