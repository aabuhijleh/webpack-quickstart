const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ESLintPlugin({ extensions: ["tsx", "ts", "js"], failOnWarning: true }),
    new HtmlPlugin({ template: "./src/index.html" }),
  ],
  devServer: {
    port: 9876,
    open: true,
    hot: true,
    compress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    stats: "errors-warnings",
  },
  devtool: isProd ? false : "source-map",
};

module.exports = config;
