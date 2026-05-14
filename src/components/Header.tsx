"use client";

import Link from "next/link";
import { useState } from "react";

const industries = [
  { slug: "oil-gas", name: "Oil & Gas" },
  { slug: "petrochemical", name: "Petrochemical" },
  { slug: "power-generation", name: "Power Generation" },
  { slug: "waterworks", name: "Water & Wastewater" },
  { slug: "chemical-processing", name: "Chemical Processing" },
  { slug: "mining", name: "Mining & Minerals" },
  { slug: "pulp-paper", name: "Pulp & Paper" },
  { slug: "food-beverage", name: "Food & Beverage" },
  { slug: "agriculture", name: "Agriculture" },
  { slug: "hvac", name: "HVAC & Mechanical" },
  { slug: "marine", name: "Marine & Shipbuilding" },
  { slug: "data-centers", name: "Data Centers" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#1B1F23] text-white sticky top-0 z-50 border-b border-[#B45309]/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-display text-2xl tracking-wide">
          PIPING<span className="text-[#B45309]">FLANGE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          <NavDropdown
            label="Products"
            items={[
              { href: "/products/flanges", label: "Flanges" },
              { href: "/products/fittings", label: "Pipe Fittings" },
              { href: "/products/custom-machining", label: "Custom Machining" }
            ]}
          />
          <NavDropdown
            label="Standards"
            items={[
              { href: "/standards/asme-flanges", label: "ASME" },
              { href: "/standards/ansi-flanges", label: "ANSI" },
              { href: "/standards/awwa-flanges", label: "AWWA" },
              { href: "/standards/din-flanges", label: "DIN" }
            ]}
          />
          <NavDropdown
            label="Materials"
            items={[
              { href: "/materials/carbon-steel", label: "Carbon Steel" },
              { href: "/materials/stainless-steel", label: "Stainless Steel" },
              { href: "/materials/alloy-steel", label: "Alloy Steel" },
              { href: "/materials/exotic-alloys", label: "Exotic Alloys" }
            ]}
          />
          <NavDropdown
            label="Industries"
            items={industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name }))}
          />
          <NavDropdown
            label="Resources"
            items={[
              { href: "/resources/flange-dimensions", label: "Flange Dimensions" },
              { href: "/resources/cad-drawings", label: "CAD Drawings" },
              { href: "/resources/domestic-vs-import", label: "Domestic vs Import" },
              { href: "/resources/technical-specs", label: "Technical Specs" },
              { href: "/tools", label: "Tools & Calculators" }
            ]}
          />
          <Link href="/blog" className="px-3 py-2 text-white hover:text-[#B45309]">
            Blog
          </Link>
          <Link href="/about" className="px-3 py-2 text-white hover:text-[#B45309]">
            About
          </Link>
          <Link href="/contact" className="px-3 py-2 text-white hover:text-[#B45309]">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-block bg-[#B45309] text-white px-4 py-2 rounded font-semibold text-sm hover:bg-[#92400E] transition"
        >
          Request Quote
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#1B1F23] px-4 pb-4 space-y-2 text-sm">
          <Link href="/products" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            Products
          </Link>
          <Link href="/standards" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            Standards
          </Link>
          <Link href="/materials" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            Materials
          </Link>
          <Link href="/industries" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            Industries
          </Link>
          <Link href="/resources" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            Resources
          </Link>
          <Link href="/blog" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link href="/about" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block py-2 text-white" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="block py-2 bg-[#B45309] text-white text-center rounded mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="px-3 py-2 text-white hover:text-[#B45309] flex items-center gap-1">
        {label}
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-white shadow-xl rounded min-w-[220px] py-2 z-50 border-t-2 border-[#B45309]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-[#1B1F23] hover:bg-[#F8F6F0] hover:text-[#B45309]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
