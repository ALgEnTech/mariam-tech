import { HERO_LINE, CALENDLY_URL } from "@/lib/constants";

export default function Home() {
  return (
    <section className="py-20">
      {/* Hero Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        {HERO_LINE}
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg max-w-2xl text-muted">
        Answer questions, capture leads, and launch a fast, accessible site. 
        Book a 15-min call to see how Mariam Tech can help you.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-4">
        <a
          href={CALENDLY_URL}
          className="rounded-xl px-6 py-3 bg-brand-600 text-white font-medium hover:bg-brand-700 transition"
        >
          Book a 15-min Plan Call
        </a>
        <a
          href="/pricing"
          className="rounded-xl px-6 py-3 border border-white/10 hover:bg-white/5 transition"
        >
          See Pricing
        </a>
      </div>
    </section>
  );
}
