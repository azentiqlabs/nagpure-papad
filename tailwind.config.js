/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#fce8e8',
          200: '#f8b4b4',
          300: '#f28080',
          400: '#e74c4c',
          500: '#7B1C1C',
          600: '#6b1818',
          700: '#5c1414',
          800: '#4a1010',
          900: '#380c0c',
          950: '#2d0a0a',
        },
        saffron: {
          50: '#fffbf0',
          100: '#fff3d0',
          200: '#ffe9a8',
          300: '#ffd970',
          400: '#f4a418',
          500: '#E8861A',
          600: '#d4760e',
          700: '#b8620a',
          800: '#964e08',
          900: '#7a3e06',
        },
        cream: {
          50: '#FDFAF0',
          100: '#FAF4E0',
          200: '#F5E8C0',
          300: '#EEDAA0',
          400: '#E5C870',
          500: '#D4AA50',
        },
        forest: {
          500: '#2D5A27',
          600: '#244820',
          700: '#1c3818',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('/mandala-bg.svg')",
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
