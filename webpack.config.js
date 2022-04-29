const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    index: [path.resolve(__dirname, './src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    // publicPath: '/',
  },
  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   filename: 'micro_1',
  //   library: 'micro_1',
  //   libraryTarget: 'umd',
  //   umdNamedDefine: true,
  //   publicPath: '/static/micro-web/'
  // },
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
        test: /\.(cs|les)s$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
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
    port: 9000,
    // host: '0.0.0.0',
    // headers: { 'Access-Control-Allow-Origin': '*' },
    // disableHostCheck: true,
    // historyApiFallback: true,
    // publicPath: '/'
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // historyApiFallback: true,
  }
}