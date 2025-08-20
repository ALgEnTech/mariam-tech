"use client";

export default function Pricing() {
  return (
    <section className="py-24 px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        Simple, Transparent Pricing
      </h1>
      <p className="text-lg text-muted max-w-2xl mx-auto mb-16">
        Choose the plan that fits your business. All plans come with dedicated support
        and lightning-fast delivery.
      </p>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Starter */}
        <div className="p-8 rounded-2xl bg-white/5 shadow-soft">
          <h2 className="text-2xl font-bold mb-2">Starter</h2>
          <p className="text-muted mb-6">Perfect for individuals & small teams</p>
          <p className="text-4xl font-extrabold mb-6">$499</p>
          <ul className="text-left space-y-3 mb-8">
            <li>✓ 1 AI Assistant or Website</li>
            <li>✓ Basic Analytics</li>
            <li>✓ Email Support</li>
          </ul>
          <a
            href="/contact"
            className="inline-block w-full rounded-xl px-6 py-3 bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Growth */}
        <div className="p-8 rounded-2xl bg-brand-600 text-white shadow-lg scale-105">
          <h2 className="text-2xl font-bold mb-2">Growth</h2>
          <p className="opacity-90 mb-6">Best for growing businesses</p>
          <p className="text-4xl font-extrabold mb-6">$1,499</p>
          <ul className="text-left space-y-3 mb-8">
            <li>✓ Up to 3 AI Assistants or Websites</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Priority Support</li>
          </ul>
          <a
            href="/contact"
            className="inline-block w-full rounded-xl px-6 py-3 bg-white text-brand-600 font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-2xl bg-white/5 shadow-soft">
          <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
          <p className="text-muted mb-6">For large orgs & custom solutions</p>
          <p className="text-4xl font-extrabold mb-6">Custom</p>
          <ul className="text-left space-y-3 mb-8">
            <li>✓ Unlimited Projects</li>
            <li>✓ Dedicated Account Manager</li>
            <li>✓ 24/7 Premium Support</li>
          </ul>
          <a
            href="/contact"
            className="inline-block w-full rounded-xl px-6 py-3 border border-white/20 hover:bg-white/5 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Custom message */}
      <p className="mt-12 text-sm text-muted">
        💡 Need something unique? Reach out and we’ll craft a custom package for you.
      </p>
    </section>
  );
}
