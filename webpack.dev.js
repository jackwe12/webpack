//localhost server, for dev
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:'development',
  entry:{
    app:'./indx.js'
  },
  devtool:'inline-source-map',
  devServer: {
  contentBase: './dist',
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};