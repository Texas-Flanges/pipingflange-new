/** @type {import('next').NextConfig} */
const TF = "https://texasflange.com";
const REF = "?ref=pipingflange";

const sellerRedirects = [
  ["/about", "/about/"],
  ["/contact", "/contact-us/"],
  ["/products", "/industrial-flange-catalog/"],
  ["/products/flanges", "/flange-types-basics/"],
  ["/products/fittings", "/butt-weld-fittings/"],
  ["/products/custom-machining", "/custom-flanges/"],
  ["/industries", "/flange-types-basics/"],
  ["/industries/oil-gas", "/oil-gas-industry-flanges/"],
  ["/industries/petrochemical", "/petrochemical-flanges/"],
  ["/industries/chemical-processing", "/petrochemical-flanges/"],
  ["/industries/power-generation", "/power-plant-industries-flanges/"],
  ["/industries/waterworks", "/waterworks-flanges/"],
  ["/industries/food-beverage", "/food-beverage-industries-flanges/"],
  ["/industries/hvac", "/blog/flanges-in-commercial-hvac-what-goes-where-in-the-mechanical-room/"],
  ["/industries/data-centers", "/blog/flanges-for-data-center-cooling/"],
  ["/industries/mining", "/flange-types-basics/"],
  ["/industries/pulp-paper", "/flange-types-basics/"],
  ["/industries/agriculture", "/flange-types-basics/"],
  ["/industries/marine", "/flange-types-basics/"],
  ["/tools/pressure-temperature-rating", "/blog/pipe-flange-pressure-classes-per-asme-b16-5/"]
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  async redirects() {
    return sellerRedirects.flatMap(([from, to]) => [
      { source: from, destination: `${TF}${to}${REF}`, permanent: true },
      { source: `${from}/`, destination: `${TF}${to}${REF}`, permanent: true }
    ]);
  }
};

module.exports = nextConfig;
