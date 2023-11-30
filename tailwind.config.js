/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   pri: "#F0E68C",
    //   sec: "#DC143C",
    // },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["bumblebee", "halloween", "cyberpunk"],
  },
};
