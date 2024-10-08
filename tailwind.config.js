/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      GoogleRed:["Red Hat Display","sans-serif"],
      GoogleMarcellus:["Marcellus SC","sans-serif"]
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}