import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        graphite: {
          900: "#111827", // slate-900
          950: "#030712", // slate-950
          800: "#1f2937", // slate-800
        },
        "electric-blue": {
          DEFAULT: "#0070f3",
          light: "#3b82f6",
          dark: "#1d4ed8",
        },
        "neon-green": {
          DEFAULT: "#39FF14",
          dark: "#32cd32",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
