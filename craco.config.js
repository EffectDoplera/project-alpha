module.exports = {
  babel: {
    plugins: [
      "react-hot-loader/babel",
      ["import", { "libraryName": "antd", "libraryDirectory": "lib", "style": true}, "antd"],
    ]
  }
}
