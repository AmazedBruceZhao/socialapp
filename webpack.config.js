const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath:"/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
     publicPath:"/",
    historyApiFallback: true,
    inline: true
  },
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      })
    ]
}