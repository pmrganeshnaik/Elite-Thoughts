import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F5F5F5',
        'deep-navy': '#0A192F',
        'gold': '#FFD700',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite linear',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite'
      },
      backgroundImage: {
        'royal-pattern': "url('/src/assets/royal-pattern.svg')"
      }
    },},
  plugins: [daisyui],
  safelist: [
    'bg-off-white',
    'bg-deep-navy',
    'bg-gold',
    'text-off-white',
    'text-deep-navy',
    'text-gold',
    'border-off-white',
    'border-deep-navy',
    'border-gold'
  ]
  };
