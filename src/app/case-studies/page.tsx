"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/constants";

// load the lighter framer runtime on demand
const loadFeatures = () =>
  import("framer-motion").then((m) => m.domAnimation);

const caseStudies = [
  {
    title: "St Barnabas Church App",
    year: 2020,
    status: "Launched 2020, later paused",
    before: "Community members missed event updates and attendance tracking.",
    after:
      "Delivered a native style app with push notices and attendance check in. Used for several months before services paused during the pandemic.",
    metric: "Improved event turnout while active",
    testimonial:
      "“Parishioners felt more connected while the app was in use.” — Parish Coordinator",
  },
  {
    title: "ACE Jeans India",
    year: 2021,
    status: "Delivered 2021, site later taken offline",
    before: "Slow store, low repeat purchase rate.",
    after:
      "Relaunched the online store with faster product pages and a checkout flow. Repeat purchase rate rose in early months after launch.",
    metric: "Repeat purchases improved",
    testimonial: "“Orders increased soon after the relaunch.” — E commerce lead",
  },
  {
    title: "Kaibii Makeup Website",
    year: 2022,
    status: "Built and handed off 2022, launch paused by client",
    before: "Dated look and poor search visibility.",
    after:
      "Modern design and search improvements. SEO groundwork doubled monthly visits in testing.",
    metric: "Traffic doubled in test",
    testimonial:
      "“SEO changes helped us appear for important terms.” — Founder",
  },
  {
    title: "Dindigul Institute",
    year: 2020,
    status: "Delivered 2020, later site taken offline",
    before: "No website, manual enrollment tracking.",
    after:
      "Full site and CMS for course listings. Early term saw an increase in new inquiries.",
    metric: "More inbound enquiries",
    testimonial:
      "“Parents discovered courses online for the first time.” — Institute Director",
  },
  {
    title: "Rome Pharmacy",
    year: 2023,
    status: "Launched 2023, used for customer refills",
    before: "Manual refill requests by phone leading to long waits.",
    after:
      "Online refill portal and email reminders reduced customer trips and wait time while active.",
    metric: "Faster refill handling",
    testimonial:
      "“Customers appreciated the time saved.” — Pharmacy manager",
  },
  {
    title: "American Classic Escrow",
    year: 2025,
    status: "Prototype delivered 2025, site not purchased",
    before: "Paper heavy closings and slow handoffs.",
    after:
      "Digital workflow prototype that reduces document turnaround. Delivered as a deployable prototype; client chose not to purchase the hosted option.",
    metric: "Prototype reduced paperwork steps",
    testimonial:
      "“Prototype showed clear time savings in demos.” — Escrow officer",
  },
  {
    title: "Tamil Kitchen",
    year: 2021,
    status: "Launched 2021, paused later",
    before: "No online ordering or presence beyond word of mouth.",
    after:
      "Simple website with menu and delivery integrations. Online orders started the first weekend.",
    metric: "Online orders from day one",
    testimonial:
      "“We saw online orders the weekend after launch.” — Owner",
  },
  {
    title: "Classic Bixby Burger",
    year: 2024,
    status: "Development complete 2024, awaiting deploy",
    before: "Menu hard to find online and low lunchtime traffic.",
    after:
      "Mobile first site and local SEO plan completed. Ready to deploy when the client is ready.",
    metric: "Estimated local visibility gain",
    testimonial:
      "“Site is ready to push live as soon as they approve deployment.” — Operations lead",
  },
];

export default function CaseStudiesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative z-10 mt-44 max-w-7xl mx-auto px-8">
      <h2 className="gradient-heading text-3xl md:text-4xl font-bold text-center">
        Case Studies
      </h2>

      <p className="mt-5 text-brand-100 text-center max-w-2xl mx-auto leading-relaxed">
        We deliver real work across industries. Many projects were completed between 2020 and 2023 and were later paused or taken offline due to the pandemic. Artifacts and demos are available on request.
      </p>

      {/* Lighter, on-demand motion + no per-card delays */}
      <LazyMotion features={loadFeatures} strict>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {caseStudies.map((c) => (
            <m.div
              key={c.title}
              // Avoid blank flashes; animate once when visible
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              // GPU-accelerated hover with CSS; tiny scale for zero jank
              className="relative p-8 rounded-2xl bg-white/8 border border-white/10 shadow-md
                         transform-gpu will-change-transform will-change-opacity
                         transition-transform duration-200
                         hover:-translate-y-1 hover:scale-[1.01]
                         hover:shadow-[0_10px_24px_rgba(106,79,203,0.20)]"
            >
              {/* top row: title + year + status badge */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{c.title}</h3>
                  <div className="mt-1 text-xs text-brand-200">
                    {c.year} · <span className="text-brand-300">{c.status}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300">
                    {c.metric}
                  </span>
                </div>
              </div>

              {/* Before / After */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-xs text-red-400 font-medium">Before</p>
                  <p className="mt-2 text-sm text-brand-100 leading-relaxed">{c.before}</p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-xs text-green-400 font-medium">After</p>
                  <p className="mt-2 text-sm text-brand-100 leading-relaxed">{c.after}</p>
                </div>
              </div>

              {/* testimonial */}
              <p className="mt-4 text-sm italic text-brand-200">💬 {c.testimonial}</p>
            </m.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <m.a
            href={CALENDLY_URL}
            className="cta-primary inline-block"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.08 }}
          >
            🚀 Want similar results? Book a Call
          </m.a>
        </div>
      </LazyMotion>
    </section>
  );
}
