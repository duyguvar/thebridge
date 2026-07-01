import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bridge: {
          black: "#000000",
          charcoal: "#1a1a1a",
          slate: "#2d2d2d",
          steel: "#4a4a4a",
          mist: "#8a8a8a",
          fog: "#d4d4d4",
          white: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
