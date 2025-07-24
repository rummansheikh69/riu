/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#030305",
        subMain: "#1D1B1B",
        button: "#6AE936",
      },
    },
  },
  plugins: [],
};
