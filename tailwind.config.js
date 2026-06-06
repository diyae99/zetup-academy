/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#061A40',
        academyBlue: '#0B4DFF',
        lightBlue: '#EEF5FF',
        academyYellow: '#FFB000',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(6, 26, 64, 0.12)',
        premium: '0 28px 80px rgba(6, 26, 64, 0.18)',
      },
    },
  },
  plugins: [],
};
