//let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = [
  {
    // context: __dirname + '/src',
    entry: {
      editableTable: "./src/index.entry.js",
      test: "./src/test.entry.js"
    },
    output: {
      path: __dirname + '/dist',
      filename: "./js/[name].js"
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
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader'
            }
          }
        },
        {
          test: /\.scss$/,
          use: ['style-loader','css-loader','sass-loader']
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/'
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/'
          }
        }
      ]
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm.js'
      }
    }
  }
  // ,
  // {
  //   context: __dirname + '/src',
  //   entry: {
  //     style: "./sass/style.scss"
  //   },
  //   output: {
  //     path: __dirname + '/dist',
  //     filename: "./css/[name].css"
  //   },
  //   module: {
  //     loaders: [
  //       {
  //         test: /\.scss$/,
  //         exclude: /node_modules/,
  //         loader: ExtractTextPlugin.extract('css-loader!sass-loader')
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new ExtractTextPlugin('./css/[name].css')
  //   ]
  // }
]
