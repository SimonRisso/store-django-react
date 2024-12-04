/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif']
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100px)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slide: 'slide 0.5s ease-out forwards'
      },
      scale: {
        70: "0.7"
      },
      screens: {
        'custom': '1030px'
      },
    },
  },
  plugins: [],
}

