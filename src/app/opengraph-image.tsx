import { ImageResponse } from "next/og";
import { OG_TAGLINE, ShareImage, loadDisplayFont } from "@/lib/brandImage";

export const alt = "Piping Flange: Piping Flanges Across the Full Pressure Spectrum";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<ShareImage />, {
    ...size,
    fonts: await loadDisplayFont(`PIPINGFLANGE${OG_TAGLINE}`)
  });
}
