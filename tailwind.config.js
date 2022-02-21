module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
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