"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
import {
  Briefcase,
  Rocket,
  Stethoscope,
  ShoppingBag,
  CircleDollarSign,
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
   Type Definitions
----------------------------------*/
type PersonaKey = "proservices" | "b2bsales" | "healthcare" | "ecommerce" | "financial";

// For Lucide icons and other React components that accept className
type IconType = React.ComponentType<{ className?: string }>;

type Track = { icon: IconType; title: string; desc: string };
type DeliveryItem = { icon: IconType; title: string; desc: string };
type Outcome = { icon: IconType; title: string; desc: string };

type Persona = {
  key: PersonaKey;
  label: string;
  icon: IconType;
  benefits: string[];
  toolkit: string[];
  tracks: Track[];
  delivery: DeliveryItem[];
  outcomes: Outcome[];
};

/* --------------------------------
   Personas
----------------------------------*/
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
  // ... keep the rest of your personas exactly as-is, just with icon typed as IconType
  {
    key: "b2bsales",
    label: "B2B SaaS Sales and Marketing",
    icon: Rocket,
    benefits: [
      "Persona research, call prep, and tailored outreach in seconds",
      "Proposal and scope builders tied to packages and pricing",
      "Rep assist for summaries, follow ups, and next steps",
    ],
    toolkit: ["Campaign and sequence writers", "Demo and objection handlers", "Deal desk and renewal playbooks"],
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
  // continue with healthcare, ecommerce, financial...
];

/* --------------------------------
   Component
----------------------------------*/
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
        {/* ... keep your existing panel/track/delivery/outcome rendering code ... */}
      </div>
    </section>
  );
}
