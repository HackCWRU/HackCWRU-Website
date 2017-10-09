var path = require('path');
var webpack = require('webpack');
const webpack = require('webpack');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'production';
const isProduction = (NODE_ENV === 'production');
const isDevelopment = (NODE_ENV === 'development');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './web/index.js'
  ],
  context: path.join(__dirname, '../src'),
  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, '../bundles'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, '../src')
    ]
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules!sass-loader?includePaths[]=' +
        path.join(__dirname, '../src')
    }]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  devServer: {
    host: 'localhost.dev',
    historyApiFallback: {
      index: '/'
    }
  }
};
