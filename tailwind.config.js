const defaultTheme = require("tailwindcss/defaultTheme");

const THEME_COLORS = {};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...THEME_COLORS,
      },
      fontFamily: {
        inter: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
