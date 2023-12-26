import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '428px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
    },
    colors:{
      "prim": "#AD243B",
      "sec": "#454344",
      "spotify": "#1ED760",
      "gray": "#F0F0F0"
    },
    extend: {
      fontFamily:{
        "title": ["Bebas Neue Cyrillic", "sans-serif"],
      }
    },
  },
  darkMode: "class",
  plugins: [require('flowbite/plugin'), nextui()]
}
export default config
