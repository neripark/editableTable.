module.exports = {
  context: __dirname + '/src',
  entry: {
    js: "./index.js"
  },
  output: {
    path: __dirname + '/dist',
    filename: "./js/editableTable.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }
    ]
  }
}
