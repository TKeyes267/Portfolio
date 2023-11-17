/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      silver: "#EDEBEB",
      metal: "#C4C4C4",
      moss: "#96E6BE",
      teal: "#3C3C5A",
      forest: "#19192D",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        tit: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
});

