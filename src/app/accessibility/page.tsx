"use client";

export default function AccessibilityPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Accessibility Statement
        </h1>
        <p className="text-lg text-muted mb-8">
          Mariam Tech is committed to making our websites and applications
          accessible to everyone, including people with disabilities.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Standards</h2>
        <p className="mb-6">
          We design to meet <strong>WCAG 2.2 AA</strong> standards. That means
          our sites are usable with screen readers, keyboard navigation, and
          provide sufficient color contrast.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Testing</h2>
        <p className="mb-6">
          Each project is tested with automated tools and manual checks before
          launch. We also provide an accessibility statement for every client
          site.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
        <p>
          If you encounter any accessibility issues, please{" "}
          <a
            href="/contact"
            className="text-indigo-600 hover:underline"
          >
            contact us
          </a>
          . We will respond and resolve issues promptly.
        </p>
      </div>
    </section>
  );
}
