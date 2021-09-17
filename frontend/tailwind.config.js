module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'new-world': "url('/src/assets/new-world2.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
