"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
import {
  Briefcase,          // pro services
  Rocket,             // B2B SaaS
  Stethoscope,        // healthcare  (swap to HeartPulse if needed)
  ShoppingBag,        // ecommerce
  CircleDollarSign,   // finance
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ClipboardCheck,
  Workflow,
  Cpu,
  ShieldCheck,
  BarChart3,
  Clock,
  Users,
  Video,
  MapPin,
  FileText,
} from "lucide-react";

/* --------------------------------
   Personas
----------------------------------*/
type PersonaKey = "proservices" | "b2bsales" | "healthcare" | "ecommerce" | "financial";

type Track = { icon: any; title: string; desc: string };
type DeliveryItem = { icon: any; title: string; desc: string };
type Outcome = { icon: any; title: string; desc: string };

type Persona = {
  key: PersonaKey;
  label: string;
  icon: any;
  benefits: string[];
  toolkit: string[];
  tracks: Track[];
  delivery: DeliveryItem[];
  outcomes: Outcome[];
};

const personas: Persona[] = [
  {
    key: "proservices",
    label: "Professional Services",
    icon: Briefcase,
    benefits: [
      "Contract and memo drafting with citation guardrails",
      "RFP and proposal generators with firm voice",
      "Client intake to kickoff briefs in minutes",
    ],
    toolkit: [
      "Clause and style libraries",
      "Research copilots with source notes",
      "Review checklists and redline assistants",
    ],
    tracks: [
      { icon: FileText, title: "Document Drafting Studio", desc: "Model ready templates for contracts, memos, and letters with cite steps and review points." },
      { icon: MessageSquare, title: "Spec and Prompt Craft", desc: "Instruction patterns, style guides, and reusable snippets for your practice areas." },
      { icon: ClipboardCheck, title: "Context Kits", desc: "Turn playbooks and matter files into structured context that improves answers and speed." },
      { icon: Workflow, title: "Workflow Automation", desc: "Email, docs, and CRM flows for intake, follow up, and matter updates without copy and paste." },
      { icon: Cpu, title: "Review and Redline Copilots", desc: "Compare drafts, suggest changes, and log reasons so partners can approve fast." },
      { icon: ShieldCheck, title: "Compliance and Audit Trail", desc: "Retention rules, consent notes, and exportable logs for internal review." },
    ],
    delivery: [
      { icon: Video, title: "Live Online", desc: "Interactive Zoom labs with real documents and live build time." },
      { icon: Clock, title: "On Demand Library", desc: "Short lessons, templates, and checklists you can use the same day." },
      { icon: Users, title: "Office Hours", desc: "Weekly clinics to tune prompts, specs, and review flow issues." },
      { icon: MapPin, title: "In Person Los Angeles", desc: "Optional hands on workshops for teams when available." },
    ],
    outcomes: [
      { icon: BarChart3, title: "Faster Drafts", desc: "Matters move from blank page to first draft in a single session." },
      { icon: ClipboardCheck, title: "Better Consistency", desc: "Style and clause reuse lowers edits and rework." },
      { icon: Workflow, title: "Less Busy Work", desc: "Intake, follow up, and summaries run with one click." },
      { icon: ShieldCheck, title: "Clear Records", desc: "Every step has a log for internal and client review." },
    ],
  },
  {
    key: "b2bsales",
    label: "B2B SaaS Sales and Marketing",
    icon: Rocket,
    benefits: [
      "Persona research, call prep, and tailored outreach in seconds",
      "Proposal and scope builders tied to packages and pricing",
      "Rep assist for summaries, follow ups, and next steps",
    ],
    toolkit: [
      "Campaign and sequence writers",
      "Demo and objection handlers",
      "Deal desk and renewal playbooks",
    ],
    tracks: [
      { icon: Sparkles, title: "Offer and Messaging Lab", desc: "ICP notes to crisp value messages for email, social, and deck slides." },
      { icon: MessageSquare, title: "Prompt and Spec Patterns", desc: "Reusable instructions for research, call notes, and follow up plans." },
      { icon: Workflow, title: "Pipeline Automation", desc: "CRM updates, task creation, and recap mail with one button flows." },
      { icon: Cpu, title: "Proposal and Scope Studio", desc: "Auto fill packages, pricing, and terms with room for AE edits." },
      { icon: ClipboardCheck, title: "Enablement and Playbooks", desc: "Battle cards, objection sets, and demo talk tracks kept in sync." },
      { icon: ShieldCheck, title: "Review and Brand Safety", desc: "Tone checks and approval steps so outreach stays on brand." },
    ],
    delivery: [
      { icon: Video, title: "Live Online", desc: "Role based labs for AEs, SDRs, and marketers." },
      { icon: Clock, title: "On Demand Library", desc: "Ready to use prompt packs and templates for common tasks." },
      { icon: Users, title: "Office Hours", desc: "Weekly sessions to debug campaigns and tune sequences." },
      { icon: MapPin, title: "In Person Los Angeles", desc: "Optional team sprints for deck and campaign overhauls." },
    ],
    outcomes: [
      { icon: BarChart3, title: "More Pipeline", desc: "Outreach volume and relevancy go up with less manual work." },
      { icon: ClipboardCheck, title: "Cleaner Hand offs", desc: "Notes and next steps flow into CRM in a consistent way." },
      { icon: Workflow, title: "Faster Proposals", desc: "Scope and price are assembled in minutes and sent the same day." },
      { icon: ShieldCheck, title: "On Brand Always", desc: "Language and compliance rules applied before send." },
    ],
  },
  {
    key: "healthcare",
    label: "Healthcare Admin Operations",
    icon: Stethoscope,
    benefits: [
      "Prior auth and claims support with checklists",
      "Intake, scheduling, and summary helpers",
      "Policy text rewritten as clear SOP for staff",
    ],
    toolkit: [
      "Rev cycle prompt sets",
      "Eligibility and benefit macros",
      "Clinical to admin handoff templates",
    ],
    tracks: [
      { icon: FileText, title: "Claim and Prior Auth Assistant", desc: "Gather facts, draft notes, and check policy steps before submission." },
      { icon: MessageSquare, title: "Intake and Scheduling Flows", desc: "Collect details and create calendar holds with clear follow up." },
      { icon: ClipboardCheck, title: "SOP Builder", desc: "Turn policy text into step by step guides staff can use today." },
      { icon: Workflow, title: "Inbox and Record Automation", desc: "Move messages and forms into the right queues without copy and paste." },
      { icon: Cpu, title: "Summary and Letter Studio", desc: "After visit notes, letters, and instructions produced from structured inputs." },
      { icon: ShieldCheck, title: "Privacy and Review", desc: "Access rules and logs for internal audit and quality review." },
    ],
    delivery: [
      { icon: Video, title: "Live Online", desc: "Admin focused sessions with real forms and real cases." },
      { icon: Clock, title: "On Demand Library", desc: "Short lessons your team can watch between shifts." },
      { icon: Users, title: "Office Hours", desc: "Weekly clinics to adjust flows for payer and provider needs." },
      { icon: MapPin, title: "In Person Los Angeles", desc: "Optional training days for larger teams." },
    ],
    outcomes: [
      { icon: BarChart3, title: "Faster Turnaround", desc: "Claims and prior auth move sooner with fewer back and forth cycles." },
      { icon: ClipboardCheck, title: "Clear SOP", desc: "Staff follow the same steps and errors go down." },
      { icon: Workflow, title: "Less Manual Entry", desc: "Copy and paste is replaced with guided forms and flows." },
      { icon: ShieldCheck, title: "Better Records", desc: "Every action has a note and a timestamp for review." },
    ],
  },
  {
    key: "ecommerce",
    label: "Ecommerce and D2C",
    icon: ShoppingBag,
    benefits: [
      "Product content and localization at scale",
      "Support macros for chat and email",
      "CRO ideas for offers and bundles",
    ],
    toolkit: [
      "Catalog writers",
      "Ad and UGC script studio",
      "Support macro studio",
    ],
    tracks: [
      { icon: Sparkles, title: "Catalog Content Studio", desc: "Titles, bullets, and long copy from specs with brand voice controls." },
      { icon: MessageSquare, title: "Ad and Creative Generator", desc: "Scripts and captions for short video, image, and story formats." },
      { icon: Workflow, title: "Support Macro Builder", desc: "Answers and refund steps with links and tags for each channel." },
      { icon: Cpu, title: "Localization at Scale", desc: "Language variants with QA checks so details stay correct." },
      { icon: ClipboardCheck, title: "CRO Playbook", desc: "A or B ideas for offers, bundles, and layout with a simple test plan." },
      { icon: ShieldCheck, title: "Review and Brand Safety", desc: "Tone and claim checks before publish and ads approval." },
    ],
    delivery: [
      { icon: Video, title: "Live Online", desc: "Brand and store labs that ship real content during sessions." },
      { icon: Clock, title: "On Demand Library", desc: "Templates and checklists you can reuse for every launch." },
      { icon: Users, title: "Office Hours", desc: "Weekly clinics to improve pages and support flows." },
      { icon: MapPin, title: "In Person Los Angeles", desc: "Optional content sprints for team launches." },
    ],
    outcomes: [
      { icon: BarChart3, title: "More Conversions", desc: "Better copy and test cycles raise add to cart and checkout." },
      { icon: ClipboardCheck, title: "Fewer Support Loops", desc: "Clear macros and help pages lower repeat tickets." },
      { icon: Workflow, title: "Faster Launches", desc: "New products and promos go live with less wait time." },
      { icon: ShieldCheck, title: "On Brand Content", desc: "Voice and claim rules applied before publish." },
    ],
  },
  {
    key: "financial",
    label: "Financial Services",
    icon: CircleDollarSign,
    benefits: [
      "KYC and QA checklist assistants with logs",
      "Policy to procedure playbooks for front line teams",
      "Client brief and report packs from notes",
    ],
    toolkit: [
      "Risk and compliance prompt sets",
      "Disclosure generators",
      "Portfolio and summary writers",
    ],
    tracks: [
      { icon: FileText, title: "Policy to Procedure Studio", desc: "Turn long policy into step by step actions with ownership and checks." },
      { icon: MessageSquare, title: "Client Comms Builder", desc: "Briefs, emails, and report notes that follow disclosure rules." },
      { icon: ClipboardCheck, title: "KYC and QA Assist", desc: "Guided lists, evidence fields, and exportable logs." },
      { icon: Workflow, title: "Ops Automation", desc: "Ticket and case moves, tasks, and reminders with clear audit steps." },
      { icon: Cpu, title: "Analysis and Summary", desc: "Create digestible views from raw tables and notes with source links." },
      { icon: ShieldCheck, title: "Controls and Oversight", desc: "Access limits, changelogs, and sign off points your team can trust." },
    ],
    delivery: [
      { icon: Video, title: "Live Online", desc: "Role based labs for ops, compliance, and advisory." },
      { icon: Clock, title: "On Demand Library", desc: "Reusable packs for reviews and client reports." },
      { icon: Users, title: "Office Hours", desc: "Weekly clinics to review flows and address findings." },
      { icon: MapPin, title: "In Person Los Angeles", desc: "Optional workshops for larger groups." },
    ],
    outcomes: [
      { icon: BarChart3, title: "Cleaner Reviews", desc: "Evidence and notes are organized and easy to audit." },
      { icon: ClipboardCheck, title: "Fewer Errors", desc: "Checklists and prompts reduce misses and rework." },
      { icon: Workflow, title: "Faster Cases", desc: "Cases move with fewer hand offs and less manual entry." },
      { icon: ShieldCheck, title: "Better Control", desc: "Access and approval rules are followed every time." },
    ],
  },
];

export default function AcademyPage() {
  const [active, setActive] = useState<PersonaKey>("proservices");
  const activePersona = personas.find((p) => p.key === active)!;

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 animate-gradient-xy" />

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gradient-heading text-5xl md:text-7xl font-extrabold leading-tight"
        >
          10X AI Academy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-xl md:text-2xl text-brand-100 max-w-4xl mx-auto leading-relaxed"
        >
          Learn practical AI for real work. We train teams and individuals to move faster, reduce busy work, and keep quality high across the entire organization.
        </motion.p>
      </div>

      {/* Persona Switcher */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div role="tablist" aria-label="Audience types" className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {personas.map((p) => {
            const Icon = p.icon;
            const isActive = active === p.key;
            return (
              <button
                key={p.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${p.key}`}
                onClick={() => setActive(p.key)}
                className={`rounded-2xl border transition-all text-left px-4 py-4 flex items-center gap-3
                  ${isActive
                    ? "border-white/40 bg-white/10 text-white shadow-lg"
                    : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"}`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold text-sm">{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Persona Panel */}
        <motion.div
          key={active}
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white">What you get</h3>
              <ul className="mt-4 space-y-3">
                {activePersona.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-100">
                    <CheckCircle2 className="mt-1 w-5 h-5 text-emerald-300 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Toolkit */}
            <div>
              <h3 className="text-2xl font-bold text-white">Tooling you will master</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {activePersona.toolkit.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl border border-white/15 bg-white/10 text-white/90 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Learning Runway */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">The Learning Runway</h2>
        <p className="mt-3 text-center text-brand-100">
          Short, focused modules. Build real workflows as you learn.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activePersona.tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/15 bg-gradient-to-br from-emerald-700/30 via-emerald-600/25 to-emerald-500/20 backdrop-blur-xl p-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-300/30">
                    <Icon className="w-5 h-5 text-emerald-300" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                </div>
                <p className="mt-3 text-sm text-brand-100 leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Delivery */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">How We Deliver</h2>
        <p className="mt-3 text-center text-brand-100">Pick the mix that fits your team and your time.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePersona.delivery.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 text-center hover:bg-white/10 transition"
              >
                <Icon className="w-6 h-6 mx-auto text-emerald-300" />
                <h3 className="mt-3 font-semibold text-white">{d.title}</h3>
                <p className="mt-2 text-sm text-brand-100">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Week One Changes */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What Changes After Week One</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePersona.outcomes.map((o, i) => {
            const Icon = o.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-gradient-to-br from-emerald-700/25 to-emerald-500/15 backdrop-blur-xl p-6"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-emerald-300" />
                  <h3 className="font-semibold text-white">{o.title}</h3>
                </div>
                <p className="mt-3 text-sm text-brand-100">{o.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center mt-20 mb-24 flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
          Book a Strategy Call
        </a>
        <Link
          href="/pricing"
          className="rounded-2xl px-12 py-6 border border-white/30 text-white hover:bg-white/10 transition text-lg"
        >
          Explore Pricing
        </Link>
      </div>
    </section>
  );
}
