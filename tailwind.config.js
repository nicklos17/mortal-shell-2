/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#b89332",
          bright: "#d4af5e",
        },
        blood: {
          DEFAULT: "#8f2a2a",
          bright: "#a33434",
        },
        ice: "#7d97a8",
        ink: {
          base: "#0a0c10",
          card: "#12161d",
          "card-hover": "#171c25",
        },
        text: {
          primary: "#e8e4da",
          secondary: "#9aa0a8",
        },
      },
      fontFamily: {
        heading: ["Cinzel", "Georgia", "serif"],
        body: [
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        quote: ["Cormorant Garamond", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1120px",
      },
      screens: {
        mobile: "720px",
      },
    },
  },
  plugins: [],
};
