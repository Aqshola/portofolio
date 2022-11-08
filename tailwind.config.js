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
        nunito:["Nunito",'sans-serif'],
        catamaran: ["Catamaran", "sans-serif"],
        roboto:["Roboto", "sans-serif"],
        
      },
      boxShadow: {
        "outline-black":"7px 5px 0 0 black"
      }
    },
  },
  plugins: [],
}