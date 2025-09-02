"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Particle({ index }: { index: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const randomX = (Math.random() - 0.5) * 100;
  const randomY = (Math.random() - 0.5) * 60;
  const randomSize = 2 + Math.random() * 3;
  const colors = ["bg-purple-400", "bg-violet-300", "bg-cyan-300", "bg-white"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.span
      key={index}
      className={`absolute rounded-full ${color}`}
      style={{
        width: randomSize,
        height: randomSize,
        left: `${50 + randomX}%`,
        top: `${50 + randomY}%`,
      }}
      initial={{ opacity: 0.8, scale: 1 }}
      animate={{ opacity: 0, y: randomY, x: randomX, scale: 0.3 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.div className="relative group">
      <Link
        href={href}
        className="relative text-gray-400 hover:text-white transition-colors duration-300"
      >
        {label}
        {/* Thunder underline */}
        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-violet-500 via-cyan-300 to-violet-500 shadow-[0_0_15px_rgba(180,100,255,0.9)]"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{ transformOrigin: "left" }}
        />
      </Link>
      {/* Sparks */}
      <span className="absolute -top-2 left-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <motion.span
          className="w-1 h-1 bg-cyan-200 rounded-full block"
          animate={{ y: [-2, -6, -12], opacity: [1, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
        />
      </span>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/95 text-gray-300 py-12 overflow-hidden">
      {/* Particle layer */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <Image src="/logo2.png" alt="Maryam Tech Logo" width={40} height={40} />
          <div>
            <h2 className="font-bold text-white">Maryam Tech</h2>
            <p className="text-sm text-gray-400">
              Practical AI + Modern Web, delivered fast and responsibly.
            </p>
          </div>
        </div>

        {/* Main Links */}
        <nav className="flex flex-wrap gap-8 text-sm">
          <FooterLink href="/ai-services" label="AI Services" />
          <FooterLink href="/pricing" label="Pricing" />
                  <FooterLink href="/about" label="About" />
        </nav>

        {/* Policies */}
        <div className="flex gap-8 text-sm">
          <FooterLink href="/policy" label="AI Use Policy" />
          <FooterLink href="/accessibility" label="Accessibility" />
          <FooterLink href="/privacy" label="Privacy" />
        </div>
      </div>

      <div className="relative z-10 text-center text-xs text-gray-500 mt-8">
        © 2025 Maryam Tech. All rights reserved.
      </div>
    </footer>
  );
}
