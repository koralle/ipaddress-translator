/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'e8e8e8': '#e8e8e8',
      },
      boxShadow: {
        'linear': '20px 20px 60px #c5c5c5, -20px -20px 60px #ffffff',
        'onFocus': 'inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff'
      }
    },
  },
  plugins: [],
}
