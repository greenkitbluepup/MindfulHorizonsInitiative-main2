/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html", // include root HTML files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9fd3c7',
        secondary: '#385170',
        accent: '#142d4c',
        light: '#ececec',
      },
      fontFamily: {
        serif: ['Montserrat', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  presets: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
