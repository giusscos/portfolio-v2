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
      bebas: ["BebasNeue-Regular"],
      tanker: ["Tanker-Regular"],
    },
    extend: {
      colors: {
        bg: "#f0f0f0",
        text: "#111",
        accent: "#ffd400",
        error: "#e60000",
      },
    },
  },
  plugins: [],
};
