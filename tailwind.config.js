const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow:{
          "primary":"#FDDA34"
        }
      },
      fontFamily:{
        nunito:["var(--font-nunito)",...fontFamily.sans],
      },
      boxShadow: {
        "outline-black":"7px 5px 0 0 black",
        "outline-yellow":"7px 5px 0 0 #FDDA34",
      }
    },
  },
  plugins: [],
}