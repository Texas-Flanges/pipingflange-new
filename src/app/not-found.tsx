import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#1B1F23] text-white py-32 px-4 min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <p className="uppercase tracking-wider text-[#B45309] text-sm mb-3">404</p>
        <h1 className="text-5xl font-display font-bold text-white mb-6">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-8">
          The page you are looking for moved, was renamed, or never existed. Either way, the flanges are still here.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="bg-[#B45309] text-white px-6 py-3 rounded font-semibold hover:bg-[#92400E] transition">
            Home
          </Link>
          <Link href="/products/flanges" className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition">
            Browse Flanges
          </Link>
          <Link href="/contact" className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
