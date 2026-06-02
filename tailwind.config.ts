import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00d4ff",
        "neon-purple": "#7c3aed",
        "neon-cyan": "#00ffff",
        "neon-pink": "#ff0080",
        "bg-primary": "#05050f",
        "bg-secondary": "#0a0a1a",
        "bg-card": "rgba(15, 15, 35, 0.6)",
        "border-glass": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-main": "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
        "gradient-dark": "linear-gradient(135deg, #0a0a1a 0%, #05050f 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        aurora: "aurora 15s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "border-flow": "borderFlow 3s linear infinite",
        shimmer: "shimmer 2s infinite",
        "text-reveal": "textReveal 0.8s ease forwards",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "magnetic-hover": "magneticHover 0.3s ease",
        "neural-pulse": "neuralPulse 3s ease-in-out infinite",
        "counter-up": "counterUp 2s ease-out forwards",
        "card-glow": "cardGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.6), 0 0 100px rgba(0, 212, 255, 0.2)",
          },
        },
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        textReveal: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        neuralPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        counterUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cardGlow: {
          "0%": {
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.1), inset 0 0 20px rgba(0, 212, 255, 0.05)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(124, 58, 237, 0.2), inset 0 0 40px rgba(124, 58, 237, 0.05)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.15)",
        "glow-purple": "0 0 20px rgba(124, 58, 237, 0.4), 0 0 60px rgba(124, 58, 237, 0.15)",
        "glow-cyan": "0 0 20px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.15)",
        "inner-glow": "inset 0 0 30px rgba(0, 212, 255, 0.1)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
