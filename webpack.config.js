const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development', // ou 'production'
  entry: './src/index.js', // Certifique-se de que este arquivo existe!
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Certifique-se que este arquivo existe!
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
