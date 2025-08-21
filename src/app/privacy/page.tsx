"use client";

export default function PrivacyPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted mb-8">
          Your privacy matters. This policy explains what data we collect, how
          we use it, and your choices.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data We Collect</h2>
        <p className="mb-6">
          When you use our contact forms, booking tools, or demos, we collect
          the information you provide (like name, email, and message).
        </p>

        <h2 className="text-2xl font-semibold mb-4">How We Use Data</h2>
        <p className="mb-6">
          We use your data to respond to inquiries, schedule demos, and deliver
          services. We do not sell or share your information with third parties
          without consent.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data
          at any time by{" "}
          <a
            href="/contact"
            className="text-indigo-600 hover:underline"
          >
            contacting us
          </a>
          .
        </p>
      </div>
    </section>
  );
}
