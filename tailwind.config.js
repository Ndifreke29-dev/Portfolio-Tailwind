/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bgColor: '#1f242d',
        secondBgcolor: '#323946',
        textColor: '#fff',
        mainColor: '#0ef',
      }
    },
  },
  plugins: [],
}

