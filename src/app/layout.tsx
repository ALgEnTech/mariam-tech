import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Manrope, Inter } from "next/font/google";

// Load Google Fonts
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Maryam Tech — AI Assistants & Lightning-Fast Websites",
  description: "Practical AI + fast, accessible websites. Book a 15-min plan call.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-bg text-white font-sans flex flex-col min-h-screen">
        {/* Navigation */}
        <Nav />

        {/* Main Content */}
        <main className="flex-grow mx-auto w-full max-w-7xl px-4">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
