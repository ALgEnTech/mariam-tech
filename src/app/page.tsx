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
            src="/logo.svg"
            alt="Maryam Tech"
            width={120}
            height={120}
            priority
            className="glowy"
          />
        </motion.div>

        {/* Hero Heading with Robot Icon */}
        <motion.h1
          className="gradient-heading text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight drop-shadow-lg flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-slate-400 to-cyan-500 drop-shadow-md">
            🤖
          </span>
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
          <a
            href={CALENDLY_URL}
            className="btn rounded-2xl px-12 py-6 bg-white text-brand-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
          >
            🚀 Book a 15-min Call
          </a>
          <Link
            href="/pricing"
            className="rounded-2xl px-12 py-6 border border-white/30 text-white hover:bg-white/10 transition text-lg"
          >
            💡 See Pricing
          </Link>
        </motion.div>

        {/* Standards Ribbon */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-brand-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="px-5 py-2 rounded-full bg-white/10">✅ Core Web Vitals: Good</span>
          <span className="px-5 py-2 rounded-full bg-white/10">♿ WCAG 2.2 AA Accessible</span>
          <span className="px-5 py-2 rounded-full bg-white/10">🔒 NIST AI RMF Aligned</span>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <section className="relative z-10 mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
        {[
          { title: "Everyday Agents", desc: "AI assistants that capture leads, answer FAQs, and save time.", icon: Bot },
          { title: "Modern Webworks", desc: "Fast, mobile-friendly websites that pass Core Web Vitals.", icon: Globe },
          { title: "TenX AI Academy", desc: "Workshops to help your team finish tasks 10× faster.", icon: GraduationCap },
          { title: "Everkind Voices", desc: "Legacy avatars that preserve stories and voices.", icon: Mic },
          { title: "Maryam Build", desc: "Quick MVP sprints for apps and tools.", icon: Hammer },
          { title: "PlayCell Studio", desc: "Mini-games for campaigns and promotions.", icon: Gamepad2 },
        ].map((item, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          let initialX = 0;
          let initialY = 0;

          if (col === 0) initialX = -60;
          else if (col === 2) initialX = 60;
          else initialY = 60;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: initialX, y: initialY }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: row * 0.4 + col * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.07,
                boxShadow: "0px 14px 35px rgba(106, 79, 203, 0.55)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur shadow-md transition-all group"
            >
              <item.icon className="w-12 h-12 text-brand-300 mb-5 group-hover:text-white transition" />
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-brand-100">{item.desc}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Case Studies */}
      <section className="relative z-10 mt-32 max-w-7xl mx-auto px-8">
        <h2 className="gradient-heading text-3xl md:text-4xl font-bold text-center">
          Case Studies
        </h2>
        <p className="mt-3 text-brand-100 text-center max-w-2xl mx-auto">
          Real examples of how Maryam Tech helped businesses grow with AI + web.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {[
            {
              title: "Retail Store → AI Chatbot",
              desc: "Before: Customers waiting days for responses. After: AI assistant answers instantly, cutting response time by 90%.",
            },
            {
              title: "Local NGO → Modern Website",
              desc: "Before: Outdated, slow site. After: Lightning-fast website, 3× more signups, accessible to all.",
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
              className="p-8 rounded-2xl bg-white/10 backdrop-blur shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-white">{caseStudy.title}</h3>
              <p className="mt-3 text-brand-100">{caseStudy.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
