"use client";

export default function Pricing() {
  return (
    <section className="py-24 px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        Simple, Transparent Pricing
      </h1>
      <p className="text-lg text-muted max-w-2xl mx-auto mb-16">
        Choose the plan that fits your business. All plans come with dedicated
        support and lightning-fast delivery.
      </p>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter Plan */}
        <div className="rounded-2xl shadow-lg bg-neutral-900 p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-sm text-muted mb-6">
            Perfect for individuals & small teams
          </p>
          <div className="text-4xl font-extrabold mb-6">$499</div>
          <ul className="text-left text-sm mb-8 space-y-2">
            <li>✓ 1 AI Assistant or Website</li>
            <li>✓ Basic Analytics</li>
            <li>✓ Email Support</li>
          </ul>
          <a
            href="/contact?plan=Starter"
            className="mt-auto inline-block px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Growth Plan (highlighted) */}
        <div className="rounded-2xl shadow-lg bg-white text-black p-8 flex flex-col border-2 border-indigo-600">
          <h3 className="text-xl font-bold mb-2">Growth</h3>
          <p className="text-sm text-muted mb-6">
            Best for growing businesses
          </p>
          <div className="text-4xl font-extrabold mb-6">$1,499</div>
          <ul className="text-left text-sm mb-8 space-y-2">
            <li>✓ Up to 3 AI Assistants or Websites</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Priority Support</li>
          </ul>
          <a
            href="/contact?plan=Growth"
            className="mt-auto inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-2xl shadow-lg bg-neutral-900 p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="text-sm text-muted mb-6">
            For large orgs & custom solutions
          </p>
          <div className="text-4xl font-extrabold mb-6">Custom</div>
          <ul className="text-left text-sm mb-8 space-y-2">
            <li>✓ Unlimited Projects</li>
            <li>✓ Dedicated Account Manager</li>
            <li>✓ 24/7 Premium Support</li>
          </ul>
          <a
            href="/contact?plan=Enterprise"
            className="mt-auto inline-block px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Note */}
      <p className="mt-12 text-sm text-muted">
        💡 Need something unique? Reach out and we’ll craft a custom package
        for you.
      </p>
    </section>
  );
}
