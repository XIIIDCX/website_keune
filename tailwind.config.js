/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      transformOrigin: {
        14: "1rem",
        16: "2rem",
        18: "3rem",
        20: "4rem",
        22: "5rem",
        24: "6rem",
        26: "7rem",
        28: "8rem",

        full: "100%",
      },
    },
  },
  plugins: [],
};
