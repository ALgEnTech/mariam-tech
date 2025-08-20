import { HERO_LINE, CALENDLY_URL } from "@/lib/constants";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 
                        bg-gradient-to-b from-bg via-bg to-black/40 rounded-2xl shadow-soft">
      {/* Hero Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
        {HERO_LINE}
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-muted">
        Practical AI services and lightning-fast websites.  
        Book a 15-min plan call to see how Mariam Tech can help your business grow.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href={CALENDLY_URL}
          className="rounded-2xl px-8 py-4 bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
        >
          Book a 15-min Plan Call
        </a>
        <a
          href="/pricing"
          className="rounded-2xl px-8 py-4 border border-white/10 hover:bg-white/5 transition"
        >
          See Pricing
        </a>
      </div>
    </section>
  );
}
