import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Flange Dimension Lookup | Piping Flange" },
  description:
    "Look up flange outside diameter, bolt circle, bolt count and thickness by size and pressure class.",
  openGraph: {
    title: "Flange Dimension Lookup | Piping Flange",
    description:
      "Look up flange outside diameter, bolt circle, bolt count and thickness by size and pressure class.",
    url: "./"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
