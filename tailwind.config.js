/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        comforter: ['Comforter Brush', 'cursive'],
        cursive: ['cursive'],
      },
      backgroundImage: {
        'gradient1': 'linear-gradient(45deg, #062315, #06373A)',
        'gradient2': 'linear-gradient(45deg, #1c2e4a, #152238)',
        'gradient3': 'linear-gradient(45deg, #5e1916, #a91b0d)',
      },
    },
  },
  plugins: [],
}

