import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/brandImage";

export const metadata: Metadata = {
  title: { absolute: "Flange Dimension Lookup | Piping Flange" },
  description:
    "Look up flange outside diameter, bolt circle, bolt count and thickness by size and pressure class.",
  openGraph: {
    title: "Flange Dimension Lookup | Piping Flange",
    description:
      "Look up flange outside diameter, bolt circle, bolt count and thickness by size and pressure class.",
    url: "./",
    images: [OG_IMAGE]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
