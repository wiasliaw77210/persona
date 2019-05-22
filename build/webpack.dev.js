const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../', 'src') + '/index.tsx',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../', 'src') + '/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../', 'dist'),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
};
