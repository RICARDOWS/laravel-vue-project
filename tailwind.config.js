/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "primario": "#F9C94D",
        "primario-darker": "#f5ba26",
      },
    },
  },
  plugins: [],
}
