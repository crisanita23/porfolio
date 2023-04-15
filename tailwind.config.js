/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    colors:{
      'indig': '#152a3b',
      'texto': '#F1EEE4',
      'fondi':'#0b151e',
      'moonstone': '#77b9c1',
      'dun': '#D3C1A3',
      'grayl': '#748188',
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Abril: ["Abril Fatface", "cursive"],
        Anton: ["Anton", "sans-serif"],
        Lato: ["Lato","sans-serif"]
      }
    },
  },
  plugins: [],
};

