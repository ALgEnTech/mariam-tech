"use client";

import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionContext } from "@/components/TransitionProvider"; 
import { Orbitron } from "next/font/google";
import { usePathname } from "next/navigation"; // ✅ hydration-safe

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700"] });

// Tiny particle used for title discharge + hover sparks
function Particle() {
  const randomX = (Math.random() - 0.5) * 40;
  const randomY = -10 - Math.random() * 20;
  const randomSize = 1 + Math.random() * 1.5;
  const colors = ["bg-purple-400", "bg-violet-300", "bg-cyan-300", "bg-white"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <motion.span
      className={`absolute rounded-full ${color}`}
      style={{
        width: randomSize,
        height: randomSize,
        left: `${Math.random() * 100}%`,
        top: "50%",
      }}
      initial={{ opacity: 0.8, scale: 1, y: 0, x: 0 }}
      animate={{ opacity: 0, y: randomY, x: randomX, scale: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [particles, setParticles] = useState<{ id: number; createdAt: number }[]>([]);
  const brandRef = useRef<HTMLButtonElement>(null);

  const transitionCtx = useContext(TransitionContext);
  const pathname = usePathname(); // ✅ hydration-safe

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // continuous discharge on brand title
  useEffect(() => {
    const id = setInterval(() => {
      setParticles((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), createdAt: Date.now() },
      ]);
    }, 150);
    return () => clearInterval(id);
  }, []);

  // clean old particles
  useEffect(() => {
    const id = setInterval(() => {
      setParticles((prev) => prev.filter((p) => Date.now() - p.createdAt < 1200));
    }, 500);
    return () => clearInterval(id);
  }, []);

  const links: [string, string][] = [
    ["AI Services", "/ai-services"],
    ["Websites & Apps", "/websites-apps"],
    ["AI Academy", "/academy"],
    ["Pricing", "/pricing"],
    ["Case Studies", "/case-studies"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  // get logo center (for all transitions)
  const getLogoOrigin = () => {
    const rect = brandRef.current?.getBoundingClientRect();
    return rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : undefined;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-2xl shadow-lg transition-all duration-500 ${
        scrolled
          ? "py-2 bg-black/80"
          : "py-4 bg-gradient-to-r from-[#0E0F12]/95 via-[#161033]/95 to-[#0E0F12]/95"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between relative">
        {/* Brand — triggers full-page transition */}
        <button
          ref={brandRef}
          onClick={() => transitionCtx?.startTransition("/", getLogoOrigin())}
          className="flex items-center gap-3 group relative"
          aria-label="Go to home with cinematic transition"
        >
          <Image
            src="/logo2.png"
            alt="Maryam Tech Logo"
            width={56}
            height={56}
            priority
            className="select-none pointer-events-none"
          />
          <span
            className={`${orbitron.className} relative text-xl font-semibold tracking-widest bg-gradient-to-r from-purple-300 via-cyan-200 to-purple-400 bg-clip-text text-transparent`}
          >
            Maryam Tech
            <span className="absolute inset-0 overflow-visible pointer-events-none">
              {particles.map((p) => (
                <Particle key={p.id} />
              ))}
            </span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium items-center relative">
          {links.map(([label, href], i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <button
                onClick={() => transitionCtx?.startTransition(href, getLogoOrigin())}
                className={`relative text-white/80 hover:text-white transition-colors duration-300 ${
                  pathname === href ? "text-white" : ""
                }`}
              >
                {label}
              </button>

              {/* base line */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-purple-900/40" />

              {/* thunder pulse */}
              {hoverIndex === i && (
                <motion.span
                  className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-violet-500 via-cyan-200 to-violet-500 shadow-[0_0_15px_rgba(180,100,255,0.9)]"
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: [0.2, 1, 0.5, 1, 0.3, 1], x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              )}

              {/* sparks */}
              {hoverIndex === i && (
                <>
                  <Particle />
                  <Particle />
                  <Particle />
                </>
              )}
            </motion.div>
          ))}

          {/* CTA */}
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168,85,247,0.8)" }}
            className="ml-6 relative rounded-xl px-5 py-2.5 font-semibold 
             text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 
             shadow-lg transition"
          >
            🚀 Book a 15-min Call
          </motion.a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed inset-y-0 right-0 w-72 bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 shadow-2xl p-6 z-40 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-10">
              {links.map(([label, href], i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => {
                      setOpen(false);
                      transitionCtx?.startTransition(href, getLogoOrigin());
                    }}
                    className={`block text-lg relative text-white/90 hover:text-white ${
                      pathname === href ? "text-white" : ""
                    }`}
                  >
                    {label}
                  </button>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(106,79,203,0.55)" }}
                className="mt-6 rounded-xl px-5 py-3 font-semibold text-brand-900 bg-white hover:bg-brand-50 shadow-md transition"
              >
                🚀 Book a 15-min Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
