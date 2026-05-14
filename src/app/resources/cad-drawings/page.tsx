import Link from "next/link";

export const metadata = {
  title: "CAD Drawings & 3D Models | Texas Flange",
  description:
    "2D and 3D CAD files for ASME B16.5, B16.47, AWWA C207, DIN, and API 6BX flanges. DWG, DXF, PDF, STEP, and IGES formats covering weld neck, slip-on, blind, threaded, socket weld, lap joint, and RTJ flanges.",
};

export default function CadDrawingsPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Resources / CAD Drawings
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            CAD Drawings & 3D Models
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Drawings drive procurement. When the model is right, the bid
            packages, isometrics, and fabrication releases all line up. When
            the model is wrong, every downstream document carries the same
            error. We supply CAD files for every flange we stock, in the
            formats that the major design platforms read natively, so the
            geometry your team is reviewing is the geometry that ships.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            File Formats Available
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            2D drawings are issued in DWG for AutoCAD and Bricscad workflows,
            DXF for interchange with older systems and laser cutting bureaus,
            and PDF for review and printing. The PDFs carry the same
            dimensional annotations as the DWG and are the format most often
            attached to bid packages. 3D models are available in STEP (AP203
            and AP214) and IGES, both of which import cleanly into SolidWorks,
            Inventor, Creo, NX, and most plant design suites. Where a project
            requires a native CAD file, we coordinate with the mill or the
            machining shop to produce one.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border-l-4 border-[#B45309]">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                2D Drawing Formats
              </h3>
              <p className="text-gray-700 leading-relaxed">
                DWG, DXF, and PDF. Each drawing includes outside diameter,
                bolt circle, bolt count, bolt hole size, hub dimensions, face
                dimensions, and bore. Title block carries size, class,
                facing, material, and applicable standard.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-[#B45309]">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                3D Model Formats
              </h3>
              <p className="text-gray-700 leading-relaxed">
                STEP and IGES, suitable for assembly modeling, clash detection
                in plant design tools, and fabrication shop programming.
                Bolt holes are modeled as features rather than appearance only,
                so downstream tools can detect them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Coverage By Standard
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Our CAD library covers every flange family we carry in stock or
            source on a regular basis. If your standard is not listed below
            we can usually produce a drawing within a business day from the
            relevant table.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                ASME B16.5
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                NPS 1/2 through 24, Class 150 through Class 2500, in raised
                face, flat face, and ring joint variants.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                ASME B16.47
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Series A and Series B large diameter flanges, NPS 26 through
                60, Class 75 through 900.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                AWWA C207
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Class B, D, E, and F waterworks flanges from 86 PSI through
                300 PSI working pressure for municipal service.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                DIN Flanges
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                PN 6 through PN 100 in DIN 2631 through 2638 weld neck and
                slip-on patterns. EN 1092-1 type 11 also stocked.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                API 6BX
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                2,000 through 20,000 PSI wellhead flanges with BX ring groove
                detail. R-number called out in the title block.
              </p>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                API 6B
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                2,000 through 5,000 PSI flanges with R-series oval and
                octagonal ring grooves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Coverage By Flange Type
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Each standard above is available in the flange types we stock or
            supply on order. The drawing carries the full type-specific
            geometry, including hub profile and bore for weld neck, hub stub
            for slip-on, and solid face for blind.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 text-center">
              <h3 className="font-display font-bold text-[#1B1F23]">Weld Neck</h3>
              <p className="text-sm text-gray-600 mt-1">Tapered hub, full bore</p>
            </div>
            <div className="bg-white p-4 text-center">
              <h3 className="font-display font-bold text-[#1B1F23]">Slip-On</h3>
              <p className="text-sm text-gray-600 mt-1">Short hub, sleeve bore</p>
            </div>
            <div className="bg-white p-4 text-center">
              <h3 className="font-display font-bold text-[#1B1F23]">Blind</h3>
              <p className="text-sm text-gray-600 mt-1">Solid face, no bore</p>
            </div>
            <div className="bg-white p-4 text-center">
              <h3 className="font-display font-bold text-[#1B1F23]">Threaded</h3>
              <p className="text-sm text-gray-600 mt-1">NPT female bore</p>
            </div>
            <div className="bg-white p-4 text-center">
              <h3 className="font-display font-bold text-[#1B1F23]">Socket Weld</h3>
              <p className="text-sm text-gray-600 mt-1">Counterbore + shoulder</p>
            </div>
            <div className="bg-white p-4 text-center">
              <h3 className="font-display font-bold text-[#1B1F23]">Lap Joint</h3>
              <p className="text-sm text-gray-600 mt-1">Stub end + backing</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-8">
            Ring joint variants of weld neck and blind flanges are available
            in every class that the standard permits the facing on. The
            groove detail is shown to the resolution required for shop
            machining checks.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            How to Request a Drawing
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The fastest route is to email sales@texasflange.com with the
            following specification: standard and class, nominal pipe size,
            flange type, facing (raised face, flat face, ring joint, with the
            R-number if RTJ), material, and the file format you need. We can
            usually return the file the same business day. Bulk requests
            covering a project parts list are handled by the inside sales
            team and turned around inside two business days.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            For browsing the legacy library, our parent site at texasflange.com
            hosts a searchable CAD page going back several years that covers
            most common flange and fitting drawings.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#B45309] text-white px-6 py-3 font-semibold hover:bg-[#92400e] transition"
            >
              Request a Drawing
            </Link>
            <a
              href="https://www.texasflange.com/cad-3d-flange-drawings/?ref=pipingflange-new"
              className="inline-block border border-[#B45309] text-[#B45309] px-6 py-3 font-semibold hover:bg-[#B45309] hover:text-white transition"
            >
              Browse Legacy CAD Library
            </a>
            <Link
              href="/resources/flange-dimensions"
              className="inline-block border border-gray-500 text-gray-300 px-6 py-3 font-semibold hover:bg-gray-700 transition"
            >
              Dimension Tables
            </Link>
            <Link
              href="/tools"
              className="inline-block border border-gray-500 text-gray-300 px-6 py-3 font-semibold hover:bg-gray-700 transition"
            >
              Tools
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Specific CAD File?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Send the specification to sales@texasflange.com or call
            (281) 484-8325. Mail correspondence to PO Box 2889, Pearland TX
            77588.
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
