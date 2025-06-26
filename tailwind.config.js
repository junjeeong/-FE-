// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: { min: "365px", max: "767px" },
        md: { min: "768px", max: "1279px" },
        lg: "1280px",
      },
    },
  },

  plugins: [],
};
