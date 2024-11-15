/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Montserrat', 'sans-serif'],
      }
        },
    daisyui: {
      themes: ["light", "dark"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

