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
  externals: [
    "tooqingcore",
  ],
  // externals: [nodeExternals()],
  plugins: [
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true
    // })
  ],
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
