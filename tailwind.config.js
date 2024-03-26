/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Mulish', 'serif'],
    },
    colors:{
      primary: '#ffffff65',
      primaryblue: '#00B5D7',
    }
  },
  plugins: [],
}

