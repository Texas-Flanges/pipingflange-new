import { ImageResponse } from "next/og";
import { BRAND, Wordmark, loadDisplayFont } from "@/lib/brandImage";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.DARK,
          fontFamily: "Playfair Display"
        }}
      >
        <Wordmark size={92} />
      </div>
    ),
    { width: 512, height: 512, fonts: await loadDisplayFont("PIPINGFLANGE") }
  );
}
