/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1440px' },
      // => @media (max-width: 1440px) { ... }
      'xl': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }
      'lg': { 'max': '960px' },
      // => @media (max-width: 960px) { ... }
      'md': { 'max': '620px' },
      // => @media (max-width: 620px) { ... }
      'sm': { 'max': '340px' },
      // => @media (max-width: 340px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
        sans2: ['Source Sans Pro', 'sans-serif']
      },
      colors: {
        gradient: {
          100: 'linear-gradient(225deg, #EA1D22 0%, #92070A 100%);',
          200: 'linear-gradient(180deg, #B21317 0%, #8E1514 100%);',
          300: 'linear-gradient(225deg, #272A31 0%, #0B0D11 100%);',
        },
        cyan: {
          100: '#43DCF8',
          200: '#7DD3FC',
          500: '#00D8FF',
          600: '#0EB3D1',
          700: '#0EA5E9',
          800: '#1A464E',
        },
        red: {
          400: '#F05454',
          500: '#EB3D3D',
          600: '#D03333'
        },
        gray: {
          100: '#A6A6A7',
          200: '#969597',
          300: '#868587',
          400: '#767576',
          500: '#666566',
          600: '#555456',
          700: '#454446',
          800: '#27272A',
          900: '#1A1A1A',
          950: '#161617'
        }


      }
    },
  },
  plugins: [],
}
