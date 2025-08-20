"use client";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Maryam Tech</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/ai-services">AI Services</Link>
          <Link href="/websites-apps">Websites & Apps</Link>
          <Link href="/academy">AI Academy</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a href={CALENDLY_URL}
           className="rounded-xl px-4 py-2 font-medium bg-brand-600 text-white hover:bg-brand-700 transition">
          Book a 15-min Call
        </a>
      </div>
    </header>
  );
}
