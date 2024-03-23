/** @type {import('tailwindcss').Config} */ module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Quicksand"],
        head: ["M PLUS Rounded 1c"],
      },
    },
  },
  plugins: [require("daisyui")],
};
