export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Piping Flange."
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-300 mt-3">Last updated: January 2026</p>
        </div>
      </section>

      <section className="bg-cream py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            This privacy policy describes how Piping Flange (the "site") collects, uses, and protects
            information from visitors. By using the site you agree to the practices described here.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8">Information This Site Collects</h2>
          <p>
            This site collects information you voluntarily provide when making contact for quotes,
            technical questions, or correspondence. This typically includes name, company, email, phone, and
            project details. This site also collects basic analytics about site usage such as pages
            viewed, referring source, and general device type.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8">How This Site Uses Information</h2>
          <p>
            Information you submit is used only to respond to your inquiry, prepare quotes, deliver
            requested products and documentation, and maintain a record of this site's correspondence. This
            site does not sell or rent personal information.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8">Cookies</h2>
          <p>
            The site uses standard cookies and analytics scripts to measure usage. You may disable
            cookies in your browser, though some site features may not work as expected.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8">Third Parties</h2>
          <p>
            Some site analytics and hosting are provided by third party platforms (such as Vercel and
            Google Analytics). These providers have their own privacy policies. This site shares
            information with them only as needed to operate the site.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8">Data Retention</h2>
          <p>
            Quote requests and correspondence are retained for as long as needed to complete the
            related work, satisfy record keeping obligations, and follow up on related future projects.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8">Your Choices</h2>
          <p>
            You may request a copy of the information this site has collected about you, ask for it
            to be corrected, or ask for it to be deleted. Requests can be sent to sales@texasflange.com.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8">Contact</h2>
          <p>
            Questions about this policy can be sent to sales@texasflange.com.
          </p>
        </div>
      </section>
    </>
  );
}
