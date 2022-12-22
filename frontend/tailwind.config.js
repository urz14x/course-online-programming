/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DB6868",
      },
      fontFamily: {
        text_primary: ["Poppins"],
        text_secondary: ["Euclid Circular A"],
      },
      container: {
        padding: {
          xl: "6rem",
        },
      },
      fontSize: {
        body: "1.25rem",
      },
    },
  },
  plugins: [],
};
