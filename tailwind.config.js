/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all files
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        primary: "#F7F7F7",  // Custom dark blue
        secondary: "#FFB22C", // Custom orange
        button: "#10B981",  // Custom green
        myGray: "#EAEAEA", // Custom gray
      },
    },
  },
  plugins: [],
};
