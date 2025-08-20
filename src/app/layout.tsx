import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Maryam Tech — AI Assistants & Lightning-Fast Websites",
  description: "Practical AI + fast, accessible websites. Book a 15-min plan call.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="mx-auto max-w-7xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
