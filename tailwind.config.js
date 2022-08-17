/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      primary: 'Roboto Mono, monospace',
    },
    extend: {
      colors: {
        primary: '#333',
      },
      animation: {
        'bounce-slow': 'topdown linear 4s infinite',
      },
    },
    keyframes: {
      topdown: {
        '0%': { transform: 'translateY(-10%)' },
        '50%': { transform: 'translateY(10%)' },
        '100%': { transform: 'translateY(-10%)' },
      },
    },
  },
  plugins: [],
};
