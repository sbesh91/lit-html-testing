const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './src/index.js'    
  },  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  watch: true,
  plugins: [
    new UglifyJSPlugin({ 
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.IgnorePlugin(/vertx/)
  ]
};