/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          500: '#1a365d',
          600: '#153e75',
          700: '#1e3a8a',
        },
        teal: {
          500: '#14b8a6',
          600: '#0d9488',
        },
        green: {
          500: '#22c55e',
          600: '#16a34a',
        },
        lightgray: '#f3f4f6',
      }
    },
  },
  plugins: [],
}
