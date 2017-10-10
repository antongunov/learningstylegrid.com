const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    normalize(),
    fontMagician({
      hosted: [
        'assets/fonts/',
      ],
    }),
    autoprefixer({
      cascade: false,
    }),
  ],
};
