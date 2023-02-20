/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: { files: ["./src/**/*.{html,js,ts}"], relative: true, },
  theme: {
    extend: {
      colors: {
        //con esto le ponemos un alias
        success: colors.lime,
        primary: colors.sky
      },
      // con tailwind.config se puede sobreescribir una una funcionalidad
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1536px',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
