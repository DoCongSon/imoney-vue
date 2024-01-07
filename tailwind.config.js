/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Alfa Slab One', 'serif'],
      },
      colors: {
        primary: '#756AB6',
        second: '#E0AED0',
        background: '#FFE5E5',
        dank: '#161A30',
      },
    },
  },
  plugins: [],
};
