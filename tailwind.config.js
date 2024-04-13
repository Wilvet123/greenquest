/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homebg': "url('./src/assets/images/Greenquest-bg1.png')",
        'bg-2': "url('./src/assets/images/bg2.jpg')",
        'bg-3': "url('./src/assets/images/bg3.jpg')",
        'bg-4': "url('./src/assets/images/bg4.jpg')",

      },
      fontFamily: {
        'RussoOne': 'Russo One',
        'Bungee': 'Bungee',
        
      }
    },
  },
  plugins: [],
}

