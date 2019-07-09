const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./frontend/comunidades-unidas-internal.tsx",
  output: {
    filename: "comunidades-unidas-internal.js",
    path: __dirname + "/static",
    publicPath: process.env.PUBLIC_PATH || "/static/"
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.tsx$|\.ts|\.js|\.jsx/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    index: "index.html",
    port: 9018,
    publicPath: "http://localhost:9018/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  plugins: [new CleanWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
  optimization: {
    namedChunks: true
  }
};
