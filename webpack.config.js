const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LotR Project',
      inject: true,
      template: './index.html',
      cache: false,
      production: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },

      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    open: true,
    port: 8082,
  },
};
