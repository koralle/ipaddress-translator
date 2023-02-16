/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Work Sans'],
      },
      height: {
        form: '400px',
      },
      width: {
        card: '480px',
        form: '400px',
      },
      height: {
        card: '400px',
        33: '132px',
      },
      colors: {
        e8e8e8: '#e8e8e8',
        'color-text-neutral': '#a6adbb',
        'color-main-bg': '#191d24',
        'color-sub-bg': '#2a303c',
        'color-accent': '#1fb2a5',
        'color-text-error': '#f87272',
        'color-text-accent': '#002925',
      },
      boxShadow: {
        linear: '20px 20px 60px #c5c5c5, -20px -20px 60px #ffffff',
        onFocus: 'inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff',
      },
      gridTemplateColumns: {
        'error-message-with-icon': '20px 1fr',
      },
      gridTemplateRows: {
        form: '20px 1fr',
      },
      borderRadius: {
        'form-card-radius': '8px',
      },
      minHeight: {
        index: '400px',
      },
      minWidth: {
        index: '600px',
      },
    },
  },
  plugins: [require('daisyui')],
};
