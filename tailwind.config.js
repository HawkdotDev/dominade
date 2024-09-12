/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        'move': 'move 4s linear infinite',
      },
      fontFamily: {
        hagrid: ['Hagrid',],
      },
    },
    keyframes: {
      "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      move: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(-100% - 14px))' },
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar-hide"),
  ],
}

