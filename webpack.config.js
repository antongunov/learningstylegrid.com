const resolve = require('path').resolve;

require('dotenv').config();

const live = !process.env.NOVE_ENV || process.env.NOVE_ENV === 'development';

module.exports = {
  entry: resolve('app/main.js'),
  output: {
    path: resolve('build/assets/js/'),
    filename: 'main.js',
    publicPath: !live ? 'assets/js/' : void 0,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: resolve('build/'),
    historyApiFallback: {
      rewrites: [
        { from: /^\/app/, to: '/app.html' },
      ]
    },
  },
};
