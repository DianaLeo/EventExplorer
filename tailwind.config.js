/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    lineHeight:{
      none:'1',
      tight:'1.25',
    },
    colors: {
      base: {
        800: '#2D3648',
      },
      grey:{
        100: '#969AA4',
      }
    },
  },
  plugins: [],
}

