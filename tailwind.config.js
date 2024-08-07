/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blueLagoon: "#4CB7A5",
        lightText: "#E9E9E9",
      },
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
