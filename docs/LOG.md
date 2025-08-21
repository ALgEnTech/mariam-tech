# Daily Log

## Day 1

- Scaffolded Next.js + Tailwind app
- Added Nav/Footer, pages, sticky CTA
- Created docs (SSOT, LOG, BUGS, PARKING_LOT)
- Next: Home hero motion + Bento grid

## Day 2

- Installed Framer Motion and added animated hero heading
- Polished homepage hero with subtext + CTA buttons
- Built responsive 6-tile Bento grid (Everyday Agents, Modern Webworks, TenX AI Academy, Everkind Voices, Maryam Build, PlayCell Studio)
- Added hover effects for interactivity
- Verified responsive behavior (1–3 columns depending on screen size)
- Committed and deployed to Vercel
- Next: Add brand fonts (Manrope + Inter) and motion polish (button hover animation)

## Day 3

- Integrated brand fonts (Manrope for headings, Inter for body) via next/font
- Applied `font-heading` to hero titles and Bento grid headings
- Applied `font-sans` to body/subtext for clean readability
- Added Standards Ribbon under hero (Core Web Vitals, WCAG 2.2 AA, NIST AI RMF)
- Polished footer layout with responsive alignment + hover states
- Verified design consistency and deployed changes to Vercel
- Next: Case Study section with before/after visuals and first Pricing page draft

## Day 4

- Built Pricing page with 3 clear tiers (Starter, Growth, Enterprise)
- Highlighted Growth plan visually to attract attention
- Added global Footer with links (AI Policy, Accessibility, Privacy)
- Created placeholder pages for AI Policy, Accessibility, and Privacy so footer links don’t break
- Verified all navigation works locally and deployed to Vercel
- Next: Build Contact page with form + Calendly embed (Day 5)

## Day 5 — Contact Page + Forms (2025-08-20)

- Built **Contact page** with a clean form (name, email, message).
- Integrated **Formspree** for submissions.
- Added **plan pre-fill** (Starter / Growth / Enterprise) via query params.
- Handled **loading spinner, error states, and success confirmation**.
- Embedded **Calendly booking iframe** below the form.
- Tested locally: ✅ working with success + failure states.

**DoD:** Users can fill the form, submit to Formspree, see success/error states, and directly book calls via Calendly.

## Day 6 — Case Studies Page (2025-08-20)

- Added **Case Studies page** at `/case-studies`.
- Built **client logo bar** with 6 placeholder logos (grayscale → hover brighten).
- Added **3 snapshot cards**:
  - Dental Clinic: +20% booked consults, fewer missed calls.
  - Immigration Law Firm: Docs-to-Bot cut replies 2 days → 2 hours.
  - Senior Living Center: Core Web Vitals improved from “Poor” → “Good”.
- Each card includes _Before/After_ + testimonial quote + author role.
- Added bottom **CTA button** linking to Calendly.
- Verified responsive layout, accessibility, and motion effects.
- Deployed successfully to Vercel.

**DoD:** Users can view outcome proof, testimonials, and logos; page loads fast and passes accessibility/performance checks.

## Day 7 — About Page (2025-08-20)

- Built **About Page** at `/about`.
- Added hero section with mission statement:
  “Practical AI + Modern Web, delivered fast and responsibly.”
- Added **Founder Note** card describing the company’s purpose and philosophy.
- Created **Core Values Grid** with 4 pillars:
  1. Practical AI
  2. Speed & Accessibility
  3. Transparency
  4. Trust
- Added **Standards Ribbon**: Core Web Vitals, WCAG 2.2 AA, NIST AI RMF.
- Verified responsive layout, accessibility, and clean animations.
- Deployed successfully to Vercel.

**DoD:** Visitors can understand mission, founder’s vision, and values; trust standards are visible; page loads fast and passes accessibility/performance checks.

## Day 8 — Legal & Compliance Pages (2025-08-21)

- Created **AI Policy page** at `/ai-policy`.
  - Sections: Transparency, Responsible Use, Privacy.
- Built **Accessibility page** at `/accessibility`.
  - Sections: Standards (WCAG 2.2 AA), Testing, Feedback channel.
- Added **Privacy Policy page** at `/privacy`.
  - Sections: Data collected, How we use data, User rights.
- Linked all three pages in the global footer (AI Policy, Accessibility, Privacy).
- Verified responsive layout, accessibility, and performance.
- Deployed to Vercel.

**DoD:** Footer links resolve; all compliance pages exist, are accessible, and explain policies in plain language.

## Day 9 — Polish & Trust Enhancements (2025-08-21)

- Expanded **layout.tsx metadata** with SEO titles, descriptions, keywords.
- Added **Open Graph & Twitter card config** (social preview image at `/og-image.png`).
- Linked **favicon.ico** in `public/` for brand polish.
- Updated **About Page**:
  - Added **Demo Bot placeholder** (heading, subtext, disabled input box).
  - Positioned below Standards Ribbon.
  - Styled with Framer Motion animations for consistency.
- Verified previews render correctly on Vercel and favicon shows in tab.
- Site remains accessible, responsive, and performant.

**DoD:** Metadata + social previews working, favicon in place, and Demo Bot placeholder integrated on About Page.
