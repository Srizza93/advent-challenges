/* eslint-disable no-undef */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // !!!!!! MAKE SURE TO CHANGE MODE TO PRODUCTION WHEN DOPLOYING FOR PRODUCTION !!!!!!!!!
  mode: "production",
  entry: {
    main: {
      import: path.resolve(__dirname, "./src/scripts/app.js"),
    },
    two: {
      import: path.resolve(__dirname, "./src/scripts/two.js"),
    },
    three: {
      import: path.resolve(__dirname, "./src/scripts/three.js"),
    },
  },
  // devtool: "inline-source-map", // ONLY FOR DEVLOPMENT MODE
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "deploy"),
    clean: true,
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["vue-svg-loader"],
      },
      {
        test: /\.(?:jpg|png|mp3)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "advent",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "advent",
      filename: "two.html",
      chunks: ["two"],
    }),
    new HtmlWebpackPlugin({
      title: "advent",
      filename: "three.html",
      chunks: ["three"],
    }),
    new VueLoaderPlugin(),
  ],
};
