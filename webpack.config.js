const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/index.ts",
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
    new HtmlPlugin({ template: "./public/index.html" }),
  ],
  devServer: {
    port: 9876,
    open: true,
    hot: true,
    compress: true,
    overlay: {
      warnings: false,
      errors: false,
    },
    stats: "errors-warnings",
  },
  devtool: isProd ? false : "source-map",
};

module.exports = config;
