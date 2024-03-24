/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    screens: {
      sm: { min: '50px', max: '870px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '871px', max: '2600px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      // lg: { min: "1024px", max: "1279px" },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // xl: { min: "1280px", max: "1535px" },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1536px" },
      // // => @media (min-width: 1536px) { ... }
    },
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
      fontFamily: {
        youngSerifRegular: ['"young-serif-regular"'],
        outfit: ['"outfit-<uniquifier>"'],
      },
    },
  },
  plugins: [],
};
