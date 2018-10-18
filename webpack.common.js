const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loader: ['babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  performance: { hints: false },
};
