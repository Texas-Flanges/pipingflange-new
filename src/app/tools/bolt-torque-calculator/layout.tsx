import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/brandImage";

export const metadata: Metadata = {
  title: { absolute: "Bolt Torque Calculator (T = K x F x D) | Piping Flange" },
  description:
    "Estimate stud bolt torque from bolt size, grade, lubrication and target stress using the T = K x F x D model. A planning reference only.",
  openGraph: {
    title: "Bolt Torque Calculator (T = K x F x D) | Piping Flange",
    description:
      "Estimate stud bolt torque from bolt size, grade, lubrication and target stress using the T = K x F x D model. A planning reference only.",
    url: "./",
    images: [OG_IMAGE]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
