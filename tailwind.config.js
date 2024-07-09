/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}


// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 2s ease-out',
      },
    },
  },
  variants: {},
  plugins: [],
}


module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 2s ease-out', // Duration set to 2s
      },
    },
  },
  variants: {},
  plugins: [],
}




 















