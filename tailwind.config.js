/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00342b', // Midnight Teal
          light: '#004d40',
        },
        secondary: {
          DEFAULT: '#fe6d60', // Electric Coral
          dark: '#ac322b',
        },
        background: '#fcf9f8', // Champagne
        surface: {
          light: '#f6f3f2',
          DEFAULT: '#e5e2e1',
        }
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xl: '20px',
      }
    },
  },
  plugins: [],
}
