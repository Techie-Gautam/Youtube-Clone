/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "#0F0F0F",
        searchC: "#222222",
        searchC2: "#121212",
        color1: "#3F3F3F",
        color2: "#3f3f3f5e"
      },
      gridTemplateColumns: {
        "grid-cols-auto-fit": "repeat(auto-fit, minmax(300px, 1fr))"
      },
    },
  },
  plugins: [],
}

