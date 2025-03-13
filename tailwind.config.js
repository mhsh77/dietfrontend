/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        castoro: ["Castoro Titling", "serif"],
        cinzel: ["Cinzel", "serif"],
        cormorant: ["Cormorant SC", "serif"],
        dmSans: ["DM Sans", "sans-serif"],
        dmSerif: ["DM Serif Display", "serif"],
        tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        'custom-dark': '#1E1E1E',
      },
      keyframes: {
        gauge_fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        gauge_fill: {
          from: { "stroke-dashoffset": "332", opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        gauge_fadeIn: "gauge_fadeIn 1s ease forwards",
        gauge_fill: "gauge_fill 1s ease forwards",
      },
    },
  },
  plugins: [],
};
