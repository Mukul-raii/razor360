/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3a032d',
        secondry:'#f7ebf4',
        contactSecondry:'#844375'
      }
    },
  },
  plugins: [],
}