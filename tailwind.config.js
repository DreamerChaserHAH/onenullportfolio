/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ECFAFF',
      },
      inset: {
        '76': '19rem',
        '4': '-2rem'
      },
      letterSpacing: {
        tightest: '-10px',
        tighter: '-5px',
      },
      fontFamily:{
        'space':['Space Grotesk', 'sans-serif'],
        'gosha':['PP Gosha Sans', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

