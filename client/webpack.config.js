const path = require("path");
var webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

module.exports = {
  //mode: "development",
  mode: "production",

  entry: {
    main: path.resolve(__dirname, "./src/index.tsx"),
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["public/build"],
    }),
    new HtmlWebpackPlugin({
      template: "src/templates/index.html",
    }),

  ],

  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].js.map",
  },

  resolve: {
       extensions: [".ts", ".tsx", ".js",".jsx"],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|svg|jpg|jpeg|png)$/,
        loader: "file-loader",
      }
    ],
  },

  /*     module: {
    rules: [
      { test: /\.css?$/, loader: ['style-loader', 'css-loader'] }
    ]
  }, */
  optimization: {
    minimize: true,
  },
  devServer: {
    //  historyApiFallback:true,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  devtool: "source-map"
};