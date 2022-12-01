/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      deepBlue: "#203354",
      mainLandBg: "#2B4570",
      white: "#ffffff",
      red: "rgb(255, 0, 0)",
      whiteTran: "#FFFFFFCC",
      button: "#E49273",
      buttonBlue: "#7180AC",
      cardBg: "#A8D0DB",
      lightBlue: "#7180AC",
      greyLight: "#9CA3AF",
      signBg: "#EBFBFF",
      adminTx: "#2B4570",
      bb: "#C9DFE4",
    },
    fontFamily: {
      sans: ["Helvetica", "Poppins", "sans-serif"],
      body: ["Inter", "Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
