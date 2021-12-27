module.exports = {
  darkMode: "class",

  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        
        green: "#00b894",
        black: "#1F2937",
        purple: "#6c5ce7"
      },
    },
    fontFamily:{
      inter:['"Inter"','sans-serif'],
      sans:['"Noto Sans TC"','sans-serif']
    },
  },
  plugins: [],
};
