module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'new-world': "url('/src/assets/new-world2.jpg')",
      }),
      minHeight: {
        '100': '100px',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'group': 'rgba(31, 41, 55, 0.45)',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
