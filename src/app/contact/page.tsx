"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CALENDLY_URL } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "";

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
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-4">Let’s Talk</h1>

      {selectedPlan && (
        <p className="text-center text-brand-600 font-medium mb-6">
          🎉 Thanks for choosing the <strong>{selectedPlan}</strong> plan!
          Fill out the form and we’ll get you started.
        </p>
      )}

      <p className="text-center text-muted mb-12">
        Have a project in mind? Tell us about it or book a call directly.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-6 rounded-2xl shadow-soft space-y-4"
        >
          {/* Hidden field for plan */}
          <input type="hidden" name="plan" value={selectedPlan} />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            required
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full py-3 bg-brand-600 hover:bg-brand-700 rounded-lg font-semibold text-white disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      ) : (
        <div className="text-center py-12 bg-white/5 rounded-2xl">
          <p className="text-lg font-medium">
            ✅ Thanks! We’ve received your details and will be in touch soon.
          </p>
        </div>
      )}

      {/* Calendly Embed */}
      <div className="mt-16">
        <iframe
          src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
          width="100%"
          height={650}
          frameBorder={0}
          className="rounded-2xl shadow-soft"
        />
      </div>
    </section>
  );
}
