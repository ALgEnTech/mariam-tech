"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    ["AI Services", "/ai-services"],
    ["Websites & Apps", "/websites-apps"],
    ["AI Academy", "/academy"],
    ["Pricing", "/pricing"],
    ["Case Studies", "/case-studies"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-brand-900/95 via-brand-800/95 to-brand-700/95 backdrop-blur-xl shadow-lg shadow-brand-900/40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo with glow */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/logo.svg"
              alt="Maryam Tech Logo"
              width={42}
              height={42}
              priority
              className="drop-shadow-[0_0_12px_rgba(106,79,203,0.6)]"
            />
          </motion.div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-brand-200 transition-colors duration-300">
            Maryam Tech
          </span>
        </Link>

        {/* Desktop Nav (visible on lg and above) */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium items-center">
          {links.map(([label, href], i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link
                href={href}
                className="relative text-white/80 hover:text-white transition-colors duration-300
                          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                          after:bg-gradient-to-r from-brand-200 via-white to-brand-200
                          after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            </motion.div>
          ))}

          {/* CTA inside desktop nav */}
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 20px rgba(106,79,203,0.6)",
            }}
            className="ml-6 rounded-xl px-5 py-2.5 font-semibold text-brand-900 bg-white 
                       hover:bg-brand-50 hover:shadow-lg transition-all duration-300"
          >
            🚀 Book a 15-min Call
          </motion.a>
        </nav>

        {/* Mobile Hamburger (visible on smaller than lg) */}
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
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block text-white/90 hover:text-white text-lg relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand-200 after:transition-all hover:after:w-full"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA inside mobile drawer */}
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(106,79,203,0.55)",
                }}
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
