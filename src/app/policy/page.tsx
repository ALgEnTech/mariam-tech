"use client";

import React from "react";

type SectionProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="mb-8 scroll-mt-20">
    <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
    <div className="prose prose-sm md:prose-base dark:prose-invert text-gray-200">
      {children}
    </div>
  </section>
);

export default function AIPolicyPage() {
  const lastUpdated = "2025-09-01";

  return (
    <main className="py-16 px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Our AI Use Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            We build and deploy AI with transparency, human oversight, and a
            focus on safety and privacy. This page explains how Mariam Tech
            uses AI, the safeguards we apply, and how clients can request more
            information or opt out.
          </p>

          {/* Last updated only (buttons removed) */}
          <div className="mt-4 text-sm text-gray-400">
            <strong>Last updated:</strong>{" "}
            <time dateTime={lastUpdated}>{lastUpdated}</time>
          </div>
        </header>

        <div className="md:grid md:grid-cols-4 md:gap-8">
          {/* TOC */}
          <nav
            id="toc"
            aria-label="Table of contents"
            className="hidden md:block col-span-1 sticky top-28 self-start"
          >
            <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
              <div className="text-sm font-semibold text-gray-300 mb-2">
                Contents
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#transparency" className="hover:underline">Transparency</a></li>
                <li><a href="#responsible-use" className="hover:underline">Responsible use</a></li>
                <li><a href="#privacy" className="hover:underline">Privacy & data handling</a></li>
                <li><a href="#oversight" className="hover:underline">Human oversight & limitations</a></li>
                <li><a href="#security" className="hover:underline">Security & retention</a></li>
                <li><a href="#requests" className="hover:underline">Client requests & contact</a></li>
                <li><a href="#changelog" className="hover:underline">Change log</a></li>
              </ul>
            </div>
          </nav>

          {/* Content */}
          <div className="col-span-3">
            {/* Quick summary / bullets */}
            <div className="mb-8 p-5 rounded-xl bg-neutral-900/30 border border-neutral-800">
              <div className="flex items-start gap-4">
                <svg
                  className="h-8 w-8 text-indigo-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>
                  <p className="text-sm text-gray-300">Key commitments:</p>
                  <ul className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-gray-200">
                    <li className="bg-neutral-800/40 px-3 py-2 rounded-md">Transparent labeling</li>
                    <li className="bg-neutral-800/40 px-3 py-2 rounded-md">Human-in-the-loop review</li>
                    <li className="bg-neutral-800/40 px-3 py-2 rounded-md">Strict data controls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sections */}
            <Section id="transparency" title="Transparency">
              <p>
                When Mariam Tech delivers AI-driven features (chatbots,
                document assistants, automation), we clearly label AI-generated
                content and make best-effort citations or references where
                applicable. We aim to let users know when a response, summary,
                or draft was produced by a model rather than a human.
              </p>
            </Section>

            <Section id="responsible-use" title="Responsible use">
              <p>
                We design and tune AI systems to reduce harmful outcomes and
                limit bias. Practices include guardrails, periodic bias tests,
                and avoiding misleading guarantees about business outcomes.
              </p>
            </Section>

            <Section id="privacy" title="Privacy & data handling">
              <p>
                Client and user data are treated as confidential. We adhere to
                the following principles:
              </p>
              <ul>
                <li><strong>Purpose limitation:</strong> only collect data necessary to provide the service.</li>
                <li><strong>Consent & control:</strong> clients can opt in/out of model fine-tuning or analytics.</li>
                <li><strong>Anonymization:</strong> pseudonymize/anonymize data where required.</li>
              </ul>
            </Section>

            <Section id="oversight" title="Human oversight & limitations">
              <p>AI helps with drafting, triage, and automation but is not infallible. We therefore:</p>
              <ul>
                <li><strong>Human-in-the-loop:</strong> critical decisions (legal, medical, financial) are reviewed by humans.</li>
                <li><strong>Known limitations:</strong> models can hallucinate or reflect training gaps.</li>
                <li><strong>Error reporting:</strong> clients can report issues and request investigations.</li>
              </ul>
            </Section>

            <Section id="security" title="Security & retention">
              <p>Security controls include encryption in transit/at rest, role-based access, and retention policies with delete/export on request.</p>
            </Section>

            <Section id="requests" title="Client requests & contact">
              <p>Clients can manage data and disclosures:</p>
              <ul>
                <li><strong>Request export/delete:</strong> email <a href="mailto:privacy@yourdomain.com" className="underline hover:text-indigo-300">privacy@yourdomain.com</a></li>
                <li><strong>Permission to publish:</strong> we don’t publish client details without written permission.</li>
                <li><strong>Report an issue:</strong> email <a href="mailto:hello@yourdomain.com" className="underline hover:text-indigo-300">hello@yourdomain.com</a></li>
              </ul>
            </Section>

            <Section id="changelog" title="Change log">
              <ul className="text-sm text-gray-300 space-y-2">
                <li><strong>2025-09-01</strong> — Clarified consent language for training data.</li>
                <li><strong>2024-12-15</strong> — Added section on human oversight and bias testing cadence.</li>
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
