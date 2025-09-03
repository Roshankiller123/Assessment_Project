module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./stories/**/*.{js,jsx}",
    "./src/**/*.stories.@(js,jsx)",
  ],  
  theme: {
    extend: {
      colors: {
        primary: "#6b21a8",
        accent: "#06b6d4",
      },
    },
  },
  plugins: [],
};
