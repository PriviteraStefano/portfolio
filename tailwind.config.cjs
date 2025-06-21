/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        breathe: 'breathe 3s ease-in-out',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        fade: 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        breathe: {
          '0%': { 'font-variation-settings': '"wght" 100' },
          '50%': { 'font-variation-settings': '"wght" 900'}
          //'50%': { 'font-variation-settings': '"wght" 900' },
        }
      },
      colors: {
        primary: "#FBECCF",
        secondary: "#043922",

        /*primary: "#E3FFF5",
        secondary: "#06402B",*/
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        //'variable': ['TheFont', 'sans-serif'],
      },
    },
  },
}
