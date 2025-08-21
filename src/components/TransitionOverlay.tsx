"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Origin } from "./TransitionProvider";

type Node = { x: number; y: number; r: number; delay: number };

export default function TransitionOverlay({
  route,
  origin,
  onFinish,
}: {
  route: string;
  origin?: Origin;
  onFinish: () => void;
}) {
  const router = useRouter();
  const [stage, setStage] = useState<"out" | "in">("out"); // out = burst, in = rewire
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  // viewport + fallback origin (center)
  useEffect(() => {
    setVw(window.innerWidth);
    setVh(window.innerHeight);
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const ox = origin?.x ?? vw / 2;
  const oy = origin?.y ?? vh / 2;

  // Random nodes (targets) across the viewport
  const nodes: Node[] = useMemo(() => {
    const N = 48;
    return Array.from({ length: N }, (_, i) => ({
      x: Math.random() * vw,
      y: Math.random() * vh,
      r: 2 + Math.random() * 3.5,
      delay: (i % 12) * 0.015 + Math.random() * 0.05, // stagger for organic feel
    }));
  }, [vw, vh]);

  // Timing: burst -> navigate -> rewire -> finish
  useEffect(() => {
    const t1 = setTimeout(() => {
      router.push(route);
      setStage("in");
    }, 650); // navigate while lines are mid-burst

    const t2 = setTimeout(() => onFinish(), 1650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [route, router, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* SVG connections (neural lines) */}
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${vw} ${vh}`} preserveAspectRatio="none">
          {/* halo at origin */}
          <motion.circle
            cx={ox}
            cy={oy}
            r={stage === "out" ? 10 : 40}
            fill="none"
            stroke="url(#gradPulse)"
            strokeWidth={stage === "out" ? 18 : 10}
            initial={{ opacity: 0.0, scale: 0.6 }}
            animate={{ opacity: [0.2, 0.7, 0.3, 0.6, 0.25], scale: [0.8, 1.3, 0.9, 1.2, 1] }}
            transition={{ duration: 0.7, repeat: 1 }}
            filter="url(#glow)"
          />

          {/* defs: gradients + glow */}
          <defs>
            <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b5cff" />
              <stop offset="50%" stopColor="#79e4ff" />
              <stop offset="100%" stopColor="#b17bff" />
            </linearGradient>
            <linearGradient id="gradPulse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b38cff" />
              <stop offset="50%" stopColor="#82f0ff" />
              <stop offset="100%" stopColor="#c29bff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* base faint spokes */}
          {nodes.map((n, i) => (
            <motion.line
              key={`base-${i}`}
              x1={ox}
              y1={oy}
              x2={n.x}
              y2={n.y}
              stroke="rgba(175,130,255,0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage === "out" ? 1 : 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: n.delay }}
            />
          ))}

          {/* bright electric growth */}
          {nodes.map((n, i) => (
            <motion.line
              key={`bright-${i}`}
              x1={ox}
              y1={oy}
              x2={n.x}
              y2={n.y}
              stroke="url(#gradLine)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: stage === "out" ? 1 : 0,
                opacity: [0, 1, 0.7, 1, 0.3],
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: n.delay + 0.05 }}
            />
          ))}
        </svg>

        {/* nodes (synapses) */}
        {nodes.map((n, i) => (
          <motion.span
            key={`node-${i}`}
            className="absolute rounded-full"
            style={{
              width: n.r * 2,
              height: n.r * 2,
              left: ox,
              top: oy,
              background:
                "radial-gradient(circle at 30% 30%, #c8f5ff 0%, #8de2ff 35%, #a57bff 80%)",
              boxShadow: "0 0 10px rgba(150,110,255,0.8), 0 0 20px rgba(120,230,255,0.5)",
            }}
            initial={{ opacity: 0.9, x: 0, y: 0, scale: 0.6 }}
            animate={
              stage === "out"
                ? { x: n.x - ox, y: n.y - oy, scale: 1, opacity: 1 }
                : { x: 0, y: 0, scale: 0.5, opacity: 0.8 }
            }
            transition={{
              duration: stage === "out" ? 0.55 : 0.65,
              ease: stage === "out" ? [0.12, 0.8, 0.2, 1] : "easeInOut",
              delay: n.delay + 0.03,
            }}
          />
        ))}

        {/* occasional spark bursts near the origin */}
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={`spark-${i}`}
            className="absolute rounded-full"
            style={{
              width: 2,
              height: 2,
              left: ox,
              top: oy,
              background: "white",
              boxShadow: "0 0 10px rgba(255,255,255,0.9)",
            }}
            initial={{ opacity: 0.9, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: [0.9, 0.4, 0],
              x: (Math.random() - 0.5) * 120,
              y: (Math.random() - 0.5) * 120,
              scale: 0.2,
            }}
            transition={{ duration: 0.35, delay: 0.05 * i, ease: "easeOut" }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
