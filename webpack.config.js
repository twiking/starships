var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.css$/,
        exclude: ['app.min.js', 'app.css'],
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
    ]
  },
  output: {
    path: debug ? path.resolve(__dirname, "src") : path.resolve(__dirname, "dist"),
    filename: "app.min.js"
  },
  plugins: debug ? [
    new ExtractTextPlugin('app.css')
  ] : [
    new CleanWebpackPlugin(['./dist']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin('app.css'),
    new CopyWebpackPlugin([
      { from: './src/index.html' },
      { from: './src/assets', to: 'assets' }
    ])
  ],
};
