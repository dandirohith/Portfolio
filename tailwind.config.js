/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "monospace"],
        cutive: ["Cutive Mono", "monospace"],
      },
      backgroundImage: {
        "bg1" : "url('/artifacts/icon22.png')",
      },
    },
  },
  plugins: [],
};
