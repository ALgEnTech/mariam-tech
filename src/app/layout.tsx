import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TransitionProvider from "@/components/TransitionProvider";
import { Manrope, Inter } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Maryam Tech — Practical AI + Lightning-Fast Websites",
    template: "%s | Maryam Tech",
  },
  description:
    "Maryam Tech builds AI assistants, modern websites, and AI training programs. Practical AI + Modern Web, delivered fast and responsibly.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-brand-900 text-brand-silver font-sans flex flex-col min-h-screen antialiased">
        <TransitionProvider>
          <Nav />
          <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-10">
            {children}
          </main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
