"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HERO_LINE, CALENDLY_URL } from "@/lib/constants";
import { Bot, Globe, GraduationCap, Mic, Hammer, Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 animate-gradient-xy" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-32 max-w-7xl mx-auto">
        {/* Logo with smooth float (4s speed) */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <Image
            src="/logo.svg"
            alt="Maryam Tech"
            width={100}
            height={100}
            priority
            className="glowy"
          />
        </motion.div>

        {/* Hero Heading synced with logo */}
        <motion.h1
          className="gradient-heading text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          {HERO_LINE}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl text-brand-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Practical AI services and lightning-fast websites.  
          Book a 15-min call to see how Maryam Tech can help your business grow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <a
            href={CALENDLY_URL}
            className="btn rounded-2xl px-8 py-4 bg-white text-brand-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            🚀 Book a 15-min Call
          </a>
          <Link
            href="/pricing"
            className="rounded-2xl px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition"
          >
            💡 See Pricing
          </Link>
        </motion.div>

        {/* Standards Ribbon */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-brand-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full bg-white/10">✅ Core Web Vitals: Good</span>
          <span className="px-4 py-2 rounded-full bg-white/10">♿ WCAG 2.2 AA Accessible</span>
          <span className="px-4 py-2 rounded-full bg-white/10">🔒 NIST AI RMF Aligned</span>
        </motion.div>
      </div>

      {/* Bento Grid with faster hover + violet glow */}
      <section className="relative z-10 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {[
          { title: "Everyday Agents", desc: "AI assistants that capture leads, answer FAQs, and save time.", icon: Bot },
          { title: "Modern Webworks", desc: "Fast, mobile-friendly websites that pass Core Web Vitals.", icon: Globe },
          { title: "TenX AI Academy", desc: "Workshops to help your team finish tasks 10× faster.", icon: GraduationCap },
          { title: "Everkind Voices", desc: "Legacy avatars that preserve stories and voices.", icon: Mic },
          { title: "Maryam Build", desc: "Quick MVP sprints for apps and tools.", icon: Hammer },
          { title: "PlayCell Studio", desc: "Mini-games for campaigns and promotions.", icon: Gamepad2 },
        ].map((item, i) => {
          // Row & column animation
          const row = Math.floor(i / 3);
          const col = i % 3;
          let initialX = 0;
          let initialY = 0;

          if (col === 0) initialX = -60; // left column slides from left
          else if (col === 2) initialX = 60; // right column slides from right
          else initialY = 60; // center slides from bottom

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
                boxShadow: "0px 14px 35px rgba(106, 79, 203, 0.55)", // violet glow
                transition: { duration: 0.25, ease: "easeOut" }, // faster hover
              }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur shadow-md transition-all group"
            >
              <item.icon className="w-10 h-10 text-brand-300 mb-4 group-hover:text-white transition" />
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-brand-100">{item.desc}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Case Studies with violet hover glow */}
      <section className="relative z-10 mt-28 max-w-6xl mx-auto px-6">
        <h2 className="gradient-heading text-3xl md:text-4xl font-bold text-center">
          Case Studies
        </h2>
        <p className="mt-3 text-brand-100 text-center max-w-2xl mx-auto">
          Real examples of how Maryam Tech helped businesses grow with AI + web.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
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
                boxShadow: "0px 12px 30px rgba(106, 79, 203, 0.45)", // violet glow
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-white">{caseStudy.title}</h3>
              <p className="mt-2 text-brand-100">{caseStudy.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
