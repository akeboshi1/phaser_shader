const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "index.min.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs"
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}