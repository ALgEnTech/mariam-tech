"use client";

import { useState, useCallback, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
import {
  Zap,
  Smartphone,
  ShoppingCart,
  Sparkles,
  BarChart,
  Shield,
  PenTool,
  Activity,
  Plug,
  Layers,
} from "lucide-react";

type Item = { title: string; desc: string; icon: any };

const sections: Item[] = [
  { title: "Never Lose a Customer to a Slow Site", desc: "Optimized Core Web Vitals, CDN delivery, and serverless scaling ensure blazing-fast websites.", icon: Zap },
  { title: "One Build, Every Device", desc: "We craft mobile-first PWAs that feel like native apps across all devices.", icon: Smartphone },
  { title: "From Browsers to Buyers", desc: "1-click checkout (Apple Pay, Stripe, PayPal), AI upsells, and cart recovery.", icon: ShoppingCart },
  { title: "AI That Knows Your Customers", desc: "Personalized recommendations, loyalty boosters, and adaptive feeds in real time.", icon: Sparkles },
  { title: "Be Seen. Be Chosen.", desc: "SEO-first architecture and schema built in. Local shops win local, global brands scale globally.", icon: BarChart },
  { title: "Earn Trust With Every Click", desc: "SSL, GDPR, 2FA logins, encrypted payments. Safety is your strongest sales pitch.", icon: Shield },
  { title: "Update Anything, Anytime", desc: "Drag-and-drop CMS so your team can update content instantly — no code required.", icon: PenTool },
  { title: "Numbers That Tell a Story", desc: "AI-enhanced analytics give you insights into visitors, sales, and drop-offs.", icon: Activity },
  { title: "Connect What You Already Use", desc: "Seamlessly integrate Shopify, Calendly, WhatsApp, Salesforce and more.", icon: Plug },
  { title: "Start Lean. Grow Limitless.", desc: "Launch cost-effectively and scale infinitely without costly rebuilds.", icon: Layers },
];

// circular offset so any item can snap to center
function shortestOffset(i: number, current: number, total: number) {
  let o = i - current;
  if (o > total / 2) o -= total;
  if (o < -total / 2) o += total;
  return o;
}

export default function WebsitesApps() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = sections.length;

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Autoplay: every 6s, pause on hover/touch only
  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, 6000);
    return () => clearInterval(id);
  }, [paused, goNext]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  // size/spacing
  const CARD_W = 460;
  const CARD_H = 360;
  const GAP = 44;
  const STEP = CARD_W + GAP;

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 animate-gradient-xy" />

      {/* Hero (no CTAs here anymore) */}
      <div className="relative z-10 px-8 pt-28 pb-6 max-w-7xl mx-auto text-center">
        <h1 className="gradient-heading text-5xl md:text-7xl font-extrabold leading-tight">
          Websites & Apps That Grow With You
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-brand-100 max-w-4xl mx-auto leading-relaxed">
          From corner cafés to global enterprises, we craft premium digital experiences that are fast,
          futuristic, and built to scale.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-8"
        role="region"
        aria-label="Websites & Apps features carousel"
        tabIndex={0}
        onKeyDown={onKey}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={goPrev}
          className="absolute left-2 md:left-6 top-[56%] -translate-y-1/2 z-20 bg-white/12 hover:bg-white/20 border border-white/30 w-10 h-10 rounded-full grid place-items-center"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={goNext}
          className="absolute right-2 md:right-6 top-[56%] -translate-y-1/2 z-20 bg-white/12 hover:bg-white/20 border border-white/30 w-10 h-10 rounded-full grid place-items-center"
        >
          ›
        </button>

        {/* Deck */}
        <div className="relative h-[500px] isolate">
          {sections.map((s, i) => {
            const Icon = s.icon;
            const o = shortestOffset(i, current, total);
            const abs = Math.abs(o);

            const x = o * STEP;
            const scale = abs === 0 ? 1.18 : abs === 1 ? 0.95 : 0.88;
            const rotateY = o * -10;
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.9 : 0.75;
            const hidden = abs > 2;
            const blurClass = abs === 0 ? "blur-0" : abs === 1 ? "blur-[0.3px]" : "blur-[0.6px]";

            return (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={s.title}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none ${blurClass} ${
                  hidden ? "pointer-events-none" : "pointer-events-auto"
                }`}
                initial={false}
                animate={{ x, scale, rotateY, opacity }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  zIndex: 100 - abs,
                  backfaceVisibility: "hidden",
                }}
                whileHover={{ scale: abs === 0 ? 1.21 : 0.97 }}
              >
                {/* Glass card: DARK EMERALD gradient */}
                <div
                  className={`w-full h-full rounded-3xl border shadow-[0_20px_60px_rgba(0,0,0,0.35)] transform-gpu
                    ${
                      abs === 0
                        // center: deep emerald glass for max contrast
                        ? "border-white/35 text-white backdrop-blur-2xl bg-gradient-to-br from-[#064E3B]/86 via-[#065F46]/84 to-[#10B981]/82"
                        : "border-white/15 text-white/95 backdrop-blur-lg bg-gradient-to-br from-[#064E3B]/36 via-[#065F46]/30 to-[#10B981]/34"
                    }`}
                >
                  <div className="h-full w-full flex flex-col items-center justify-center text-center px-8">
                    <Icon className="w-12 h-12 mb-5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]" />
                    <h2 className="text-2xl font-bold mb-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
                      {s.title}
                    </h2>
                    <p className="text-sm leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${
                current === i ? "bg-emerald-300" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Single CTA block at the bottom (both buttons) */}
      <div className="relative z-10 text-center mt-10 mb-24 flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
          🚀 Book a 15-min Strategy Call
        </a>
        <Link
          href="/pricing"
          className="rounded-2xl px-12 py-6 border border-white/30 text-white hover:bg-white/10 transition text-lg"
        >
          💡 Explore Pricing
        </Link>
      </div>
    </section>
  );
}
