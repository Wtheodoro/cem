/* eslint-disable functional/immutable-data */

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '3/10': '30%',
      },
      height: {
        h26rem: '26rem',
      },
      width: {
        w38rem: '38rem',
      },
      colors: {
        green: {
          1000: '#608643',
        },
        red: {
          50: '#fcf5f6',
          100: '#f8ebec',
          200: '#eeccd0',
          300: '#e4adb3',
          400: '#cf707a',
          500: '#bb3341',
          600: '#a82e3b',
          700: '#8c2631',
          800: '#701f27',
          900: '#5c1920',
          1000: '#CB1F3C',
        },
        christmasGreen: '#608643',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
