const { animate } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        'dark': '#111119',
        'white': '#FFFFFF',
        'B-yellow':'#febd00',
        'purple': '#ae1aff',
        'cyan': '#00FFFF'
      },
      animation: {
        'spin-slow' : 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,4) 2px, #f5f5f5 5px, #ffffff 100px);'
      }
    },
    plugins: [],
  }