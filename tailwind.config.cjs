/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '38.5rem',
      }
    },
    colors: {
      'white': '#FFFFFF',
      'orange': '#E2702F',
      'grey': '#959D99',
      'red': '#EE4950',
      'red-100': '#F3777D',
      'black': '#171717',
      'black-semibold': '#1E1E1E',
      'black-100': '#272727',
    },
  },
  plugins: [],
}
