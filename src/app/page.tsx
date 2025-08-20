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

      {/* Standards Ribbon */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted">
        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
          ✅ Core Web Vitals: Good
        </span>
        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
          ♿ WCAG 2.2 AA Accessible
        </span>
        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
          🔒 NIST AI RMF Aligned
        </span>
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

      {/* Case Studies */}
      <section className="mt-28 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
          Case Studies
        </h2>
        <p className="mt-3 text-muted text-center max-w-2xl mx-auto">
          Real examples of how Maryam Tech helped businesses grow with AI + web.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Case 1 */}
          <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
            <h3 className="text-xl font-bold">Retail Store → AI Chatbot</h3>
            <p className="mt-2 text-muted">
              Before: Customers waiting days for responses.  
              After: AI assistant answers instantly, cutting response time by 90%.
            </p>
          </div>

          {/* Case 2 */}
          <div className="p-6 rounded-2xl bg-white/5 shadow-soft hover:bg-white/10 transition">
            <h3 className="text-xl font-bold">Local NGO → Modern Website</h3>
            <p className="mt-2 text-muted">
              Before: Outdated, slow site.  
              After: Lightning-fast website, 3× more signups, accessible to all.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
