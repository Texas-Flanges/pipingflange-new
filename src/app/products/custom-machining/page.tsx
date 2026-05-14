import Link from "next/link";

export const metadata = {
  title: "Custom Machining | Non-Standard Bores, RTJ Grooves, Weld Overlay | Texas Flange",
  description:
    "Custom machined flange and fitting work for non-standard bores, overbores, custom facings, ring-type joint grooves, weld overlay, and reverse engineering. Send a drawing or a specification.",
};

function CapabilityCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-gray-200 p-6">
      <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-[#0F1316] border border-gray-700 p-8">
      <p className="text-[#B45309] font-display text-3xl font-bold mb-2">{number}</p>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{body}</p>
    </div>
  );
}

export default function CustomMachiningPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Custom Machining</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            When the Catalog Does Not Fit, We Machine It.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Non-standard bores, overbored flanges, custom facings, ring-type joint grooves, weld
            overlay, and reverse engineering on legacy components. Send a drawing or send a
            specification. We will source the forging or bar stock and have it machined to print.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Capabilities</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            What We Can Have Made
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            The list below covers the work that crosses the custom desk most often. If something
            you need is not here, it is probably still possible. Ask.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <CapabilityCard
              title="Non-Standard Bores"
              body="Bore-to-fit on weld neck and slip-on flanges when pipe ID does not match a standard schedule. Common on imported pipe, heavy wall pipeline, and legacy systems."
            />
            <CapabilityCard
              title="Overbore Flanges"
              body="Larger inside diameter than the original spec to reduce turbulence, fit liner sleeves, or accommodate insulation. Includes ID taper if requested."
            />
            <CapabilityCard
              title="Special Facings"
              body="Tongue and groove, male and female, lens ring, and other non-standard sealing geometries machined to ASME B16.5 supplemental requirements or drawing."
            />
            <CapabilityCard
              title="Ring-Type Joint Grooves"
              body="R, RX, and BX style ring grooves cut into existing raised face flanges or machined from blank stock for high-pressure sealing service."
            />
            <CapabilityCard
              title="Weld Overlay and Hard Facing"
              body="Inconel 625, 825, and stainless cladding on carbon flange bodies for corrosion or wear service. Cobalt-based hard facing on seat surfaces where required."
            />
            <CapabilityCard
              title="Reverse Engineering"
              body="Field-measure or sample-based work on legacy components where no drawing exists. We dimension, draft, and produce replacements to match the original."
            />
            <CapabilityCard
              title="Drilling Modifications"
              body="Bolt pattern changes when retrofitting between standards - for example AWWA C207 to ASME B16.5 on a fire main upgrade."
            />
            <CapabilityCard
              title="Studded Outlets and Adapter Spools"
              body="API 6A studded outlets, adapter flanges between dimensional families, and short spools that bridge between mismatched flanges in legacy facilities."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Process</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            How a Custom Job Runs
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            Four steps, no theatrics. The job either makes sense or it does not, and we tell you
            which one early.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ProcessStep
              number="01"
              title="Send a Drawing or Spec"
              body="A dimensioned drawing is ideal. A written specification works. Even a photo with rough measurements is enough to start the conversation. We will tell you what else we need."
            />
            <ProcessStep
              number="02"
              title="Quote and Lead Time"
              body="We confirm material availability, machining capacity, and any documentation requirements. You get a firm price and a real lead time, not a placeholder."
            />
            <ProcessStep
              number="03"
              title="Production"
              body="Forging or bar stock sourced to the specified material grade. Machining to print. In-process and final inspection per the QA plan agreed up front."
            />
            <ProcessStep
              number="04"
              title="Documentation and Ship"
              body="Full MTR package with heat numbers traceable to the finished part. PMI, dimensional reports, and NDE results included when called for. Then it ships."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Documentation</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            MTR Package as Standard
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            Every custom job ships with the documentation a pressure-piping audit expects to see.
            Heat-numbered Mill Test Reports tying the raw material to the finished part, the
            machining traveler, and any inspection records called for in the order.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-3">
                Standard Documentation
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>- Mill Test Report with heat number</li>
                <li>- Chemical and mechanical properties</li>
                <li>- Dimensional inspection report</li>
                <li>- Material certification per ordered grade</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-3">
                Available on Request
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>- Positive Material Identification (PMI)</li>
                <li>- NACE MR0175 / ISO 15156 compliance</li>
                <li>- Liquid penetrant or magnetic particle NDE</li>
                <li>- Charpy impact testing for low-temp service</li>
                <li>- PSL-3 or PSL-4 documentation per API 6A</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">Examples</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Work We See Often
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            Real categories of work that come through the custom desk. None of this is rare. Most
            of it is just outside what a catalog forging covers off the shelf.
          </p>
          <div className="space-y-6">
            <div className="bg-[#0F1316] border-l-4 border-[#B45309] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Heavy-Wall Pipeline Bore Match
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A pipeline contractor receives heavy-wall A694 F65 pipe with an inside diameter
                that does not match any standard schedule. We bore the mating weld neck flanges to
                match the pipe ID so the field weld is a flush root.
              </p>
            </div>
            <div className="bg-[#0F1316] border-l-4 border-[#B45309] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                RTJ Conversion on Existing Vessel
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A refinery wants to upgrade a Class 600 raised face nozzle to RTJ during a
                turnaround. We machine the R-style groove into the existing flange face per
                ASME B16.20 dimensions and re-certify the surface finish.
              </p>
            </div>
            <div className="bg-[#0F1316] border-l-4 border-[#B45309] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Inconel Overlay on Sour Service
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A producer needs the wetted surface of a carbon steel flange clad with Inconel 625
                for a high-H2S well. We have the flange overlay-welded, machined back to spec, and
                PMI-verified before ship.
              </p>
            </div>
            <div className="bg-[#0F1316] border-l-4 border-[#B45309] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Legacy Mill Flange Recreation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A mill is running 40-year-old equipment with a proprietary flange pattern. We
                field-measure a sample, draft the replacement, and have it produced in the
                original material grade or an approved substitution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Have a Drawing?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Email the print, the photo, or the rough sketch and we will tell you whether it is
            stock, modified stock, or a full custom job. Quotes typically come back within one
            business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sales@texasflange.com"
              className="inline-block bg-white text-[#B45309] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              sales@texasflange.com
            </a>
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
