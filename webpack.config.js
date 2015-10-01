var webpack = require('webpack');
var path = require('path');

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
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
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
    /* * /
    new webpack.optimize.UglifyJsPlugin({
      disable: false
    })
    /**/
  ]
};
