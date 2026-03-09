/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //color used in this project
    extend: {
      colors:{
        primary:"#2B85FF",
        secondary:"#EF863E",

      }
    },
  },
  plugins: [],
}

