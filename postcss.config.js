const normalize = require('postcss-normalize');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    normalize(),
    autoprefixer({
      cascade: false,
    }),
  ],
};
