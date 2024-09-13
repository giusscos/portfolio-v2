/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["BespokeSerif-Variable"],
      tanker: ["Tanker-Regular"],
    },
    extend: {
      colors: {
        bg: "#f7f7f7",
        text: "#010101",
        accent: "#ffd400",
        error: "#e60000",
      },
    },
  },
  plugins: [],
};
