const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      gray: colors.gray,
      red: colors.red,
      black: colors.black,
      white: colors.white,
    },
    fontFamily: {
      display: [
        "-apple-system",
        "BlinkMacSystemFont",
        "-apple-system",
        "Inter",
        "Roboto",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
      ],
      heading: ["Roboto Condensed", "Roboto", "Arial"],
      body: ["Roboto", "Roboto Condensed", "Arial"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      "10xl": ["13rem", { lineHeight: "1" }],
    },
    extend: {
      colors: {
        red: {
          950: "#551414",
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      translate: ["hover", "focus"],
      textColor: ["active"],
      backgroundColor: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
