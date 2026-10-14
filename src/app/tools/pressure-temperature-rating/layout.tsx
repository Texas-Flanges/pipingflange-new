import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "ASME B16.5 Pressure-Temperature Rating Lookup | Piping Flange" },
  description:
    "Look up the maximum allowable working pressure for an ASME B16.5 flange by material group, class and temperature.",
  openGraph: {
    title: "ASME B16.5 Pressure-Temperature Rating Lookup | Piping Flange",
    description:
      "Look up the maximum allowable working pressure for an ASME B16.5 flange by material group, class and temperature.",
    url: "./"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
