"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Practical AI",
    desc: "We focus on useful, outcome-driven AI—not hype. Assistants that book calls, cut admin time, and save staff hours.",
  },
  {
    title: "Speed & Accessibility",
    desc: "Every site we deliver hits Core Web Vitals ‘Good’ and WCAG 2.2 AA accessibility standards.",
  },
  {
    title: "Transparency",
    desc: "We show how AI is used, provide citations for answers, and ensure safe, responsible deployment.",
  },
  {
    title: "Trust",
    desc: "We keep data secure, respect privacy, and deliver consistent results with simple guarantees.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About Mariam Tech
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Practical AI + Modern Web, delivered fast and responsibly. We help
            organizations work faster, serve customers better, and tell
            meaningful stories using automation and design.
          </p>
        </div>

        {/* Founder Note */}
        <motion.div
          className="rounded-2xl shadow-lg bg-white dark:bg-neutral-900 p-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">A Note from the Founder</h2>
          <p className="text-muted mb-4">
            “We started Mariam Tech with one simple belief: technology should
            save time, not steal it. Our AI assistants, training, and websites
            are built to free people from routine work and help them focus on
            what actually matters—serving clients, growing teams, and building
            trust.”
          </p>
          <p className="font-semibold">— Founder, Mariam Tech</p>
        </motion.div>

        {/* Values Grid */}
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="rounded-xl shadow-md p-6 bg-white dark:bg-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-muted">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Standards Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted mb-20">
          <span className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
            Core Web Vitals: Good
          </span>
          <span className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
            WCAG 2.2 AA Accessibility
          </span>
          <span className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
            NIST AI Risk Management
          </span>
        </div>

        {/* Demo Bot Placeholder */}
        <motion.div
          className="text-center rounded-2xl shadow-lg bg-white dark:bg-neutral-900 p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Try Our Demo Bot</h2>
          <p className="text-lg text-muted mb-6">
            Coming soon: interact with a Mariam Tech AI assistant and see how it
            answers questions instantly.
          </p>
          <div className="mx-auto max-w-md rounded-xl shadow p-6 bg-neutral-50 dark:bg-neutral-800">
            <p className="text-sm text-muted mb-2">[Demo Bot Placeholder]</p>
            <input
              type="text"
              placeholder="Type a question..."
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900"
              disabled
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
