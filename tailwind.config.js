module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "tiny": "0.6rem",
        "sml": "15px",
      },
      minWidth: {
        '64': '256px',
      },
      colors: {
        "form-text": "#929292",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
