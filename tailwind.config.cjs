/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-1': '#F1F1F1',
        'gray-2': '#D9D9D9',
        'gray-3': '#ADADAD',
      },
    },
  },
  plugins: [],
};
