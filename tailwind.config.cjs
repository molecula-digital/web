/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(3rem, 10vw, 8rem)",
        "hero-sub": "clamp(1.5rem, 4vw, 3rem)",
      },
      colors: {
        cream: "#f6f3ec",
        ["cream-alt"]: "#eeebe5",
        ["md-green"]: "#019f5f",
        "green-haze": {
          50: "#effef7",
          100: "#d9ffee",
          200: "#b5fddd",
          300: "#7cf9c3",
          400: "#3ceca1",
          500: "#13d482",
          600: "#08a462",
          700: "#0b8a54",
          800: "#0e6d46",
          900: "#0e593c",
          950: "#01321f",
        },
        ultrablue: {
          100: "#dae0fe",
          200: "#b6c0fe",
          300: "#91a1fd",
          400: "#6d81fd",
          500: "#4862fc",
          600: "#3a4eca",
          700: "#2b3b97",
          800: "#1d2765",
          900: "#0e1432",
        },
        eucalyptus: {
          100: "#daf8ed",
          200: "#b5f1db",
          300: "#90eac9",
          400: "#6be3b7",
          500: "#46dca5",
          600: "#38b084",
          700: "#2a8463",
          800: "#1c5842",
          900: "#0e2c21",
        },
        water: {
          100: "#f4fdff",
          200: "#eafbff",
          300: "#dff8ff",
          400: "#d5f6ff",
          500: "#caf4ff",
          600: "#a2c3cc",
          700: "#799299",
          800: "#516266",
          900: "#283133",
        },
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
          950: "#131b20",
        },
        defaultText: "#141b2a", // Custom default text color
      },
      textColor: {
        DEFAULT: "#141b2a", // Set the default text color
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(8, 164, 98, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(8, 164, 98, 0.8)" },
        },
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
};
