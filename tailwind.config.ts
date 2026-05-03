import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        da: {
          bg: "#09090b",
          surface: "#121214",
          raised: "#1a1a1f",
          border: "rgba(255,255,255,0.09)",
          subtle: "#71717a",
          fg: "#fafafa",
          fgMuted: "#a1a1aa",
          accent: "#38bdf8",
          accentDeep: "#0ea5e9",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-dark":
          "radial-gradient(ellipse 90% 55% at 50% -25%, rgba(56,189,248,0.22), transparent 52%), radial-gradient(ellipse 60% 40% at 85% 20%, rgba(14,165,233,0.08), transparent 45%), linear-gradient(180deg, #0c0c0f 0%, #09090b 55%, #09090b 100%)",
        "glow-line":
          "linear-gradient(90deg, transparent, rgba(56,189,248,0.45), transparent)",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 48px rgba(0,0,0,0.45)",
        "card-hover":
          "0 0 0 1px rgba(56,189,248,0.15), 0 20px 56px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
} satisfies Config;
