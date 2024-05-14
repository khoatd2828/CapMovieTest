/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        10: '10px',
        16: '16px',
        20: '20px',
      },
      spacing: {
        2:'2px',
        4:'4px',
        6:'6px',
        8:'8px',
        10:'10px',
        20: '20px'
      },
      borderRadius: {
        2:'2px',
        4:'4px',
        6:'6px',
        8:'8px',
        20:'10px',
      },
      colors: {

      },
      fontWeight: {
        
      }
    },
  },
  plugins: [],
}