module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script'],
     },
     extend: {
      colors: {
        green: {
          DEFAULT: '#00f260'
        }
      },
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
