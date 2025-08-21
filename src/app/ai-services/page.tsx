"use client";

import { motion } from "framer-motion";
import { Bot, FileText, Inbox, BarChart } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

const services = [
  {
    title: "Lead Concierge",
    desc:
      "An AI receptionist that answers questions, books meetings, and captures leads on your website. No missed calls and no delays.",
    icon: Bot,
    proof: "24/7 Instant Replies",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    preview: "Demo Chat Available",
  },
  {
    title: "Docs to Bot",
    desc:
      "Turn manuals, PDFs, and wikis into a smart knowledge assistant. Answers include sources for higher trust.",
    icon: FileText,
    proof: "Trained on Your Documents",
    badgeColor: "bg-purple-500/20 text-purple-400",
    preview: "Ask Anything",
  },
  {
    title: "Back Office Agent",
    desc:
      "An automation clerk that drafts email replies, files tickets, and updates CRM systems. Frees your team from repetitive work.",
    icon: Inbox,
    proof: "Ten Hours Saved Weekly",
    badgeColor: "bg-blue-500/20 text-blue-400",
    preview: "Inbox Managed",
  },
  {
    title: "Insights Brief",
    desc:
      "A weekly AI generated one page report that pulls from your analytics and CRM to highlight what is working. No need to open dashboards.",
    icon: BarChart,
    proof: "Smarter Decisions",
    badgeColor: "bg-pink-500/20 text-pink-400",
    preview: "Sample Report",
  },
];

export default function AIServices() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 animate-gradient-xy" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        {/* Hero */}
        <motion.h1
          className="gradient-heading text-5xl md:text-6xl font-extrabold text-center leading-normal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Everyday Agents AI Services
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-center max-w-3xl mx-auto text-brand-100 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Practical AI that makes businesses faster, smarter, and stress free.
          Built with open source tools and deployable anywhere so you keep control.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0px 12px 30px rgba(106, 79, 203, 0.45)",
              }}
              className="relative p-10 rounded-2xl bg-white/10 border border-white/10 
                         hover:border-transparent hover:bg-gradient-to-r from-purple-500/10 to-cyan-500/10 
                         transition-all group overflow-hidden"
            >
              <div className="mb-6 text-white">
                <item.icon className="w-12 h-12 text-brand-300 group-hover:text-white transition" />
              </div>

              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-brand-100 leading-relaxed">{item.desc}</p>

              <span
                className={`mt-5 inline-block px-3 py-1 rounded-full text-xs font-medium ${item.badgeColor}`}
              >
                {item.proof}
              </span>

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
        </div>

        {/* Demo Chatbot Placeholder (wider and more readable) */}
        <div className="mt-24 max-w-3xl mx-auto rounded-2xl bg-white/10 border border-white/10 p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">Try the Lead Concierge Demo</h3>
          <div className="bg-black/40 rounded-xl p-6 space-y-4 text-base text-white">
            <div className="bg-purple-600/70 px-4 py-3 rounded-lg max-w-[70%]">
              Hello. I am your AI assistant. How can I help today?
            </div>
            <div className="bg-white/20 px-4 py-3 rounded-lg max-w-[70%] ml-auto">
              Can I book a call for tomorrow?
            </div>
            <div className="bg-purple-600/70 px-4 py-3 rounded-lg max-w-[70%]">
              Confirmed. I scheduled a fifteen minute consultation at two PM.
            </div>
          </div>
        </div>

        {/* Demo Insights Report Download */}
        <div className="mt-20 text-center">
          {/* Place your PDF at /public/sample-insights.pdf */}
          <a
            href="/sample-insights.pdf"
            download
            className="inline-block rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 
                       text-white font-semibold px-8 py-4 shadow-lg hover:opacity-90 transition"
          >
            Download Sample Insights Report
          </a>
          <p className="text-sm text-brand-100 mt-3">
            This preview shows the format of your weekly AI generated report.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mt-20 text-center">
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            whileTap={{ scale: 0.98 }}
          >
            Book a 15 min Call
          </motion.a>
        </div>
      </div>
    </section>
  );
}
