const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};

// for more information, see https://webpack.js.org/configuration/dev-server
config.devServer = {
  port: 9876,
  open: true,
  hot: true,
  compress: true,
  overlay: {
    warnings: false,
    errors: true,
  },
  stats: "errors-warnings",
};

module.exports = config;
