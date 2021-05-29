module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
  ],
  corePlugins: {
    // ...
   borderColor: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily:{
        'body': ['DM Sans, sans-serif'],
      },
      container: {
        center: true,
        padding: "15px",

        screens: {
          lg: "900px",
        },
      },
      colors:{
        body:{
          DEFAULT: '#333333',
        },

        primary:{
          DEFAULT: '#333333',
        },
        secondary:{
          'blue': '#2251ff',
        },
        
      },

    },
  },
  variants: {
    extend: {
      margin: ['responsive', 'hover'],
    },
  },
  plugins: [
    
  ],
}
