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
        'xxxl': '3.5rem', 
        'xxl': '2.8rem', 
        'xl': '2rem', 
        'lg': '1.6rem', 
        'md': '1.2rem', 
        'sm': '1rem',
        'xs': '0.9rem',
      },
      lineHeight:{
        'xxxl': '3.6rem', 
        'xxl': '2.9rem', 
        'xl': '2.1rem', 
        'lg': '1.7rem', 
        'md': '1.3rem', 
        'sm': '1.1rem',
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
      width: {
        'xs': '95vw',
        'sm': '92.5vw',
        'md': '90vw',
        'lg': '88vw',
        'xl': '86vw',
      },
      maxWidth: {
        'xs': '500px',
        'sm': '600px',
        'md': '800px',
        'lg': '1000px',
        'xl': '1200px',
      },
      padding: {
        'xs': '2.5vw',
        'sm': '5vw',
        'md': '6vw',
        'lg': '7vw',
        'xl': '9vw',
      },
    },
  },
  darkmode: "class",
  plugins: [],
}
