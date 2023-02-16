/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: (theme) => ({ ...theme("spacing") }),
      keyframes: {
        "right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "right-to-left": "right-to-left 0.5s ",
      },
    },
  },
  plugins: [],
};
