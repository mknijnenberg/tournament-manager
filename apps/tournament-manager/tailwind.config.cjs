/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    mode: 'jit',
  },
  darkMode: 'media',
  plugins: [require('daisyui')],
};
