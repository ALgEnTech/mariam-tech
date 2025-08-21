import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-brand-900">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/logo.png" alt="Mariam Tech" width={36} height={36} className="mb-3" />
          <p className="text-brand-silver">
            Practical AI + Modern Web, delivered fast and responsibly.
          </p>
        </div>

        {/* Links */}
        <nav className="flex items-center justify-center md:justify-start gap-6 text-brand-silver">
          <Link className="hover:text-white" href="/ai-services">AI Services</Link>
          <Link className="hover:text-white" href="/pricing">Pricing</Link>
          <Link className="hover:text-white" href="/case-studies">Case Studies</Link>
          <Link className="hover:text-white" href="/about">About</Link>
        </nav>

        {/* Legal */}
        <div className="flex flex-col items-center md:items-end text-brand-silver">
          <div className="flex gap-6 mb-3">
            <Link className="hover:text-white" href="/ai-policy">AI Use Policy</Link>
            <Link className="hover:text-white" href="/accessibility">Accessibility</Link>
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
          </div>
          <p>© {year} Mariam Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
