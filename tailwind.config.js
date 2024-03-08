/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      smi: '575px',
      md: '768px',
      lg: '976px',
      slg: '1150px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#6D8C54',
        secondary: '#263C28',
        outlinePri: '#F7C35F'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
