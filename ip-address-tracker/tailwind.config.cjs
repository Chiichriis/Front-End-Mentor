/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubikLight': ['RubikLight', 'sanSerif'],
        'rubikRegular': ['RubikRegular', 'sanSerif']
      },
      colors: {
        'primary': 'hsl(0, 0%, 17%)',
        'secondary': 'hsl(0, 0%, 59%)'
      },
      backgroundImage : {
        'mobile': "url('./assets/images/pattern-bg-mobile.png')",
        'desktop': "url('./assets/images/pattern-bg-desktop.png')"
      }
    }
  },
  plugins: [],
}