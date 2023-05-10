/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors :{
        primdark : '#581c87',
        primlight: '#14b8a6'
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

