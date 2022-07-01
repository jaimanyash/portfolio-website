/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/Sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class", 
  theme: {
    fontFamily: {
      sans: "Inter,-apple-system, BlinkMacSystemFont, Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Open Sans, Helvetica Neue,sans-serif",
      serif: "Inter,-apple-system, BlinkMacSystemFont, Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Open Sans, Helvetica Neue,sans-serif",
      body: "Inter,-apple-system, BlinkMacSystemFont, Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Open Sans, Helvetica Neue,sans-serif",
      display: "Inter,-apple-system, BlinkMacSystemFont, Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Open Sans, Helvetica Neue,sans-serif",
    }, 
    extend: {
    },
  },
  variants: {
    extend: {
       },
  },
  plugins: [],
  
}
