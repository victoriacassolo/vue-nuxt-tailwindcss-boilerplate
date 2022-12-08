const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#009FE3',
        accent: colors.fuchsia,
        success: colors.green,
        info: colors.violet,
        warning: colors.amber,
        danger: colors.red,
        default: colors.slate,
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
