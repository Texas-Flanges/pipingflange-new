import relatedResources from "@/data/related-resources.json";

type RelatedLink = {
  url: string;
  label: string;
  note: string;
};

const { heading, links } = relatedResources as {
  heading: string;
  links: RelatedLink[];
};

export default function RelatedResources() {
  if (links.length === 0) return null;

  return (
    <section
      aria-labelledby="related-resources"
      className="bg-cream py-20 px-4 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="related-resources"
          className="text-4xl font-display font-bold mb-8 text-ink"
        >
          {heading}
        </h2>
        <ul className="space-y-4 max-w-3xl">
          {links.map((link) => (
            <li key={link.url} className="text-lg text-gray-700 leading-relaxed">
              <a
                href={link.url}
                className="text-[#B45309] underline hover:no-underline"
              >
                {link.label}
              </a>
              {` — ${link.note}`}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
