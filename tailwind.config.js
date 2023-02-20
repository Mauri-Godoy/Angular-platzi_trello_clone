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
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
