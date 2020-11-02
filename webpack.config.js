const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "index.min.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "template"
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"]
  },
  // externals: [
  //   "game-core",
  // ],
  // externals: [nodeExternals()],
  plugins: [
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true
    // })
  ],
  devServer: {
    writeToDisk: true,
    watchOptions: {
      poll: 1000,
    },
    contentBase: path.resolve(__dirname, "./dist"),
    publicPath: "/dist",
    host: "0.0.0.0",
    port: 8082,
    open: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, loader: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules|game-core/
      }
    ]
  }
}
