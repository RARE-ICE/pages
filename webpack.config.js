var path = require('path')
var webpack = require('webpack')
var CleadWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
            main:'./src/main.js',
            vendor:['vue'],//公共部分 长期不修改文件。
          },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: '[name].[chunkHash:6].js',
    chunkFilename:'[name].[chunkHash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port:1993,
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins:[
     new CleadWebpackPlugin([path.resolve('./dist')]),
     new webpack.optimize.CommonsChunkPlugin({
      name:['vendor','mainfirst']
    }),
    new HtmlWebpackPlugin({
      template:path.resolve('src',"index.html"),
      filename:'../index.html',
      chunks:['vendor','mainfirst','main'],
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
  ])
}
