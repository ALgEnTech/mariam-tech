"use client";

export default function AIPolicyPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Our AI Use Policy
        </h1>
        <p className="text-lg text-muted mb-8">
          We believe AI should be transparent, responsible, and safe. This page
          explains how Mariam Tech uses AI across our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Transparency</h2>
        <p className="mb-6">
          AI-generated responses in our chatbots and assistants are always
          identified as such. When possible, we provide citations so you can
          verify answers.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Responsible Use</h2>
        <p className="mb-6">
          We tune our models with guardrails and monitor for accuracy. We do not
          use AI to generate harmful, deceptive, or biased content.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
        <p className="mb-6">
          Client data stays private. We only use information needed to train and
          run assistants with your consent.
        </p>
      </div>
    </section>
  );
}
