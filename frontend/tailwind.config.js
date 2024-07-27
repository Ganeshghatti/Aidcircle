/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#000A2D",
        lightBlue: "#3267FF",
        skyBlue: "#2087FF",
        muted: "#636571",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
