/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    lineHeight: {
      none: '1',
      tight: '1.2',
      snug: '1.4',
      normal: '2',
    },
    colors: {
      base: {
        800: '#2D3648',
      },
      grey: {
        100: '#969AA4',
      },
      blue: {
        200: '#72B2D9',
      },
      black: {
        100: '#21272A',
      },
      orange: {
        100: '#fc7703',
        200: '#ff7d61',
      },
      white: {
        100: '#ffffff',
      }
    },
  },
  plugins: [],
}

