"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Origin } from "./TransitionProvider";

/**
 * Purple Lightning Strike
 * - Full-screen, diagonal bolt from top-left -> bottom-right
 * - Fast sweep (~240ms), near-instant navigation (~90ms)
 * - Only transform/opacity; no filters, no center artifacts
 */
export default function TransitionOverlay({
  route,
  variant = "pro",
  onFinish,
}: {
  route: string;
  origin?: Origin;      // kept for API compat (unused)
  variant?: "pro" | "lite";
  onFinish: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Navigate quickly so the app feels instant
    const tNav = setTimeout(() => router.push(route), 90);
    // Keep overlay just long enough to read visually
    const tEnd = setTimeout(() => onFinish(), variant === "lite" ? 220 : 320);
    return () => {
      clearTimeout(tNav);
      clearTimeout(tEnd);
    };
  }, [route, router, variant, onFinish]);

  return (
    <AnimatePresence>
      {variant === "lite" ? (
        // Fallback: tiny fade-through
        <motion.div
          key="lite"
          aria-hidden
          className="fixed inset-0 z-[999] pointer-events-none bg-black/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
        />
      ) : (
        // PRO: purple bolt sweep
        <div key="pro" aria-hidden className="fixed inset-0 z-[999] pointer-events-none overflow-hidden">
          {/* Subtle dim so the strike reads */}
          <motion.div
            className="absolute inset-0 bg-black/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.35, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "linear" }}
          />

          {/* STROBE: very brief purple strobe with no center hotspot */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(147,51,234,0.30), rgba(236,72,153,0.20))",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.65, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, times: [0, 0.4, 1], ease: "easeOut" }}
          />

          {/* BOLT GROUP (rotated container) */}
          <motion.div
            className="absolute -top-[40%] -left-[60%] h-[180%] w-[220%] will-change-transform"
            initial={{ rotate: -34, x: "-18%" }}
            animate={{ rotate: -34, x: "22%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Core bolt */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
              style={{
                height: 5,
                background:
                  "linear-gradient(90deg, rgba(216,180,254,1) 0%, rgba(168,85,247,1) 40%, rgba(236,72,153,0.95) 75%, rgba(0,0,0,0) 100%)",
                boxShadow:
                  "0 0 8px rgba(216,180,254,0.9), 0 0 18px rgba(168,85,247,0.8)",
              }}
            />

            {/* Glow belt (thicker, translucent) */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
              style={{
                height: 14,
                background:
                  "linear-gradient(90deg, rgba(168,85,247,0.40) 0%, rgba(147,51,234,0.35) 45%, rgba(236,72,153,0.30) 80%, rgba(0,0,0,0) 100%)",
                filter: "saturate(1.2)",
              }}
            />

            {/* Fine crackle lines above/below to suggest multi-strike */}
            <div
              className="absolute left-0 top-[calc(50%-8px)] w-full opacity-90"
              style={{
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(236,72,153,0.8) 0%, rgba(168,85,247,0.8) 70%, rgba(0,0,0,0) 100%)",
              }}
            />
            <div
              className="absolute left-0 top-[calc(50%+8px)] w-full opacity-80"
              style={{
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(139,92,246,0.75) 0%, rgba(236,72,153,0.7) 65%, rgba(0,0,0,0) 100%)",
              }}
            />
          </motion.div>

          {/* Diagonal micro-streak field for richness (very light) */}
          <motion.div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, rgba(139,92,246,0.12) 0 1px, transparent 1px 8px), repeating-linear-gradient(65deg, rgba(236,72,153,0.10) 0 1px, transparent 1px 9px)",
              willChange: "transform, opacity",
            }}
            initial={{ x: "-8%", y: "8%" }}
            animate={{ x: "8%", y: "-8%", opacity: [0.7, 0.5, 0.25, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
