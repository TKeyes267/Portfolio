/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      silver: "#ecf9f5",
      metal: "#cdcdcd",
      moss: "#19d89d",
      teal: "#129580",
      forest: "#052b1f",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
});
