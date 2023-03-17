/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        lightgray: '#d6e2f0',
        grayishblue: '#7b879d',
        darkblue: '#1f3251',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif']
      }
    }
  },
  plugins: [],
}
