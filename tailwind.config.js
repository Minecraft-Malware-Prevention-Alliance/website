/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#181a1b",
        // secondary: "#b38693",
        // tertiary: "#ffd1c0",
        // highlight: "#ffc0f9",
        blurple: "#5865F2",
      }
    }
  },
  plugins: []
  // plugins: [require("daisyui")]
};
