/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#061109',
          900: '#0C1E14',
          850: '#11281B',
          800: '#163122',
          700: '#1C3E2B',
          600: '#27523A',
          500: '#346A4D',
          muted: '#8CA595',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        editorial: {
          bg: '#FAF7F0',
          paper: '#F4EFE6',
          card: '#FFFFFF',
          text: '#1A211D',
          muted: '#68736B',
          border: 'rgba(26, 33, 29, 0.1)',
        },
        coral: {
          DEFAULT: '#B4644E',
          hover: '#9E5540',
          light: '#C97A64',
          accent: '#BA6E58',
          bg: 'rgba(180, 100, 78, 0.12)',
        },
        emblem: {
          blue: '#1669BB',
          cyan: '#25ACDA',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        ultra: '0.35em',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'ripple-slow': 'ripple 3.5s cubic-bezier(0, 0.2, 0.8, 1) infinite',
        'ripple-delayed': 'ripple 3.5s cubic-bezier(0, 0.2, 0.8, 1) 1.2s infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
