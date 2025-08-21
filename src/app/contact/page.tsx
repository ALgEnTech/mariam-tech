"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CALENDLY_URL } from "@/lib/constants";
import confetti from "canvas-confetti";

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
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
        Let’s Talk
      </h1>

      {selectedPlan && (
        <p className="text-center text-indigo-500 font-medium mb-6">
          🎉 You’ve selected the <strong>{selectedPlan}</strong> plan.  
          Fill out the form and we’ll get you started.
        </p>
      )}

      <p className="text-center text-gray-500 mb-12">
        Tell us about your project — or book a call directly below.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 p-8 space-y-6 transition-all"
        >
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
        </div>
      )}

      {/* Calendly Embed */}
      <div className="mt-16 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-xl">
        <iframe
          src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
          width="100%"
          height={600}
          frameBorder={0}
          className="rounded-2xl"
        />
      </div>
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
