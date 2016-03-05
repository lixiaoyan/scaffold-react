import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

import config from "../config.json";

export default {
  context: path.resolve("./src"),
  entry: {
    app: "."
  },
  output: {
    path: path.resolve("./dist"),
    publicPath: config.baseURL,
    filename: "[name].js?[chunkhash:8]",
    chunkFilename: "[name].js?[chunkhash:8]"
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!less?strictMath&strictUnits")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss")
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.(ico|png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
        loader: "file?name=assets/[name].[ext]?[hash:8]"
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    publicPath: config.baseURL,
    historyApiFallback: true
  }
};
