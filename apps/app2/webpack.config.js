const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageName = 'app2';
module.exports = {
  entry: {
    index: [path.resolve(__dirname, './src/index.js')],
  },
  output: {
    // path: path.resolve(__dirname, 'build'),
    // filename: '[name].[hash:8].js',
    // library: 'app2',
    // libraryTarget: 'umd',
    // publicPath: 'http://localhost:8001'
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ]
      },

    ]
  },
  optimization: {
    splitChunks: false,
    minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.ejs'),
      chunksSortMode: 'none',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  devServer: {
    port: 8001,
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
}