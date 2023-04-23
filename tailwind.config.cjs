/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        com: ["Commissioner"],
      },
      colors: {
        bg: "#f5f2ea",
        cblue: "#1c295e",
        ccyan: "#4e87a1",
        cgreen: "#989635",
        cyellow: "#fcb426",
        cred: "#ec1c2e",
      },
    },
  },
  plugins: [],
};
