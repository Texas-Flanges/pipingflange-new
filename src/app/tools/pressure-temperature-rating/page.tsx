"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type MaterialGroup =
  | "1.1"
  | "1.5"
  | "2.1"
  | "2.2"
  | "2.3"
  | "1.9"
  | "1.10"
  | "1.13";

type ClassKey = "150" | "300" | "600" | "900" | "1500" | "2500";

type RatingTable = Partial<Record<number, Record<ClassKey, number>>>;

const MATERIALS: Record<
  MaterialGroup,
  { label: string; table?: RatingTable; maxTempF: number; note?: string }
> = {
  "1.1": {
    label: "Group 1.1 - A105, A350 LF2, A516-70 (Carbon Steel)",
    maxTempF: 1000,
    table: {
      100: {
        "150": 285,
        "300": 740,
        "600": 1480,
        "900": 2220,
        "1500": 3705,
        "2500": 6170,
      },
      200: {
        "150": 260,
        "300": 680,
        "600": 1360,
        "900": 2035,
        "1500": 3395,
        "2500": 5660,
      },
      300: {
        "150": 230,
        "300": 655,
        "600": 1310,
        "900": 1965,
        "1500": 3270,
        "2500": 5450,
      },
      400: {
        "150": 200,
        "300": 635,
        "600": 1265,
        "900": 1900,
        "1500": 3170,
        "2500": 5280,
      },
      500: {
        "150": 170,
        "300": 600,
        "600": 1205,
        "900": 1810,
        "1500": 3015,
        "2500": 5025,
      },
      600: {
        "150": 140,
        "300": 550,
        "600": 1100,
        "900": 1655,
        "1500": 2755,
        "2500": 4595,
      },
      700: {
        "150": 110,
        "300": 535,
        "600": 1065,
        "900": 1600,
        "1500": 2665,
        "2500": 4440,
      },
      800: {
        "150": 80,
        "300": 410,
        "600": 825,
        "900": 1235,
        "1500": 2055,
        "2500": 3430,
      },
      900: {
        "150": 50,
        "300": 270,
        "600": 535,
        "900": 805,
        "1500": 1340,
        "2500": 2230,
      },
      1000: {
        "150": 20,
        "300": 170,
        "600": 345,
        "900": 515,
        "1500": 860,
        "2500": 1430,
      },
    },
  },
  "1.5": {
    label: "Group 1.5 - A350 LF3 (Low-Temp Carbon)",
    maxTempF: 650,
    note: "Consult full ASME B16.5 tables for verified ratings.",
  },
  "2.1": {
    label: "Group 2.1 - F304 / F304L (Austenitic Stainless)",
    maxTempF: 1500,
    table: {
      100: {
        "150": 275,
        "300": 720,
        "600": 1440,
        "900": 2160,
        "1500": 3600,
        "2500": 6000,
      },
      200: {
        "150": 235,
        "300": 620,
        "600": 1240,
        "900": 1860,
        "1500": 3095,
        "2500": 5160,
      },
      400: {
        "150": 195,
        "300": 515,
        "600": 1025,
        "900": 1540,
        "1500": 2570,
        "2500": 4280,
      },
      600: {
        "150": 170,
        "300": 465,
        "600": 925,
        "900": 1390,
        "1500": 2315,
        "2500": 3860,
      },
      800: {
        "150": 140,
        "300": 430,
        "600": 860,
        "900": 1290,
        "1500": 2150,
        "2500": 3580,
      },
      1000: {
        "150": 110,
        "300": 380,
        "600": 755,
        "900": 1135,
        "1500": 1890,
        "2500": 3150,
      },
      1200: {
        "150": 75,
        "300": 260,
        "600": 515,
        "900": 775,
        "1500": 1290,
        "2500": 2155,
      },
      1500: {
        "150": 20,
        "300": 60,
        "600": 125,
        "900": 185,
        "1500": 310,
        "2500": 515,
      },
    },
  },
  "2.2": {
    label: "Group 2.2 - F316 / F316L (Austenitic Stainless)",
    maxTempF: 1500,
    note: "Consult full ASME B16.5 tables for verified ratings.",
  },
  "2.3": {
    label: "Group 2.3 - F321 (Austenitic Stainless)",
    maxTempF: 1500,
    note: "Consult full ASME B16.5 tables for verified ratings.",
  },
  "1.9": {
    label: "Group 1.9 - F11 (1-1/4 Cr - 1/2 Mo)",
    maxTempF: 1100,
    table: {
      100: {
        "150": 290,
        "300": 750,
        "600": 1500,
        "900": 2250,
        "1500": 3750,
        "2500": 6250,
      },
      400: {
        "150": 200,
        "300": 730,
        "600": 1455,
        "900": 2185,
        "1500": 3640,
        "2500": 6070,
      },
      600: {
        "150": 140,
        "300": 685,
        "600": 1370,
        "900": 2055,
        "1500": 3430,
        "2500": 5710,
      },
      800: {
        "150": 80,
        "300": 595,
        "600": 1185,
        "900": 1775,
        "1500": 2960,
        "2500": 4935,
      },
      1000: {
        "150": 20,
        "300": 270,
        "600": 540,
        "900": 805,
        "1500": 1345,
        "2500": 2240,
      },
      1100: {
        "150": 10,
        "300": 120,
        "600": 240,
        "900": 355,
        "1500": 590,
        "2500": 985,
      },
    },
  },
  "1.10": {
    label: "Group 1.10 - F22 (2-1/4 Cr - 1 Mo)",
    maxTempF: 1100,
    note: "Consult full ASME B16.5 tables for verified ratings.",
  },
  "1.13": {
    label: "Group 1.13 - F91 (9 Cr - 1 Mo - V)",
    maxTempF: 1200,
    note: "Consult full ASME B16.5 tables for verified ratings.",
  },
};

const CLASSES: ClassKey[] = ["150", "300", "600", "900", "1500", "2500"];

function interpolate(
  table: RatingTable,
  classKey: ClassKey,
  tempF: number
): { value: number | null; usedTemps: [number, number] | [number] } {
  const temps = Object.keys(table)
    .map(Number)
    .sort((a, b) => a - b);
  if (temps.length === 0) return { value: null, usedTemps: [0] };

  if (tempF <= temps[0]) {
    const row = table[temps[0]];
    return { value: row ? row[classKey] : null, usedTemps: [temps[0]] };
  }
  if (tempF >= temps[temps.length - 1]) {
    const row = table[temps[temps.length - 1]];
    return {
      value: row ? row[classKey] : null,
      usedTemps: [temps[temps.length - 1]],
    };
  }
  for (let i = 0; i < temps.length - 1; i++) {
    const t1 = temps[i];
    const t2 = temps[i + 1];
    if (tempF >= t1 && tempF <= t2) {
      const r1 = table[t1]?.[classKey];
      const r2 = table[t2]?.[classKey];
      if (r1 == null || r2 == null) return { value: null, usedTemps: [t1, t2] };
      const frac = (tempF - t1) / (t2 - t1);
      const value = r1 + (r2 - r1) * frac;
      return { value, usedTemps: [t1, t2] };
    }
  }
  return { value: null, usedTemps: [0] };
}

export default function PressureTemperatureRating() {
  const [material, setMaterial] = useState<MaterialGroup>("1.1");
  const [klass, setKlass] = useState<ClassKey>("150");
  const [tempF, setTempF] = useState<number>(100);

  const result = useMemo(() => {
    const m = MATERIALS[material];
    if (!m.table) {
      return {
        status: "no-table" as const,
        note: m.note ?? "Consult full ASME B16.5 tables.",
        maxTempF: m.maxTempF,
      };
    }
    if (tempF > m.maxTempF) {
      return {
        status: "over-temp" as const,
        maxTempF: m.maxTempF,
      };
    }
    const { value, usedTemps } = interpolate(m.table, klass, tempF);
    if (value == null) {
      return { status: "no-data" as const };
    }
    return {
      status: "ok" as const,
      value,
      usedTemps,
    };
  }, [material, klass, tempF]);

  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
            Tool 03
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Pressure-Temperature Rating Lookup
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Look up the maximum allowable working pressure (PSIG) at a given
            service temperature for ASME B16.5 flanges. Choose a material
            group, pressure class, and temperature to interpolate between
            published rating points.
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
                  Material Group
                </label>
                <select
                  value={material}
                  onChange={(e) =>
                    setMaterial(e.target.value as MaterialGroup)
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {(Object.keys(MATERIALS) as MaterialGroup[]).map((k) => (
                    <option key={k} value={k}>
                      {MATERIALS[k].label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Pressure Class
                </label>
                <select
                  value={klass}
                  onChange={(e) => setKlass(e.target.value as ClassKey)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {CLASSES.map((c) => (
                    <option key={c} value={c}>
                      Class {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Service Temperature: {tempF} F
                </label>
                <input
                  type="range"
                  min={-20}
                  max={1500}
                  step={10}
                  value={tempF}
                  onChange={(e) => setTempF(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="number"
                  min={-20}
                  max={1500}
                  value={tempF}
                  onChange={(e) =>
                    setTempF(
                      Math.min(1500, Math.max(-20, Number(e.target.value) || 0))
                    )
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
                />
              </div>
            </div>

            <div className="mt-10 bg-[#1B1F23] text-white p-8 rounded">
              <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">
                Maximum Allowable Working Pressure
              </p>
              {result.status === "ok" && (
                <>
                  <div className="text-5xl font-display font-bold text-white mb-4">
                    {result.value.toFixed(0)} PSIG
                  </div>
                  <p className="text-gray-300">
                    At {tempF} F for Class {klass},{" "}
                    {MATERIALS[material].label}.
                  </p>
                  {result.usedTemps.length === 2 && (
                    <p className="text-gray-400 text-sm mt-2">
                      Interpolated between {result.usedTemps[0]} F and{" "}
                      {result.usedTemps[1]} F published rating points.
                    </p>
                  )}
                </>
              )}
              {result.status === "over-temp" && (
                <>
                  <div className="text-3xl font-display font-bold text-[#B45309] mb-2">
                    Not Recommended
                  </div>
                  <p className="text-gray-300">
                    Service temperature exceeds the published ceiling for this
                    material group ({result.maxTempF} F). Choose an
                    appropriate alloy or call (281) 484-8325 to discuss
                    options.
                  </p>
                </>
              )}
              {result.status === "no-table" && (
                <>
                  <div className="text-3xl font-display font-bold text-[#B45309] mb-2">
                    Table Not Loaded
                  </div>
                  <p className="text-gray-300">
                    {result.note} Call (281) 484-8325 or email{" "}
                    <a
                      href="mailto:sales@texasflange.com"
                      className="text-[#B45309] underline"
                    >
                      sales@texasflange.com
                    </a>{" "}
                    for a verified lookup.
                  </p>
                </>
              )}
              {result.status === "no-data" && (
                <p className="text-gray-300">
                  No data available for that combination. Please try a
                  different class or temperature.
                </p>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              <p className="mb-2">
                <strong>Disclaimer:</strong> Values reflect a simplified
                interpolation of common ASME B16.5 rating tables. For final
                design and code compliance, use the latest published edition
                of ASME B16.5 and confirm material group assignment from the
                actual heat MTR.
              </p>
              <p>
                For background on flange pressure ratings, see our{" "}
                <a
                  href="https://www.texasflange.com/blog/flange-pressure-ratings-explained/?ref=pipingflange-new"
                  className="text-[#B45309] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pressure ratings guide
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
            Related Tools
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
                Match the class rating to physical dimensions.
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
                Plan torque for the stud bolts on the joint.
              </p>
            </Link>
            <Link
              href="/standards/asme-flanges"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                ASME Flange Standards
              </h3>
              <p className="text-gray-300 text-sm">
                Background on B16.5 material groups.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need Help Confirming a Rating?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our sales desk can verify material group assignment from your MTR
            and confirm the rating against your design conditions. Call or
            email for a same-day check.
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
