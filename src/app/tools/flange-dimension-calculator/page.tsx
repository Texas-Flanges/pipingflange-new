"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FlangeRow = {
  size: string;
  od: string;
  bc: string;
  bolts: number;
  hole: string;
  bolt: string;
  thickness: string;
};

const B16_5_150: Record<string, FlangeRow> = {
  "0.5": {
    size: '1/2"',
    od: "3.50",
    bc: "2.375",
    bolts: 4,
    hole: '5/8"',
    bolt: '1/2"',
    thickness: '7/16"',
  },
  "1": {
    size: '1"',
    od: "4.25",
    bc: "3.125",
    bolts: 4,
    hole: '5/8"',
    bolt: '1/2"',
    thickness: '9/16"',
  },
  "2": {
    size: '2"',
    od: "6.00",
    bc: "4.75",
    bolts: 4,
    hole: '3/4"',
    bolt: '5/8"',
    thickness: '3/4"',
  },
  "4": {
    size: '4"',
    od: "9.00",
    bc: "7.50",
    bolts: 8,
    hole: '3/4"',
    bolt: '5/8"',
    thickness: '15/16"',
  },
  "6": {
    size: '6"',
    od: "11.00",
    bc: "9.50",
    bolts: 8,
    hole: '7/8"',
    bolt: '3/4"',
    thickness: '1"',
  },
  "8": {
    size: '8"',
    od: "13.50",
    bc: "11.75",
    bolts: 8,
    hole: '7/8"',
    bolt: '3/4"',
    thickness: '1-1/8"',
  },
  "12": {
    size: '12"',
    od: "19.00",
    bc: "17.00",
    bolts: 12,
    hole: '1"',
    bolt: '7/8"',
    thickness: '1-1/4"',
  },
  "16": {
    size: '16"',
    od: "23.50",
    bc: "21.25",
    bolts: 16,
    hole: '1-1/8"',
    bolt: '1"',
    thickness: '1-7/16"',
  },
  "24": {
    size: '24"',
    od: "32.00",
    bc: "29.50",
    bolts: 20,
    hole: '1-3/8"',
    bolt: '1-1/4"',
    thickness: '1-7/8"',
  },
};

const B16_5_300: Record<string, FlangeRow> = {
  "2": {
    size: '2"',
    od: "6.50",
    bc: "5.00",
    bolts: 8,
    hole: '3/4"',
    bolt: '5/8"',
    thickness: '7/8"',
  },
  "4": {
    size: '4"',
    od: "10.00",
    bc: "7.875",
    bolts: 8,
    hole: '7/8"',
    bolt: '3/4"',
    thickness: '1-1/4"',
  },
  "6": {
    size: '6"',
    od: "12.50",
    bc: "10.625",
    bolts: 12,
    hole: '7/8"',
    bolt: '3/4"',
    thickness: '1-7/16"',
  },
  "8": {
    size: '8"',
    od: "15.00",
    bc: "13.00",
    bolts: 12,
    hole: '1"',
    bolt: '7/8"',
    thickness: '1-5/8"',
  },
  "12": {
    size: '12"',
    od: "20.50",
    bc: "17.75",
    bolts: 16,
    hole: '1-3/8"',
    bolt: '1-1/4"',
    thickness: '2"',
  },
};

const AWWA_D: Record<string, FlangeRow> = {
  "4": {
    size: '4"',
    od: "9.00",
    bc: "7.50",
    bolts: 8,
    hole: '3/4"',
    bolt: '5/8"',
    thickness: '15/16"',
  },
  "12": {
    size: '12"',
    od: "19.00",
    bc: "17.00",
    bolts: 12,
    hole: '1"',
    bolt: '7/8"',
    thickness: '1-1/4"',
  },
  "24": {
    size: '24"',
    od: "32.00",
    bc: "29.50",
    bolts: 20,
    hole: '1-3/8"',
    bolt: '1-1/4"',
    thickness: '1-7/8"',
  },
  "36": {
    size: '36"',
    od: "46.00",
    bc: "42.75",
    bolts: 32,
    hole: '1-5/8"',
    bolt: '1-1/2"',
    thickness: '2-3/8"',
  },
};

const STANDARDS = [
  { id: "b16.5", label: "ASME B16.5" },
  { id: "b16.47a", label: "ASME B16.47 Series A" },
  { id: "b16.47b", label: "ASME B16.47 Series B" },
  { id: "awwa", label: "AWWA C207 (Class B/D/E/F)" },
];

const CLASSES_BY_STANDARD: Record<string, string[]> = {
  "b16.5": ["150", "300", "600", "900", "1500", "2500"],
  "b16.47a": ["75", "150", "300", "400", "600", "900"],
  "b16.47b": ["75", "150", "300", "400", "600", "900"],
  awwa: ["B", "D", "E", "F"],
};

const STANDARD_SIZES = [
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "2.5",
  "3",
  "4",
  "5",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
];

const AWWA_SIZES = [
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "30",
  "36",
  "42",
  "48",
  "54",
  "60",
  "72",
  "84",
  "96",
  "108",
  "120",
  "144",
];

export default function FlangeDimensionCalculator() {
  const [standard, setStandard] = useState<string>("b16.5");
  const [klass, setKlass] = useState<string>("150");
  const [size, setSize] = useState<string>("4");

  const availableSizes =
    standard === "awwa" ? AWWA_SIZES : STANDARD_SIZES;
  const availableClasses = CLASSES_BY_STANDARD[standard] ?? [];

  const row = useMemo<FlangeRow | null>(() => {
    if (standard === "b16.5" && klass === "150") {
      return B16_5_150[size] ?? null;
    }
    if (standard === "b16.5" && klass === "300") {
      return B16_5_300[size] ?? null;
    }
    if (standard === "awwa" && klass === "D") {
      return AWWA_D[size] ?? null;
    }
    return null;
  }, [standard, klass, size]);

  const onStandardChange = (next: string) => {
    setStandard(next);
    const firstClass = CLASSES_BY_STANDARD[next]?.[0] ?? "150";
    setKlass(firstClass);
    const sizes = next === "awwa" ? AWWA_SIZES : STANDARD_SIZES;
    if (!sizes.includes(size)) {
      setSize(sizes[0]);
    }
  };

  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Tool 02
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Flange Dimension Lookup
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Look up the outside diameter, bolt circle, bolt count, bolt hole
            size, recommended bolt diameter, and flange thickness for common
            ASME B16.5, B16.47, and AWWA C207 flanges. Select the standard,
            pressure class, and nominal pipe size to populate the reference
            row.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded shadow border border-gray-200">
            <h2 className="text-2xl font-display font-bold text-[#1B1F23] mb-6">
              Inputs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Standard
                </label>
                <select
                  value={standard}
                  onChange={(e) => onStandardChange(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {STANDARDS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Class
                </label>
                <select
                  value={klass}
                  onChange={(e) => setKlass(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {availableClasses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Nominal Pipe Size (NPS)
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {availableSizes.map((s) => (
                    <option key={s} value={s}>
                      {s}&quot;
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-10">
              <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
                Reference Dimensions
              </p>
              {row ? (
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300">
                    <thead className="bg-[#1B1F23] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Spec</th>
                        <th className="px-4 py-3 text-left">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">Size</td>
                        <td className="px-4 py-3">{row.size}</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">
                          Outside Diameter (OD)
                        </td>
                        <td className="px-4 py-3">{row.od}&quot;</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">
                          Bolt Circle Diameter
                        </td>
                        <td className="px-4 py-3">{row.bc}&quot;</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Bolt Count</td>
                        <td className="px-4 py-3">{row.bolts}</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">
                          Bolt Hole Diameter
                        </td>
                        <td className="px-4 py-3">{row.hole}</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">
                          Recommended Bolt Size
                        </td>
                        <td className="px-4 py-3">{row.bolt}</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">
                          Flange Thickness
                        </td>
                        <td className="px-4 py-3">{row.thickness}</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">
                          Raised Face Thickness
                        </td>
                        <td className="px-4 py-3">
                          {standard === "b16.5" &&
                          (klass === "150" || klass === "300")
                            ? '1/16"'
                            : '1/4"'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-[#F8F6F0] border border-[#B45309] p-6 rounded">
                  <p className="text-[#1B1F23] font-semibold mb-2">
                    Reference table not available for this combination.
                  </p>
                  <p className="text-gray-700">
                    Call (281) 484-8325 for a full lookup, or email{" "}
                    <a
                      href="mailto:sales@texasflange.com"
                      className="text-[#B45309] underline"
                    >
                      sales@texasflange.com
                    </a>{" "}
                    with your standard, class, and size. We will confirm
                    against the latest published edition.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> Dimensions shown are a reference
                drawn from common editions of ASME B16.5, B16.47, and AWWA
                C207. For issued-for-construction or QA documents, confirm
                against the latest published edition of the standard. See the
                full table at{" "}
                <a
                  href="https://www.texasflange.com/blog/flange-dimensions/?ref=pipingflange-new"
                  className="text-[#B45309] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  texasflange.com flange dimensions
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Related References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/standards/asme-flanges"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                ASME Flange Standards
              </h3>
              <p className="text-gray-300 text-sm">
                Summary of B16.5 and B16.47 coverage.
              </p>
            </Link>
            <Link
              href="/tools/bolt-torque-calculator"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Bolt Torque Calculator
              </h3>
              <p className="text-gray-300 text-sm">
                Pair bolt size with target torque.
              </p>
            </Link>
            <Link
              href="/products/flanges"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Flange Catalog
              </h3>
              <p className="text-gray-300 text-sm">
                Browse types and materials we stock.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Verified Cut Sheet?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We can pull verified mill cut sheets and MTRs for the exact flange
            you need. Call our sales desk for same-day pricing and lead times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#B45309] px-8 py-3 rounded font-semibold hover:bg-[#F8F6F0] transition"
            >
              Call (281) 484-8325
            </a>
            <Link
              href="/contact"
              className="bg-[#1B1F23] text-white px-8 py-3 rounded font-semibold hover:bg-black transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
