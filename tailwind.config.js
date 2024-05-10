/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color-500': '#8A42DB',
        'primary-color-400': '#9955E8',
        'secondary-color': '#7DFFAF',

        'surface-background': '#171023',
        'surface-primary': '#2C243B',
        'surface-secondary': '#413A4F',
        'surface-tertiary': '#4E4563',

        'text-primary': '#F5F6F6',
        'text-secondary': '#CDD0D4'
      },
      fontFamily: {
        heebo: "'Heebo', sans-serif",
        kalam: "'Kalam', cursive"
      }
    },
  },
  plugins: [],
}

