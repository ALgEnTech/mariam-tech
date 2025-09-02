"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CALENDLY_URL } from "@/lib/constants";
import confetti from "canvas-confetti";

const PHONE_E164 = "+17062049121";
const PHONE_DISPLAY = "(706) 204 9121";

function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "";

  // 🎈 Balloon spawner with varied sizes + animations
  const spawnBalloons = () => {
    const container = document.createElement("div");
    container.className = "fixed inset-0 pointer-events-none overflow-hidden";
    document.body.appendChild(container);

    const colors = ["#6366F1", "#A78BFA", "#34D399", "#F472B6"];

    for (let i = 0; i < 8; i++) {
      const balloon = document.createElement("div");
      const size = Math.random() * 20 + 20; // 20–40px
      const anims = ["animate-float", "animate-float-slow", "animate-float-fast"];

      balloon.className = `absolute bottom-[-100px] rounded-full opacity-90 ${
        anims[Math.floor(Math.random() * anims.length)]
      }`;
      balloon.style.left = `${Math.random() * 100}%`;
      balloon.style.width = `${size}px`;
      balloon.style.height = `${size * 1.3}px`; // slightly oval
      balloon.style.backgroundColor = colors[i % colors.length];
      container.appendChild(balloon);
    }

    setTimeout(() => container.remove(), 7000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xwpqdyva", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);

        // 🎉 Confetti
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#6366F1", "#A78BFA", "#34D399", "#F472B6"],
        });

        // 🎈 Balloons
        spawnBalloons();
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-6 max-w-3xl mx-auto">
      {/* Decorative accents around the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center mt-4"
      >
        <svg width="520" height="36" viewBox="0 0 520 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#A78BFA" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="520" height="36" rx="10" fill="url(#g1)" opacity="0.06" />
          <g opacity="0.12" transform="translate(12,6)">
            <circle cx="10" cy="12" r="4" fill="#A78BFA" />
            <circle cx="36" cy="6" r="3" fill="#34D399" />
            <circle cx="60" cy="18" r="2.5" fill="#F472B6" />
            <circle cx="92" cy="8" r="3.5" fill="#6366F1" />
          </g>
        </svg>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-3">Let’s Talk</h1>

      {/* Big phone display for easy visibility */}
      <div className="mt-4 text-center">
        <a
          href={`tel:${PHONE_E164}`}
          className="inline-block text-3xl md:text-4xl font-extrabold text-indigo-600 hover:underline"
          aria-label={`Call Maryam Tech at ${PHONE_DISPLAY}`}
        >
          📞 {PHONE_DISPLAY}
        </a>
        <p className="mt-2 text-sm text-gray-500">
          Call or message anytime and we will get back to you within 12 hours.
        </p>
      </div>

      {selectedPlan && (
        <p className="text-center text-indigo-500 font-medium mb-6 mt-6">
          🎉 You’ve selected the <strong>{selectedPlan}</strong> plan. Fill out the form and we will get you started.
        </p>
      )}

      <p className="text-center text-gray-500 mb-12">
        Tell us about your project — or book a call directly below.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 p-8 space-y-6 transition-all"
        >
          {/* small top flourish inside the form to make it slightly fancy but keep box intact */}
          <div className="absolute -top-4 left-6 right-6 flex justify-between items-center pointer-events-none">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 opacity-80" />
            <div className="w-8 h-8 rounded-full bg-indigo-600/10 flex items-center justify-center text-indigo-400 font-semibold text-sm">
              ✨
            </div>
          </div>

          <input type="hidden" name="plan" value={selectedPlan} />

          <input
            type="text"
            name="name"
            placeholder="🧑‍💼 Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="✉️ Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="📝 Tell us about your project..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-md hover:shadow-lg transition duration-300 disabled:opacity-50"
          >
            {loading ? "⏳ Sending..." : "📤 Send Message"}
          </button>
        </form>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800">
          <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
            🤝 Thanks! We’ve received your message and will be in touch soon.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            If it is urgent you can call or message us at{" "}
            <a href={`tel:${PHONE_E164}`} className="font-semibold text-indigo-600">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      )}

      {/* Calendly Embed - untouched layout and props */}
      <div className="mt-16 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-xl">
        <iframe
          src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
          width="100%"
          height={600}
          frameBorder={0}
          className="rounded-2xl"
        />
      </div>

      {/* Floating quick call button - large and visible but non intrusive */}
      <a
        href={`tel:${PHONE_E164}`}
        className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 rounded-full px-5 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold shadow-2xl hover:scale-105 transition transform"
        aria-label="Call Maryam Tech"
      >
        <span className="text-lg">📞</span>
        <span className="hidden sm:inline">Call Maryam Tech</span>
        <span className="font-mono ml-2">{PHONE_DISPLAY}</span>
      </a>
    </section>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <ContactContent />
    </Suspense>
  );
}
