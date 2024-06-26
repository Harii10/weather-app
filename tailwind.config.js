/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        'd-blue': '#83B4FF',
        'd-bl': '#667eea',
        'd-b': '#764ba2',
        'bll': '#0F0F0F',
        'i-bg':'#03001C',
         
      },
      fontFamily:{
        'fon': '"Mukta", sans-serif'
      },
      
    },
  },
  plugins: [],
}

