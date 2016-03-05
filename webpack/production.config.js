import path from "path";
import webpack from "webpack";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import SplitByPathPlugin from "webpack-split-by-path";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";

import base from "./base.config";

export default {
  ...base,
  debug: false,
  module: {
    ...base.module,
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new SplitByPathPlugin([
      {
        name: "vendor",
        path: path.resolve("./node_modules")
      }
    ]),
    new ExtractTextPlugin("[name].css?[contenthash:8]", {
      allChunks: true
    }),
    new HTMLWebpackPlugin({
      filename: "index.html",
      minify: {
        collapseWhitespace: true
      },
      template: "./template/module"
    })
  ],
  postcss() {
    return [
      autoprefixer({
        browsers: ["last 2 version", "> 1%", "IE >= 9"]
      }),
      cssnano()
    ];
  }
};
