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
