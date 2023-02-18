/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //con esto le ponemos un alias
        success: colors.lime,
        primary: colors.blue
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
