/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* 'qaliBlue': '#132B5B',
        'qaliGreen': '#0FFFA9',
        'qaliLightGrey': '#D4D6E4',
        'qaliGrey': '#969696',
        'qaliHover': '#041655E5' */
      }
    },
  },
  plugins: [],
  safelist: [
    /* 'qaliBlue',
    'qaliGreen',
    'qaliLightGrey',
    'qaliGrey', */
  ]
}


