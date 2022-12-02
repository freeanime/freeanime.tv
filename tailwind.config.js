/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        freeAnime: {
          bgGray: "#111",
          logoBlue: "#29e",
          boxGray: "#222",
        },
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
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
