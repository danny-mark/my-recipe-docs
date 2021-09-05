module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Belleza', 'sans-serif'],
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            table: {
              width: 'auto',
            },
            ol: {
              'margin-top': '.8em',
              'margin-bottom': '.8em',
            },
            ul: {
              'margin-top': '.4em',
              'margin-bottom': '.4em',
              ' > li': { 'margin-left': '10px' }
            },
          },
        },
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
     require('daisyui'),
  ],
}
