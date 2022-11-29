/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Helvetica",
    },
    textColor: {
      primary: "#aaa",
      secondary: "#666",
      background1: "#111",
      background2: "#222",
      accent: "#29e",
    },
    placeholderColor: {
      secondary: "#666",
    },
  },
  plugins: [],
};
