/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5efed",
        color1: "#8c9185",
        color2: "#9b9e3c",
        color3: "#9a4e3d",
        color4: "#2f2d31",
      },
      backgroundImage: {
        About: "url(../assets/Image-10.png)",
      },

      keyframes: {
        rightLeft: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-25%)" },
        },
      },
      animation: {
        rightLeft: "rightLeft .7s linear infinite",
      },
    },
    screens: {
      sm: "250px",
      md: "768px",
      lg: "1024px",
      xl: "1248px",
      "2xl": "1550px",
      "3xl": "2100px",
    },
    container: {
      padding: {
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
  },
};
