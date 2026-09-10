/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020817',
        panel: '#0f172a',
        accent: '#bef264',
        accent2: '#d9f99d',
        warning: '#eab308',
        danger: '#fb7185',
      },
      boxShadow: {
        glow: '0 0 30px rgba(190, 242, 100, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
