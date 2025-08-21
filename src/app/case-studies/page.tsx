"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    logo: "/logos/dental.png", // placeholder logo
    title: "Dental Clinic",
    before: "Missed calls, slow responses",
    after: "Missed calls down 40%, +20% booked consults in 30 days",
    quote: "Our AI assistant paid for itself in the first month.",
    author: "Operations Manager",
  },
  {
    logo: "/logos/law.png",
    title: "Immigration Law Firm",
    before: "Client emails stacked up for 2 days",
    after: "AI Docs-to-Bot cut replies from 2 days → 2 hours",
    quote: "Clients noticed instantly—we got more 5★ reviews.",
    author: "Managing Partner",
  },
  {
    logo: "/logos/senior.png",
    title: "Senior Living Center",
    before: "Website lagged on mobile, high bounce rate",
    after: "Core Web Vitals improved from ‘Poor’ → ‘Good’, bounce rate down 15%",
    quote: "Families found us faster and stayed longer on our site.",
    author: "Marketing Director",
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Proven Results, Real Impact
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-16">
          From faster websites to AI assistants that book calls—here’s how
          Mariam Tech helps teams deliver results quickly and responsibly.
        </p>

        {/* Logo Bar */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center mb-16">
          {[
            "/logos/dental.png",
            "/logos/law.png",
            "/logos/senior.png",
            "/logos/clinic.png",
            "/logos/startup.png",
            "/logos/agency.png",
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Client logo"
              className="mx-auto h-12 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((c, i) => (
            <motion.div
              key={i}
              className="rounded-2xl shadow-lg p-6 bg-white dark:bg-neutral-900 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={c.logo}
                alt={`${c.title} logo`}
                className="h-10 w-auto mb-4 opacity-80"
              />
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted mb-2">
                <strong>Before:</strong> {c.before}
              </p>
              <p className="text-sm text-muted mb-4">
                <strong>After:</strong> {c.after}
              </p>
              <blockquote className="italic text-muted mb-2">
                “{c.quote}”
              </blockquote>
              <span className="text-sm font-medium">{c.author}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://calendly.com/kevtechwin/30min"
          className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Want similar results? Book a 15-min Plan Call →
        </a>
      </div>
    </section>
  );
}
