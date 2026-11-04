/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crusade: {
          navy: {
            950: '#061024',
            900: '#0a1936',
            800: '#0f244e',
            700: '#143168',
            600: '#1b4084'
          },
          royal: {
            500: '#2563eb',
            600: '#1d4ed8',
            700: '#1e40af',
            800: '#1e3a8a',
            900: '#172554'
          },
          orange: {
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412'
          },
          gold: {
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309'
          },
          green: {
            600: '#16a34a',
            700: '#15803d',
            800: '#166534'
          }
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        display: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
