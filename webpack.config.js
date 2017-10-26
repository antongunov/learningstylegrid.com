const webpack = require('webpack');
const resolve = require('path').resolve;

require('dotenv').config();

const live = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
  entry: resolve('app/main.js'),
  output: {
    path: resolve('build/assets/js/'),
    filename: 'main.js',
    publicPath: 'assets/js/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader?data=@import "assets/sass/utils/variables";',
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('app'),
          // node_modules isn't transpiled by default
          resolve('node_modules/svg-radar-chart'),
        ],
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
        { from: /^\/app/, to: '/app/index.html' },
      ]
    },
  },
  plugins: !live
    ? [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        }
      }),
    ]
    : [],
};
