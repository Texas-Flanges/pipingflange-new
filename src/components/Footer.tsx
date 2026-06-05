import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B1F23] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-display text-xl mb-3">
            PIPING<span className="text-[#B45309]">FLANGE</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Industrial pipe flange reference. Lightweight to high-pressure API.
            Carbon, stainless, alloy. Every standard, every size.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products/flanges" className="text-gray-300 hover:text-[#B45309]">Flanges</Link></li>
            <li><Link href="/products/fittings" className="text-gray-300 hover:text-[#B45309]">Pipe Fittings</Link></li>
            <li><Link href="/products/custom-machining" className="text-gray-300 hover:text-[#B45309]">Custom Machining</Link></li>
            <li><Link href="/materials" className="text-gray-300 hover:text-[#B45309]">Materials</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/flange-dimensions" className="text-gray-300 hover:text-[#B45309]">Flange Dimensions</Link></li>
            <li><Link href="/resources/cad-drawings" className="text-gray-300 hover:text-[#B45309]">CAD Drawings</Link></li>
            <li><Link href="/tools" className="text-gray-300 hover:text-[#B45309]">Tools & Calculators</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-[#B45309]">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>PO Box 2889, Pearland, TX 77588</li>
            <li><a href="tel:+12814848325" className="text-gray-300 hover:text-[#B45309]">(281) 484-8325</a></li>
            <li><a href="mailto:sales@texasflange.com" className="text-gray-300 hover:text-[#B45309]">sales@texasflange.com</a></li>
            <li>Mon - Fri: 8am - 5pm CST</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2026 Piping Flange. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-[#B45309]">Privacy Policy</Link>
            <Link href="/about" className="text-gray-400 hover:text-[#B45309]">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-[#B45309]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
