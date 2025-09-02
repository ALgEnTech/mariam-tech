"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Practical AI",
    desc:
      "Usefulness first. Assistants and automations that remove busy work and help people serve customers better.",
  },
  {
    title: "Speed and Accessibility",
    desc:
      "Fast pages that anyone can use. We tune performance and support screen readers and keyboard navigation.",
  },
  {
    title: "Transparency",
    desc:
      "Clear builds, clear roadmaps, clear handoffs. We explain how things work and where data goes.",
  },
  {
    title: "Trust",
    desc:
      "We protect data, respect privacy, and deliver predictable results with simple guarantees.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Company founded",
    note:
      "A small team formed around a shared idea to build practical digital tools that help people work better.",
  },
  {
    year: "2021",
    title: "Early rebuild year",
    note:
      "We learned how to ship useful features fast and built repeatable patterns for quality and clarity.",
  },
  {
    year: "2022",
    title: "Design and search refreshes",
    note:
      "Design systems and search improvements made content easier to manage and find for real users.",
  },
  {
    year: "2023",
    title: "Automation and assistants",
    note:
      "Lightweight automation reduced friction for customers and lowered load on internal teams.",
  },
  {
    year: "2024",
    title: "Ready to deploy",
    note:
      "Polished builds and production ready demos available for new clients and partners.",
  },
  {
    year: "2025",
    title: "Prototypes delivered",
    note:
      "Specialized prototypes and demos completed to show practical application and value.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center">
          <h1 className="gradient-heading text-4xl md:text-6xl font-extrabold tracking-tight">
            About Maryam Tech
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
            We build practical AI and modern web so your team moves faster with less stress.
            Kind people, careful engineering, and a focus on outcomes. Founded in 2020, tested by the pandemic,
            and still here steady honest and ready to help.
          </p>
        </div>

        {/* Mission Code */}
        <motion.div
          className="mt-12 rounded-2xl bg-white/10 border border-white/10 p-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-white">Mission Code</h2>
          <p className="mt-2 text-brand-100">
            Three promises we bring to every engagement.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/5 p-5">
              <p className="font-semibold text-white">Ship usefulness</p>
              <p className="mt-2 text-sm text-brand-200">
                Show real value quickly. Simple wins in week one beat long plans with no progress.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-5">
              <p className="font-semibold text-white">Be transparent</p>
              <p className="mt-2 text-sm text-brand-200">
                Clear scope, clear build notes, clear ownership. You keep the keys.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-5">
              <p className="font-semibold text-white">Protect people</p>
              <p className="mt-2 text-sm text-brand-200">
                Respect privacy, design for accessibility, and handle data carefully.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          className="mt-12 rounded-2xl bg-white/10 border border-white/10 p-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-white">Mission statement</h3>
              <p className="mt-3 text-brand-100 italic">
                Build with care. Ship with humility. Protect the people who trust you.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-block rounded-full bg-purple-500/10 text-purple-300 px-4 py-2 text-sm font-medium">
                Founded 2020
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-center text-white">Our story at a glance</h2>
          <p className="mt-3 text-center text-brand-100 max-w-3xl mx-auto">
            We started with a clear vision and a small team. Over the years we refined our craft, focused on
            practical results, and built processes that help our clients move faster. Today we create
            tools that reduce busy work and help teams deliver better outcomes.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year + i}
                className="rounded-xl bg-white/10 border border-white/10 p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm rounded-full bg-white/5 px-3 py-1 text-brand-200">
                    {t.year}
                  </span>
                  <span className="text-xs rounded-full bg-purple-500/10 text-purple-300 px-3 py-1">
                    {t.title}
                  </span>
                </div>
                <p className="mt-3 text-sm text-brand-100 leading-relaxed">{t.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-center text-white">Core values</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="rounded-xl bg-white/10 border border-white/10 p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="text-lg font-semibold text-white">{v.title}</p>
                <p className="mt-2 text-brand-200">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Standards, plain English */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 rounded-full bg-white/10 text-brand-100">
            Core Web Vitals: pages load fast for real people
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 text-brand-100">
            Accessibility: works with screen readers and keyboard navigation
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 text-brand-100">
            Responsible AI: explainable answers and careful data use
          </span>
        </div>

        {/* Closing */}
        <motion.div
          className="mt-12 rounded-2xl bg-white/10 border border-white/10 p-8 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-brand-100 max-w-3xl mx-auto">
            If you want technology that is kind to users and tough on busy work, we would love to help.
            We keep builds simple, testable, and owned by you. Proof and demos are ready when you are.
          </p>
          <a
            href="https://calendly.com/kevtechwin/30min"
            className="mt-6 inline-block cta-primary"
          >
            🚀 Book a 15 minute Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
