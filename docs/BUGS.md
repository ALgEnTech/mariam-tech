# BUGS — Active Issues Only

## 🔧 Resolved

- [x] CTA/link text turned violet on hover due to global `a:hover` rule. Fixed by forcing `a:hover { color: inherit }` and adding `.cta-primary` (white text locked on hover).

## High Priority

- [ ] Contact form sometimes delays Formspree success response by ~2s (verify spinner covers this).
- [ ] Mobile nav menu (hamburger) occasionally requires double-tap on iOS Safari.

## Medium Priority

- [ ] Dark mode contrast on placeholder logos could be improved (grayscale logos fade too much).
- [ ] Calendly embed iframe not perfectly responsive on very narrow (<320px) devices.

## Low Priority

- [ ] Lighthouse warning: “Missing width/height on <img>” for client logos in Case Studies (non-blocking).

## Monitoring / Follow-ups

- [ ] Audit for any component-level `hover:text-*` classes that could reintroduce color flips.


🐞 BUGS.md (Active Issues)

 Slider still has slight flicker on autoplay transitions (to test further).

 Ensure Stethoscope icon exists in lucide-react package (fallback: HeartPulse).

 Need to recheck text contrast on emerald backgrounds (dark mode readability).