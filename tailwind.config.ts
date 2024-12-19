import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          black: "#2e3440",
          white: "#eceff4",
          snow: "#d8dee9",
          cyan: "#8fbcbb",
          green: "#a3be8c",
          red: "#bf616a",
          blue: "#88c0d0",
          purple: "#b48ead",
          accent: "#4c566a"
      },
    },
  },
  plugins: [],
} satisfies Config;
