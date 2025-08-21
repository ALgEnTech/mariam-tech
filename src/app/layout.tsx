import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Manrope, Inter } from "next/font/google";

// Load Google Fonts
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Maryam Tech — Practical AI + Lightning-Fast Websites",
    template: "%s | Maryam Tech",
  },
  description:
    "Maryam Tech builds AI assistants, modern websites, and AI training programs. Practical AI + Modern Web, delivered fast and responsibly.",
  keywords: [
    "AI chatbot for small business",
    "Next.js agency",
    "Core Web Vitals developer",
    "WCAG 2.2 AA accessibility",
    "AI training workshop",
  ],
  authors: [{ name: "Maryam Tech" }],
  openGraph: {
    title: "Maryam Tech — Practical AI + Modern Web",
    description:
      "AI assistants that book calls, fast websites tuned for Core Web Vitals, and team AI training.",
    url: "https://your-vercel-preview.vercel.app", // change when domain is live
    siteName: "Maryam Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maryam Tech Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryam Tech",
    description: "Practical AI + Modern Web, delivered fast and responsibly.",
    images: ["/og-image.png"],
    creator: "@maryamtech",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-brand-900 text-brand-silver font-sans flex flex-col min-h-screen antialiased">
        {/* Navigation */}
        <Nav />

        {/* Main Content */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
