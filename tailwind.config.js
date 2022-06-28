/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/Sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont'],
        sans: ['MyFont', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}
