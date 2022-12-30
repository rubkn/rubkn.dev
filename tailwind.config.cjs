/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospaced"],
        test: ["Roboto Mono", "monospaced"],
      },
      colors: {
        black: {
          100: "#cfcece",
          200: "#9f9e9c",
          300: "#706d6b",
          400: "#403d39",
          500: "#100c08",
          600: "#0d0a06",
          700: "#0a0705",
          800: "#060503",
          900: "#030202",
        },
        white: {
          100: "#fcfcfb",
          200: "#f9f9f8",
          300: "#f5f7f4",
          400: "#f2f4f1",
          500: "#eff1ed",
          600: "#bfc1be",
          700: "#8f918e",
          800: "#60605f",
          900: "#30302f",
        },
        indigo: {
          100: "#d6e0e3",
          200: "#adc0c7",
          300: "#84a1ab",
          400: "#5b818f",
          500: "#326273",
          600: "#284e5c",
          700: "#1e3b45",
          800: "#14272e",
          900: "#0a1417",
        },
        red: {
          100: "#e9d2d2",
          200: "#d4a5a5",
          300: "#be7977",
          400: "#a94c4a",
          500: "#931f1d",
          600: "#761917",
          700: "#581311",
          800: "#3b0c0c",
          900: "#1d0606",
        },
      },
      backgroundImage: {
        topography: "url('/assets/topography.svg')",
      },
    },
  },
  plugins: [],
};
