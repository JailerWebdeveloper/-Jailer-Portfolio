/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [
      "light",
      "dark",
      "retro",
      {
      code:{
          
        "primary": "#641ae6",
                 
        "secondary": "#7868f6",
                 
        "accent": "#1fb2a6",
                 
        "neutral": "#19252e",
                 
        "base-100": "#19252e",
                 
        "info": "#3abff8",
                 
        "success": "#36d399",
                 
        "warning": "#fbbd23",
                 
        "error": "#f87272",
                 },
                },
    ],
  },
}