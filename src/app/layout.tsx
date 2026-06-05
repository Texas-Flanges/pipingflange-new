import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Piping Flange | Industrial Pipe Flanges from Lightweight to API 20K",
    template: "%s | Piping Flange"
  },
  description:
    "Comprehensive piping flange resource covering the full pressure spectrum. Class 125LW lightweight through API 6BX 20,000 psi. Carbon, stainless, alloy. ASME, ANSI, AWWA, API standards.",
  keywords:
    "piping flanges, pipe flanges, industrial flanges, weld neck flanges, blind flanges, slip on flanges, lightweight flanges, AWWA C207, API 6A flanges, ASME B16.5, ASME B16.47, carbon steel flanges, stainless steel flanges, alloy flanges, PVF",
  metadataBase: new URL("https://pipingflange.texasflange.com"),
  openGraph: {
    type: "website",
    siteName: "Piping Flange",
    title: "Piping Flange | The Full Pressure Spectrum",
    description:
      "Lightweight Class 125LW through API 20K. Carbon, stainless, alloy. Every standard, every size, every pressure class.",
    url: "https://pipingflange.texasflange.com"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1B1F23" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Piping Flange",
              url: "https://pipingflange.texasflange.com",
              logo: "https://pipingflange.texasflange.com/logo.png",
              description:
                "Industrial piping flange reference. Lightweight to high-pressure API. Carbon, stainless, alloy materials.",
              telephone: "+1-281-484-8325",
              email: "sales@texasflange.com",
              address: {
                "@type": "PostalAddress",
                postOfficeBoxNumber: "PO Box 2889",
                addressLocality: "Pearland",
                addressRegion: "TX",
                postalCode: "77588",
                addressCountry: "US"
              }
            })
          }}
        />
      </head>
      <body className="bg-cream text-ink font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
