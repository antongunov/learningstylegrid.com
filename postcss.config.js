const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fontMagician = require('postcss-font-magician');
const normalize = require('postcss-normalize');

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
    cssnano({
      preset: 'default',
    }),
  ]
};
