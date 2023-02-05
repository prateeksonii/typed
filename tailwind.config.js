const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-inter)", ...fontFamily.sans],
        sans: ["var(--font-manrope)", ...fontFamily.sans],
      },
      colors: {
        primary: "#FF8552",
        dark: "#0D1321",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
