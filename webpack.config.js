const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
    assetModuleFilename: "assets/[name][ext][query]",
  },
  module: {
    rules: [
      {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i, // Processamento de imagens
      type: 'asset/resource',  // Isso copia as imagens para a pasta dist
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      inject: "body",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
}