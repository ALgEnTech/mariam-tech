"use client";

import { motion } from "framer-motion";
import { HERO_LINE, CALENDLY_URL } from "@/lib/constants";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 
                        bg-gradient-to-b from-bg via-bg to-black/40 rounded-2xl shadow-soft">

      {/* Hero Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {HERO_LINE}
      </motion.h1>

      {/* Subtext */}
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-muted">
        Practical AI services and lightning-fast websites.  
        Book a 15-min plan call to see how Maryam Tech can help your business grow.
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

      {/* Bento Grid */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
          <h2 className="text-xl font-bold">Everyday Agents</h2>
          <p className="mt-2 text-muted">AI assistants that capture leads, answer FAQs, and save time.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
          <h2 className="text-xl font-bold">Modern Webworks</h2>
          <p className="mt-2 text-muted">Fast, mobile-friendly websites that pass Core Web Vitals.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
          <h2 className="text-xl font-bold">TenX AI Academy</h2>
          <p className="mt-2 text-muted">Workshops to help your team finish tasks 10× faster.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
          <h2 className="text-xl font-bold">Everkind Voices</h2>
          <p className="mt-2 text-muted">Legacy avatars that preserve stories and voices.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
          <h2 className="text-xl font-bold">Maryam Build</h2>
          <p className="mt-2 text-muted">Quick MVP sprints for apps and tools.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
          <h2 className="text-xl font-bold">PlayCell Studio</h2>
          <p className="mt-2 text-muted">Mini-games for campaigns and promotions.</p>
        </div>
      </section>
    </section>
  );
}
