var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    publicPath: 'dist/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'file'
      }
    ]
  },
  resolveLoader: {
    alias: {
      'copy': 'file-loader?name=[path][name].[ext]'
    }
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    /* * /
    new webpack.optimize.UglifyJsPlugin()
    /**/
  ]
};
