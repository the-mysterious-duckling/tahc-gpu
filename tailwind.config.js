module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        tahctheme: {
          primary: "#E9D5CA",
          secondary: "#827397",
          accent: "#4D4C7D",
          neutral: "#363062",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
