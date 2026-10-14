import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Piping Flange Technical Resources",
  description:
    "Technical articles on flange selection, API and ASME standards, bolt torque, gasket sealing, and waterworks piping.",
};

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#FDBA74] font-semibold uppercase tracking-wider text-sm mb-4">
            Technical Resources
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Piping Flange Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Field-tested technical writing for engineers, buyers, and designers
            working across the full pressure spectrum. Specifications,
            selection logic, and the kind of practical detail that does not
            make it into the catalog.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-10">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <span className="inline-block bg-[#B45309] text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {post.category}
                  </span>
                  <span className="text-gray-600">{formatDate(post.date)}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">{post.readTime}</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B1F23] mb-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#B45309] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#B45309] font-semibold hover:underline"
                >
                  Read the full article
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="font-display text-2xl font-bold text-[#1B1F23] mb-4">
              Looking for more technical reference?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The{" "}
              <Link href="/tools" className="text-[#B45309] font-semibold hover:underline">
                tools section
              </Link>{" "}
              covers bolt torque and flange dimensions. The{" "}
              <Link href="/resources" className="text-[#B45309] font-semibold hover:underline">
                resources area
              </Link>{" "}
              has standard reference tables, material crosswalks, and
              specification guides for ASME, AWWA, API, and DIN flanges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/tools"
                className="inline-block bg-[#1B1F23] text-white px-6 py-3 rounded font-semibold hover:bg-[#B45309] transition-colors"
              >
                Engineering Tools
              </Link>
              <Link
                href="/resources"
                className="inline-block border-2 border-[#1B1F23] text-[#1B1F23] px-6 py-3 rounded font-semibold hover:bg-[#1B1F23] hover:text-white transition-colors"
              >
                Reference Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
