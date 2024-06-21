/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "highlighter-green": "#1eff00",
        "highlighter-green-dark": "#17cc00",
      },
    },
  },
  plugins: [],
};
