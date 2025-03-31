/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Scan all React files
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // Add DaisyUI as a plugin
    daisyui: {
        themes: ["light", "dark", "luxury", "synthwave"], // Available themes
    },
  }
  