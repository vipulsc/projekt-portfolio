import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "turn-page": "turnPage 0.8s ease-in-out",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        turnPage: {
          "0%": {
            transform: "scale(1) rotate(0deg)",
          },
          "50%": {
            transform: "scale(1.1) rotate(-12deg)",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
