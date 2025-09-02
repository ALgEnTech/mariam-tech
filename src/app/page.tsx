"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";
import { Bot, Globe, GraduationCap, Mic, Hammer, Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 animate-gradient-xy" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 py-48 max-w-7xl mx-auto">
        {/* Logo with smooth float */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-12"
        >
          <Image
            src="/logo_3.svg"
            alt="Maryam Tech"
            width={120}
            height={120}
            priority
            className="glowy"
          />
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          className="gradient-heading text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          Imagine Your Business Working While You Sleep
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-10 text-xl md:text-2xl max-w-4xl text-brand-100 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          AI assistants that never clock out. Websites that load instantly from anywhere.  
          Clients flowing in without the late night stress. That’s what Maryam Tech delivers —  
          and it starts with one call.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {/* Primary CTA — uses .cta-primary so text NEVER recolors on hover */}
          <motion.a
            href={CALENDLY_URL}
            className="cta-primary"
            whileTap={{ scale: 0.98 }}
          >
            🚀 Book Appointments
          </motion.a>

          {/* Secondary CTA — keep white on hover too */}
          <Link
            href="/pricing"
            className="rounded-2xl px-12 py-6 border border-white/30 text-white hover:bg-white/10 transition text-lg no-color-hover"
          >
            💡 See Pricing
          </Link>
        </motion.div>

        {/* Standards Ribbon */}
        <motion.div
          className="mt-20 flex flex-wrap justify-center gap-6 text-sm text-brand-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="px-5 py-2 rounded-full bg-white/10">🔒 Secure by Design</span>
          <span className="px-5 py-2 rounded-full bg-white/10">🌍 SEO & Google-Friendly</span>
          <span className="px-5 py-2 rounded-full bg-white/10">🚀 Results-Driven</span>
          <span className="px-5 py-2 rounded-full bg-white/10">🔧 Easy to Manage</span>
        </motion.div>
      </div>

      {/* Services Grid */}
      <section className="relative z-10 mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
        {[
          {
            title: "Everyday Agents",
            desc: "Turn missed calls into booked clients — even while you sleep.",
            icon: Bot,
            proof: "⭐ 100+ Clients",
            badgeColor: "bg-emerald-500/20 text-emerald-400",
            preview: "💬 Auto-reply in action",
          },
          {
            title: "Modern Webworks",
            desc: "Your website: sleek, mobile-ready, and Google-approved.",
            icon: Globe,
            proof: "🚀 3× Faster",
            badgeColor: "bg-purple-500/20 text-purple-400",
            preview: "⚡ Instant load preview",
          },
          {
            title: "TenX AI Academy",
            desc: "Training that gives your team back 5+ hours a week.",
            icon: GraduationCap,
            proof: "⏱ 98% Reviews",
            badgeColor: "bg-blue-500/20 text-blue-400",
            preview: "📘 Learn faster",
          },
          {
            title: "Everkind Voices",
            desc: "Voices and stories preserved forever in digital avatars.",
            icon: Mic,
            proof: "👨‍👩‍👧 50+ Legacies",
            badgeColor: "bg-pink-500/20 text-pink-400",
            preview: "🎤 Memory capture",
          },
          {
            title: "Maryam Build",
            desc: "From idea to prototype — before your competitors even notice.",
            icon: Hammer,
            proof: "🛠 30+ MVPs",
            badgeColor: "bg-amber-500/20 text-amber-400",
            preview: "⚙️ Prototype running",
          },
          {
            title: "PlayCell Studio",
            desc: "Gamify your brand and grow your reach effortlessly.",
            icon: Gamepad2,
            proof: "🎮 15+ Campaigns",
            badgeColor: "bg-cyan-500/20 text-cyan-400",
            preview: "✨ Bonus unlocked!",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -8,
              scale: 1.04,
              rotateX: 3,
              rotateY: -3,
              boxShadow: "0px 14px 35px rgba(106, 79, 203, 0.45)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative p-10 rounded-2xl bg-white/10 border border-white/10 
                       hover:border-transparent hover:bg-gradient-to-r from-purple-500/10 to-cyan-500/10 
                       transition-all group overflow-hidden"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
              className="mb-6 text-white"
            >
              <item.icon className="w-12 h-12 text-brand-300 group-hover:text-white transition" />
            </motion.div>

            {/* Title + Description */}
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="mt-3 text-brand-100 leading-relaxed">{item.desc}</p>

            {/* Proof Badge */}
            <span
              className={`mt-5 inline-block px-3 py-1 rounded-full text-xs font-medium ${item.badgeColor}`}
            >
              {item.proof}
            </span>

            {/* Hover Preview */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-4 right-4 text-xs bg-white/10 px-3 py-1 rounded-full text-brand-100 shadow-sm"
            >
              {item.preview}
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Case Studies */}
      <section className="relative z-10 mt-44 max-w-7xl mx-auto px-8">
        <h2 className="gradient-heading text-3xl md:text-4xl font-bold text-center">
          Case Studies
        </h2>
        <p className="mt-5 text-brand-100 text-center max-w-2xl mx-auto leading-relaxed">
          We don’t just talk results — we deliver them. Here’s how Maryam Tech transformed real businesses.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {[
            {
              title: "Retail Store → AI Chatbot",
              before: "Customers waited days for responses.",
              after: "AI assistant answered instantly — 90% faster response times.",
              metric: "90% Faster Responses",
              testimonial: "“This bot saved us 20+ hours per week!” – Store Manager",
            },
            {
              title: "Local NGO → Modern Website",
              before: "Outdated, slow, inaccessible site.",
              after: "Lightning-fast site, 3× more signups, accessible to everyone.",
              metric: "3× More Signups",
              testimonial: "“Our reach tripled after the redesign.” – NGO Director",
            },
          ].map((caseStudy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 12px 30px rgba(106, 79, 203, 0.45)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="p-10 rounded-2xl bg-white/10 shadow-md transition-all border border-white/10 hover:border-purple-500/40"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6">{caseStudy.title}</h3>

              {/* Before vs After */}
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-xs text-red-400 font-medium">Before</p>
                  <p className="text-sm text-brand-100 leading-relaxed">{caseStudy.before}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-xs text-green-400 font-medium">After</p>
                  <p className="text-sm text-brand-100 leading-relaxed">{caseStudy.after}</p>
                </div>
              </div>

              {/* Metric */}
              <p className="mt-6 text-lg font-bold text-purple-400">{caseStudy.metric}</p>

              {/* Testimonial */}
              <p className="mt-4 text-sm italic text-brand-200 leading-relaxed">💬 {caseStudy.testimonial}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <motion.a
            href={CALENDLY_URL}
            className="cta-primary"
            whileTap={{ scale: 0.98 }}
          >
            🚀 Want results like these? Book a Call
          </motion.a>
        </div>
      </section>
    </section>
  );
}
