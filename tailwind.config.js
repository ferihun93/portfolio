/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'Poppins, sans-serif',
      secondary: 'Space Grotesk","sans-serif'
    },
    backgroundImage: {
      profile: 'url(/images/madara.png)'
    },
    extend: {
      colors: {
        primary: {
          hatter: '#221F1F',
          secondary: '#A6BBCC'
        },
        secondary: ''
      }
    },
  },
  plugins: [],
};
