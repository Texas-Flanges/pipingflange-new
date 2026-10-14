const DARK = "#1B1F23";
const COPPER_LIGHT = "#FDBA74";

// Loads Playfair Display (the site's display font) for next/og. Falls back to
// the built-in font if Google Fonts can't be reached at build time.
export async function loadDisplayFont(text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&text=${encodeURIComponent(text)}`
      )
    ).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!src) return [];
    const data = await (await fetch(src[1])).arrayBuffer();
    return [{ name: "Playfair Display", data, weight: 700 as const, style: "normal" as const }];
  } catch {
    return [];
  }
}

export function Wordmark({ size }: { size: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
      <span style={{ color: "#FFFFFF", fontSize: size, letterSpacing: size * 0.04 }}>PIPING</span>
      <span style={{ color: COPPER_LIGHT, fontSize: size, letterSpacing: size * 0.04, marginTop: size * 0.12 }}>
        FLANGE
      </span>
    </div>
  );
}

export const OG_TAGLINE = "Piping Flanges Across the Full Pressure Spectrum";

export function ShareImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: DARK,
        fontFamily: "Playfair Display",
        borderBottom: "12px solid #B45309"
      }}
    >
      <Wordmark size={120} />
      <div style={{ color: "#FFFFFF", fontSize: 44, marginTop: 56 }}>{OG_TAGLINE}</div>
    </div>
  );
}

export const BRAND = { DARK, COPPER_LIGHT };

// For pages that set their own openGraph object, which replaces the root one.
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Piping Flange: Piping Flanges Across the Full Pressure Spectrum"
};
