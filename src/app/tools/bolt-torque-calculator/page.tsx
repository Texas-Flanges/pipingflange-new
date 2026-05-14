"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type BoltMaterial = "B7" | "B7M" | "B8C1" | "L7";
type Lube = "neverseez" | "antiseize" | "moly" | "oil" | "dry";

const BOLT_SIZES: { label: string; diameter: number; area: number }[] = [
  { label: '1/2"', diameter: 0.5, area: 0.142 },
  { label: '5/8"', diameter: 0.625, area: 0.226 },
  { label: '3/4"', diameter: 0.75, area: 0.334 },
  { label: '7/8"', diameter: 0.875, area: 0.462 },
  { label: '1"', diameter: 1.0, area: 0.606 },
  { label: '1-1/8"', diameter: 1.125, area: 0.763 },
  { label: '1-1/4"', diameter: 1.25, area: 0.969 },
  { label: '1-3/8"', diameter: 1.375, area: 1.155 },
  { label: '1-1/2"', diameter: 1.5, area: 1.405 },
  { label: '1-5/8"', diameter: 1.625, area: 1.9 },
  { label: '1-3/4"', diameter: 1.75, area: 2.08 },
  { label: '2"', diameter: 2.0, area: 2.77 },
  { label: '2-1/4"', diameter: 2.25, area: 3.55 },
  { label: '2-1/2"', diameter: 2.5, area: 4.44 },
  { label: '2-3/4"', diameter: 2.75, area: 5.43 },
  { label: '3"', diameter: 3.0, area: 6.51 },
  { label: '3-1/4"', diameter: 3.25, area: 7.69 },
  { label: '3-1/2"', diameter: 3.5, area: 8.96 },
  { label: '4"', diameter: 4.0, area: 11.81 },
];

const LUBES: Record<Lube, { label: string; k: number }> = {
  neverseez: { label: "Never-Seez (K=0.15)", k: 0.15 },
  antiseize: { label: "Anti-Seize (K=0.18)", k: 0.18 },
  moly: { label: "Molybdenum disulfide (K=0.12)", k: 0.12 },
  oil: { label: "Heavy machine oil (K=0.21)", k: 0.21 },
  dry: { label: "Dry / unlubricated (K=0.28)", k: 0.28 },
};

function yieldStrengthKsi(material: BoltMaterial, diameter: number): number {
  if (material === "B7") {
    return diameter <= 2.5 ? 105 : 95;
  }
  if (material === "B7M") return 80;
  if (material === "B8C1") return 30;
  if (material === "L7") return 105;
  return 105;
}

export default function BoltTorqueCalculator() {
  const [sizeIndex, setSizeIndex] = useState<number>(4);
  const [material, setMaterial] = useState<BoltMaterial>("B7");
  const [lube, setLube] = useState<Lube>("neverseez");
  const [stressPct, setStressPct] = useState<number>(50);

  const result = useMemo(() => {
    const size = BOLT_SIZES[sizeIndex];
    if (!size) return null;
    const k = LUBES[lube]?.k ?? 0.18;
    const yieldKsi = yieldStrengthKsi(material, size.diameter);
    const yieldPsi = yieldKsi * 1000;
    const pct = Math.min(Math.max(stressPct, 30), 70) / 100;
    const stressPsi = yieldPsi * pct;
    const clampLoadLbs = stressPsi * size.area;
    const torqueInLbs = k * clampLoadLbs * size.diameter;
    const torqueFtLbs = torqueInLbs / 12;
    return {
      torqueFtLbs,
      clampLoadLbs,
      stressPsi,
      yieldPsi,
      k,
      diameter: size.diameter,
      area: size.area,
    };
  }, [sizeIndex, material, lube, stressPct]);

  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Tool 01
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Bolt Torque Calculator
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Estimate the torque required to develop a target bolt stress on a
            flange stud. Choose the bolt size, material grade, lubrication, and
            target stress as a percentage of yield. Results are a reference for
            planning. Always confirm against gasket manufacturer load
            requirements and the latest revision of ASME PCC-1.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded shadow border border-gray-200">
            <h2 className="text-2xl font-display font-bold text-[#1B1F23] mb-6">
              Inputs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Bolt Size (UNC)
                </label>
                <select
                  value={sizeIndex}
                  onChange={(e) => setSizeIndex(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {BOLT_SIZES.map((s, i) => (
                    <option key={s.label} value={i}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Bolt Material / Grade
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value as BoltMaterial)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option value="B7">A193 B7</option>
                  <option value="B7M">A193 B7M</option>
                  <option value="B8C1">A193 B8 Class 1</option>
                  <option value="L7">A320 L7</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Lubrication
                </label>
                <select
                  value={lube}
                  onChange={(e) => setLube(e.target.value as Lube)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {(Object.keys(LUBES) as Lube[]).map((k) => (
                    <option key={k} value={k}>
                      {LUBES[k].label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Target Stress: {stressPct}% of yield
                </label>
                <input
                  type="range"
                  min={30}
                  max={70}
                  step={1}
                  value={stressPct}
                  onChange={(e) => setStressPct(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="number"
                  min={30}
                  max={70}
                  value={stressPct}
                  onChange={(e) =>
                    setStressPct(
                      Math.min(70, Math.max(30, Number(e.target.value) || 50))
                    )
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
                />
              </div>
            </div>

            <div className="mt-10 bg-[#1B1F23] text-white p-8 rounded">
              <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
                Calculated Result
              </p>
              {result ? (
                <>
                  <div className="text-5xl font-display font-bold text-white mb-4">
                    {result.torqueFtLbs.toFixed(0)} ft-lbs
                  </div>
                  <p className="text-gray-300 mb-6">
                    Target wrench torque using T = K x F x D
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="bg-[#2A2E33] p-4 rounded">
                      <div className="text-gray-400 uppercase tracking-wider text-xs mb-1">
                        Clamp Load (F)
                      </div>
                      <div className="text-white font-semibold text-lg">
                        {result.clampLoadLbs.toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}{" "}
                        lbs
                      </div>
                    </div>
                    <div className="bg-[#2A2E33] p-4 rounded">
                      <div className="text-gray-400 uppercase tracking-wider text-xs mb-1">
                        Bolt Stress
                      </div>
                      <div className="text-white font-semibold text-lg">
                        {result.stressPsi.toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}{" "}
                        psi
                      </div>
                    </div>
                    <div className="bg-[#2A2E33] p-4 rounded">
                      <div className="text-gray-400 uppercase tracking-wider text-xs mb-1">
                        Friction Factor (K)
                      </div>
                      <div className="text-white font-semibold text-lg">
                        {result.k.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-gray-300">
                  Select inputs to see calculated torque.
                </div>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              <p className="mb-2">
                <strong>Disclaimer:</strong> This calculator returns a reference
                value based on the standard T = K x F x D model with published
                tensile stress areas and ASTM yield strengths. Actual joint
                makeup should follow the gasket manufacturer's published seating
                stress, ASME PCC-1 procedures, and any project torque tables.
                Use a calibrated tool and proper pattern.
              </p>
              <p>
                For full bolt dimensions and thread reference, see our blog
                article on{" "}
                <a
                  href="https://www.texasflange.com/blog/bolt-dimensions-explained-a-complete-guide-to-measuring-diameter-threads-and-length/?ref=pipingflange-new"
                  className="text-[#B45309] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bolt dimensions explained
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
            Related Tools and References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/tools/flange-dimension-calculator"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Flange Dimension Lookup
              </h3>
              <p className="text-gray-300 text-sm">
                Confirm bolt count and diameter before sizing torque.
              </p>
            </Link>
            <Link
              href="/tools/pressure-temperature-rating"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                P-T Rating Lookup
              </h3>
              <p className="text-gray-300 text-sm">
                Check class rating at service temperature.
              </p>
            </Link>
            <Link
              href="/resources/flange-dimensions"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Full Dimension Tables
              </h3>
              <p className="text-gray-300 text-sm">
                Browse published reference tables.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need Stud Bolts Pulled For Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We stock A193 B7, B7M, B8, and A320 L7 studs with matching nuts in
            standard and metric sizes. Call for same-day quoting and shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#B45309] px-8 py-3 rounded font-semibold hover:bg-[#F8F6F0] transition"
            >
              Call (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="bg-[#1B1F23] text-white px-8 py-3 rounded font-semibold hover:bg-black transition"
            >
              Email sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
