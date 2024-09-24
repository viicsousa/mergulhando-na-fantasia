/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-20': '20px',
      },
      fontFamily: {
        'cinzel': ['"Cinzel Decorative"', 'serif']
      },
    },
  },
  plugins: [],
}


