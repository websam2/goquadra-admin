/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },

    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        'inter': ['"Inter"','cursive', 'arial'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {          
          "primary": "#0A4888",                   
          "secondary": "#E0BC00",                   
          "neutral-content": "#ABABAB",                   
          "neutral": "#FFFFFF",                        
          "base-100": "#F7F7F7",                   
          "info": "#3ABFF8",
          "success": "#10B981",                   
          "warning": "#ffc82c",                   
          "error": "#DC2626",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
};
