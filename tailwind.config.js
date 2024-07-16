/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#132D3B",
        lightblue: "#0093CC",
        light:"#F4F4F4",
        dark: "#181818",
        graylighter: "#C1C1C1",
        graydarker: "#494949",
      },
      fontFamily: {
        primary: ["Circular Std", "sans-serif"],
      },
      fontSize: {
        'xl': '3.50rem', 
        'lg': '2rem', 
        'md': '1.4rem', 
        'sm': '1rem',
        'xs': '0.9rem',
      },
      lineHeight:{
        'xl': '3.70rem', 
        'lg': '2.45rem', 
        'md': '1.6rem', 
        'sm': '1.2rem',
        'xs': '1rem',
      },
      fontWeight: {
        book: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      maxWidth: {
        'xs': '98vw',
        'sm': '96vw',
        'md': '95vw',
        'lg': '90vw',
        'xl': '1280px',
      },
      padding: {
        'xs': '1vw',
        'sm': '2vw',
        'md': '2.5vw',
        'lg': '5vw',
        'xl': '10vw',
      },
    },
  },
  darkmode: "class",
  plugins: [],
}
