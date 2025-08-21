/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Maryam Tech Brand Palette
      colors: {
        brand: {
          DEFAULT: "#4B2E83",   // deep violet
          light: "#6A4FCB",     // accent purple
          dark: "#2D1B4D",      // deep background
          silver: "#C0C0C0",    // muted UI silver
          bg: "#1A1528",        // app background
        },
      },

      // Background gradients / textures
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4B2E83, #6A4FCB)",
        "brand-spotlight":
          "radial-gradient(circle at 30% 20%, rgba(106,79,203,0.25), transparent 70%), radial-gradient(circle at 70% 80%, rgba(75,46,131,0.3), transparent 70%)",
      },

      // 🔠 Typographic scale tweaks
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "h1": ["2.75rem", { lineHeight: "1.15", fontWeight: "700" }],
        "h2": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
      },

      // Shadows/glows for premium feel
      boxShadow: {
        "soft": "0 4px 12px rgba(0,0,0,0.1)",
        "elegant": "0 8px 30px rgba(75,46,131,0.35)",
        "glow": "0 0 25px rgba(106,79,203,0.45)",
      },

      // 🎞️ Gradient + balloon animations
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
        float: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.9" },
          "50%": { opacity: "1" },
          "100%": {
            transform: "translateY(-120vh) scale(1.1)",
            opacity: "0",
          },
        },
        "float-drift": {
          "0%": { transform: "translate(0,0) scale(1)", opacity: "0.9" },
          "25%": { transform: "translate(-10px,-30vh) scale(1.05)", opacity: "1" },
          "50%": { transform: "translate(10px,-60vh) scale(1.1)", opacity: "0.9" },
          "75%": { transform: "translate(-8px,-90vh) scale(1.05)", opacity: "0.7" },
          "100%": { transform: "translate(6px,-120vh) scale(1.1)", opacity: "0" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 12s ease infinite",
        "gradient-y": "gradient-y 12s ease infinite",
        "gradient-xy": "gradient-xy 18s ease infinite",
        float: "float 7s ease-in forwards",
        "float-drift": "float-drift 10s ease-in forwards",
      },

      // For smoother gradient flows
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [],
};
