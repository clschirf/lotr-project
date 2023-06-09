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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.jsx',
      '.json',
      '.png',
      '.svg',
      '.jpeg',
      '.jpg',
      '*'
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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
