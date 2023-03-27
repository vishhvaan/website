const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        '"Iosevka Slab Web"',
        'sans-serif',
        ...fontFamily.sans,
      ],
    },
  },
  plugins: [],
}
