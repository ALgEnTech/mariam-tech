"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Award,
  Building2,
  Check,
  Star,
  Shield,
  Zap,
  Crown,
  ChevronRight,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

/* ---------------- Currency helpers ---------------- */

type Currency = "USD" | "GBP";

// Base editable rate and a tiny market discount to stay competitive in the UK
const USD_TO_GBP = 0.78;
const GBP_MARKET_DISCOUNT = 0.98; // optional nudge down; set to 1 for pure FX

function fmtUSD(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtGBPfromUSD(
  amountUSD: number,
  rate = USD_TO_GBP,
  marketDiscount = GBP_MARKET_DISCOUNT
): string {
  // Convert, apply small discount, then round DOWN to ensure it never exceeds conversion
  const raw = amountUSD * rate * marketDiscount;
  const pounds = Math.floor(raw);
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(pounds);
}

type PriceValue = {
  amountUSD: number;
  period?: "" | "per month" | "one time";
  variant?: "plain" | "from" | "starts" | "add";
};

function displayPrice(price: PriceValue, currency: Currency): string {
  const base =
    currency === "USD" ? fmtUSD(price.amountUSD) : fmtGBPfromUSD(price.amountUSD);

  const withVariant =
    price.variant === "from"
      ? `from ${base}`
      : price.variant === "starts"
      ? `starts at ${base}`
      : price.variant === "add"
      ? `add ${base}`
      : base;

  return price.period ? `${withVariant} ${price.period}` : withVariant;
}

function rangeLabel(
  minUSD: number,
  maxUSD: number,
  currency: Currency,
  period: "" | "per month" | "one time" = "one time"
) {
  const left = displayPrice({ amountUSD: minUSD }, currency);
  const right = displayPrice({ amountUSD: maxUSD }, currency);
  return `${left} to ${right} ${period}`.trim();
}

/* ---------------- Page ---------------- */

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section className="relative overflow-hidden">
      {/* Background bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-emerald-500/30" />
        <div className="absolute top-48 -right-24 h-96 w-96 rounded-full blur-3xl bg-violet-500/30" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl bg-cyan-500/20" />
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 pt-20 text-center sm:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Pricing that grows with you
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mx-auto mt-4 max-w-2xl text-base text-gray-300 md:text-lg"
        >
          Clear plans and friendly terms and premium delivery. Every plan
          includes expert support and fast turnaround.
        </motion.p>

        {/* Currency Toggle */}
        <div className="mt-6 flex items-center justify-center">
          <CurrencyToggle currency={currency} onChange={setCurrency} />
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={CALENDLY_URL}
            className="group inline-flex items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-emerald-400"
          >
            Book a strategy call
            <ChevronRight
              className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            View case studies
          </Link>
        </div>
      </div>

      {/* Plan cards */}
      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <PlanCard
            icon={<Rocket className="h-5 w-5" aria-hidden="true" />}
            name="Starter"
            tagline="Great for local teams"
            price={{ amountUSD: 399, period: "per month", variant: "plain" }}
            currency={currency}
          />
          <PlanCard
            icon={<Award className="h-5 w-5" aria-hidden="true" />}
            name="Growth"
            tagline="Most chosen"
            price={{ amountUSD: 1199, period: "per month", variant: "plain" }}
            currency={currency}
            popular
          />
          <PlanCard
            icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
            name="Enterprise"
            tagline="Custom at scale"
            price={{ amountUSD: 4000, period: "per month", variant: "starts" }}
            currency={currency}
          />
        </div>
        <p className="mt-3 text-center text-xs text-gray-400">
          Quarterly prepay saves five percent. Annual prepay saves ten percent.
        </p>
      </div>

      {/* Detailed menu */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <Section
          icon={<Star className="h-5 w-5 text-emerald-400" aria-hidden="true" />}
          title="Websites and apps"
          subtitle="Fast builds and clean design and real results"
        >
          <PriceRow
            currency={currency}
            title="One page static site"
            price={{ amountUSD: 500, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Three to five page dynamic site with CMS and forms"
            price={{ amountUSD: 1200, period: "", variant: "from" }}
          />
          <PriceRow
            currency={currency}
            title="Six to ten page dynamic site"
            price={{ amountUSD: 2500, period: "", variant: "from" }}
          />
          <PriceRow
            currency={currency}
            title="Eleven to twenty pages or standard ecommerce"
            price={{ amountUSD: 3000, period: "", variant: "from" }}
          />
          <PriceRow
            currency={currency}
            title="Advanced app or headless ecommerce"
            price={{ amountUSD: 9500, period: "", variant: "from" }}
          />

          <Divider />

          <PriceRow
            currency={currency}
            title="Care Basic updates and monitoring and backups"
            price={{ amountUSD: 159, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Care Growth adds quarterly UX refresh and CRO experiments"
            price={{ amountUSD: 319, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Care Pro adds roadmap and A B testing and design time"
            price={{ amountUSD: 559, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Dedicated hosting and CDN and observability"
            price={{ amountUSD: 399, period: "per month", variant: "plain" }}
          />
        </Section>

        <Section
          icon={<Zap className="h-5 w-5 text-violet-400" aria-hidden="true" />}
          title="Everyday agents"
          subtitle="Setup fee then simple monthly plans"
        >
          <Subhead title="Lead Concierge" />
          <PriceRow
            currency={currency}
            title="Setup"
            price={{ amountUSD: 960, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Basic website widget five thousand chats"
            price={{ amountUSD: 199, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Growth booking and CRM sync and multi channel"
            price={{ amountUSD: 479, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Enterprise plan"
            price={{ amountUSD: 1200, period: "per month", variant: "starts" }}
          />

          <Divider />

          <Subhead title="Docs to Bot" />
          <PriceRow
            currency={currency}
            title="Setup"
            price={{ amountUSD: 1440, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Basic up to one hundred docs"
            price={{ amountUSD: 319, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Growth with Drive and Notion and SharePoint connectors"
            price={{ amountUSD: 719, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Enterprise plan"
            price={{ amountUSD: 1440, period: "per month", variant: "starts" }}
          />

          <Divider />

          <Subhead title="Back Office Agent" />
          <PriceRow
            currency={currency}
            title="Setup"
            price={{ amountUSD: 1600, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Basic email drafting and ticket replies"
            price={{ amountUSD: 399, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Growth CRM actions and approvals"
            price={{ amountUSD: 959, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Enterprise plan"
            price={{ amountUSD: 2000, period: "per month", variant: "starts" }}
          />

          <Divider />

          <Subhead title="Insights Brief" />
          <PriceRow
            currency={currency}
            title="Setup"
            price={{ amountUSD: 640, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Basic weekly one page report"
            price={{ amountUSD: 199, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Growth with GA and Shopify and HubSpot connectors and custom KPI tiles"
            price={{ amountUSD: 479, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Enterprise plan"
            price={{ amountUSD: 960, period: "per month", variant: "starts" }}
          />

          <Divider />

          <PriceRow
            currency={currency}
            title="Agent bundle with any three agents on one account after setup"
            price={{ amountUSD: 1199, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Extra agent on a bundle"
            price={{ amountUSD: 239, period: "per month", variant: "plain" }}
          />
        </Section>

        <Section
          icon={<Shield className="h-5 w-5 text-cyan-400" aria-hidden="true" />}
          title="Compute and models"
          subtitle="Pick a bucket or bring your own key"
        >
          <PriceRow
            currency={currency}
            title="Lite compute about one million tokens"
            price={{ amountUSD: 160, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Standard compute about four million tokens"
            price={{ amountUSD: 480, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Pro compute about fifteen million tokens"
            price={{ amountUSD: 1600, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Overages at cloud list plus service fee"
            price={"fifteen percent"}
          />
          <PriceRow
            currency={currency}
            title="Bring your own key platform fee"
            price={"ten percent"}
          />
          <PriceRow
            currency={currency}
            title="Advanced model surcharge"
            price={{ amountUSD: 800, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Private model hosting in dedicated VPC plus compute"
            price={{ amountUSD: 2000, period: "per month", variant: "plain" }}
          />
        </Section>

        <Section
          icon={<Crown className="h-5 w-5 text-emerald-400" aria-hidden="true" />}
          title="Support and service level"
          subtitle="Friendly and reliable response targets"
        >
          <PriceRow
            currency={currency}
            title="Standard next business day"
            price={"included"}
          />
          <PriceRow
            currency={currency}
            title="Priority target four hours with shared Slack"
            price={{ amountUSD: 240, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Premium target one hour with emergency phone"
            price={{ amountUSD: 720, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Uptime target ninety nine point nine"
            price={{ amountUSD: 240, period: "per month", variant: "add" }}
          />
        </Section>

        <Section
          icon={<Award className="h-5 w-5 text-violet-400" aria-hidden="true" />}
          title="10X AI Academy"
          subtitle="Train your team and ship faster"
        >
          <PriceRow
            currency={currency}
            title="Library and labs per seat"
            price={{ amountUSD: 79, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Team bundle ten seats"
            price={{ amountUSD: 640, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Private cohort four weeks with two clinics and capstone"
            price={{ amountUSD: 3200, period: "one time", variant: "plain" }}
          />
        </Section>

        <Section
          icon={<Rocket className="h-5 w-5 text-cyan-400" aria-hidden="true" />}
          title="Consulting and sprints"
          subtitle="Short focused engagements that move the needle"
        >
          <PriceRow
            currency={currency}
            title="Discovery workshop half day"
            price={{ amountUSD: 960, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Discovery workshop full day"
            price={{ amountUSD: 1600, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Roadmap sprint one week"
            price={{ amountUSD: 2000, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Implementation sprint two weeks"
            price={{ amountUSD: 4400, period: "", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="On site Los Angeles per day plus travel"
            price={{ amountUSD: 2000, period: "", variant: "plain" }}
          />
        </Section>

        <Section
          icon={<Building2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />}
          title="Integrations and data"
          subtitle="Connect the stack and keep data tidy"
        >
          <PriceRow
            currency={currency}
            title="Common connectors HubSpot and Shopify and Slack"
            price={rangeLabel(800, 2400, currency, "one time")}
          />
          <PriceRow
            currency={currency}
            title="Enterprise connectors Salesforce and SAP and Epic"
            price={
              displayPrice({ amountUSD: 4000, variant: "from" }, currency) +
              " one time"
            }
          />
          <PriceRow
            currency={currency}
            title="Data pipelines and retention policy setup"
            price={
              displayPrice({ amountUSD: 1600, variant: "from" }, currency) +
              " one time"
            }
          />
        </Section>

        <Section
          icon={<Shield className="h-5 w-5 text-violet-400" aria-hidden="true" />}
          title="Compliance and security"
          subtitle="Controls and reviews for regulated teams"
        >
          <PriceRow
            currency={currency}
            title="Advanced compliance pack for healthcare and finance"
            price={{ amountUSD: 800, period: "per month", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Compliance pack setup"
            price={{ amountUSD: 2400, period: "one time", variant: "plain" }}
          />
          <PriceRow
            currency={currency}
            title="Privacy review and DPIA for one workflow"
            price={{ amountUSD: 1200, period: "one time", variant: "plain" }}
          />
        </Section>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 pb-24">
          <a
            href={CALENDLY_URL}
            className="group inline-flex items-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-emerald-400"
          >
            Book a strategy call
            <ChevronRight
              className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium text-white/80 underline-offset-4 hover:underline"
          >
            Have questions? Contact our team
          </Link>
          <p className="mt-2 text-center text-[11px] text-white/50">
            Pound prices use a simple base rate with rounding down to whole
            pounds so they never exceed the converted amount.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI bits ---------- */

function CurrencyToggle({
  currency,
  onChange,
}: {
  currency: Currency;
  onChange: (c: Currency) => void;
}) {
  const btn =
    "px-3 py-1.5 text-sm font-semibold rounded-xl transition border border-white/10";
  const active = "bg-white/20 text-white";
  const idle = "bg-white/5 text-white/80 hover:bg-white/10";
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white/5 p-1.5 backdrop-blur border border-white/10">
      <button
        type="button"
        aria-pressed={currency === "USD"}
        onClick={() => onChange("USD")}
        className={`${btn} ${currency === "USD" ? active : idle}`}
      >
        USD
      </button>
      <button
        type="button"
        aria-pressed={currency === "GBP"}
        onClick={() => onChange("GBP")}
        className={`${btn} ${currency === "GBP" ? active : idle}`}
      >
        GBP
      </button>
    </div>
  );
}

type PlanCardProps = {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  price: PriceValue;
  currency: Currency;
  popular?: boolean;
};

function PlanCard({
  icon,
  name,
  tagline,
  price,
  currency,
  popular,
}: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className={[
        "relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow",
        popular
          ? "ring-2 ring-emerald-400 ring-offset-1 ring-offset-black/20 shadow-xl"
          : "",
      ].join(" ")}
    >
      {popular && (
        <div className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow">
          Most chosen
        </div>
      )}

      <div className="flex items-center gap-2 text-white">
        <div className="rounded-xl bg-white/10 p-2">{icon}</div>
        <div className="text-lg font-bold">{name}</div>
      </div>
      <div className="mt-1 text-sm text-white/70">{tagline}</div>

      <div className="mt-4 text-3xl font-extrabold">
        {displayPrice(price, currency)}
      </div>

      <ul className="mt-4 space-y-2">
        {[
          "One AI agent or basic website care",
          "Standard support next business day",
          "Analytics panel and simple reports",
        ].map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/90">
            <Check
              className="mt-0.5 h-4 w-4 text-emerald-400"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href={CALENDLY_URL}
          className={[
            "inline-flex w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition",
            popular
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-white/10 text-white hover:bg-white/20",
          ].join(" ")}
        >
          {popular ? "Choose Growth" : "Get started"}
        </a>
      </div>
    </motion.div>
  );
}

function Section({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="rounded-xl bg-white/10 p-2">{icon}</div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      {subtitle && <p className="mt-1 text-sm text-white/70">{subtitle}</p>}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        {children}
      </div>
    </div>
  );
}

function Subhead({ title }: { title: string }) {
  return (
    <div className="col-span-1 mt-2 text-sm font-semibold text-white/80 md:col-span-2">
      {title}
    </div>
  );
}

function PriceRow({
  title,
  price,
  currency,
}: {
  title: string;
  price: PriceValue | string;
  currency: Currency;
}) {
  const label =
    typeof price === "string" ? price : displayPrice(price, currency);

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:translate-y-0.5">
      <div className="flex items-center gap-2 text-sm text-white">
        <Dot />
        <span>{title}</span>
      </div>
      <div className="text-sm font-bold text-emerald-300">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="col-span-1 my-1 h-px bg-white/10 md:col-span-2" />;
}

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 rounded-full bg-emerald-400"
    />
  );
}
