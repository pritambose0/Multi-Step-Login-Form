/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        heroBg: '#F2D184',
        primary: '#EA4B8B',
        primaryDark: '#D83E78',
        secondary: '#7F73C5',
        textLight: '#818087',
        textPrimary: '#5443AC'
      },

      fontFamily:{
        'Lexend': ['Lexend', 'sans-serif']
      }
    },
  },
  plugins: [],
}

