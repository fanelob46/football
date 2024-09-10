/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'kobus': '2012px',
        'pc' : '1740px'
      }
    },
  },
  plugins: [],
}