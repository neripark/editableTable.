const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
  {
    entry: {
      editableTable: "./src/entry.js"
    },
    output: {
      path: __dirname + '/dist',
      filename: "./js/[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
        },
        {
          test: /\.vue$/,
          // exclude: /node_modules/,
          use: 'vue-loader'
          // options: {
          //   loaders: {
          //     scss: 'vue-style-loader!css-loader!sass-loader'
          //   }
          // }
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
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      }),
      // vue-loader v15以上の場合は必要
      new VueLoaderPlugin()
    ],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm.js'
      }
    }
  }
]
