/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'], // Add the font here
        noto: ['Noto Sans Mayan Numerals', 'sans-serif']
      },
    },
  },
  plugins: [],
}
