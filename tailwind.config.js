/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#040d1a',
          900: '#0a1628',
          800: '#0f2040',
          700: '#152b55',
          600: '#1c3a6e',
        },
        sky: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        mint: {
          100: '#f0fdf9',
          200: '#ccfbf1',
          300: '#99f6e4',
          400: '#5eead4',
        },
        coral: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #040d1a 0%, #0a1628 40%, #0f2040 70%, #0d2a3a 100%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        'teal-gradient': 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
        'mint-gradient': 'linear-gradient(135deg, #f0fdf9 0%, #e0f2fe 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'breathe-in': 'breatheIn 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        breatheIn: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.3)', opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(20, 184, 166, 0.8), 0 0 60px rgba(14, 165, 233, 0.4)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
