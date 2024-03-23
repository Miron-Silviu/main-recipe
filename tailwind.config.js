/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // primary and secondary
        nutmeg: 'hsl(14, 45%, 36%)',
        darkRaspberry: 'hsl(332, 51%, 32%)',

        //neural
        white: 'hsl(0, 0%, 100%)',
        roseWhite: 'hsl(330, 100%, 98%)',
        eggShall: 'hsl(30, 54%, 90%)',
        lightGray: 'hsl(30, 18%, 87%)',
        wageBrown: 'hsl(30, 10%, 34%)',
        darkCharcoal: 'Dark Charcoal',
      },
    },
  },
  plugins: [],
};
