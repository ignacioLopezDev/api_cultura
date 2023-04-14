/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["20px", "20px"],
      base: ["26px", "24px"],
      lg: ["32px", "28px"],
      xl: ["48px", "32px"],
    },
    extend: {
      fontFamily: {
        "yeseva-one": ['"Yeseva One"', "cursive"],
        urbanist: ['"Urbanist"', "sans-serif"],
      },
      colors: {
        rojo: "#C22E2E",
        gris: "#2C2D26",
        beiges: "#E9E9DB",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0,0,0,0.25)",
      },
      // screens: {
      //   sx: { max: "639px" },
      //   sm: { min: "640px", max: "767px" },
      //   md: { min: "768px", max: "1023px" },
      //   lg: { min: "1024px", max: "1279px" },
      //   xl: { min: "1280px", max: "1535px" },
      //   "2xl": { min: "1536px" },
      // },
    },
    plugins: [],
  },
};
