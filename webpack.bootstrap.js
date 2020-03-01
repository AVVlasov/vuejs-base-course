const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  mode: "development",
  entry: {
    bootstrap: "./bootstrap/main.js"
  },
  output: {
    filename: "[name].js",
    library: "bootstrap",
    path: path.resolve(__dirname, outputDirectory),
    libraryExport: "default",
    publicPath: `/bootstrap/`
  },

  plugins: [new CleanWebpackPlugin()],

  resolve: {
    extensions: [".js"]
  },

  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      }
    ]
  }
};
