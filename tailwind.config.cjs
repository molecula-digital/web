/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: "#f6f3ec",
        ["cream-alt"]: "#eeebe5",
        primary: {
          50: "#e3e4e8",
          100: "#c7c9d1",
          200: "#a1a5b0",
          300: "#7a8190",
          400: "#5c6374",
          500: "#3e4558",
          600: "#2e3444",
          700: "#1f2330",
          800: "#141b2a", // Base color
          900: "#0d121e",
          950: "#131b20"
        },
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
