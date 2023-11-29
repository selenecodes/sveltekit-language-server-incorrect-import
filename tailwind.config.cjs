/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts,css,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Verdana", "Arial", "sans-serif"],
        serif: ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
