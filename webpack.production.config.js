const pkg = require('./package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'null',
  entry: {
        app:  __dirname + "/app/main.js",
        vendor: Object.keys(pkg.dependencies),
    },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "js/[name].[chunkhash:16].js",
  },
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
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
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader'],
                exclude: /node_modules/
            }
        ]
  	
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      }),
      new webpack.DefinePlugin({
      	'process.env':{
      	  'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      	}
    	}),
    	// 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    	new webpack.optimize.OccurrenceOrderPlugin(),
    	
    	// 分离CSS和JS文件
    	//new ExtractTextPlugin('/css/[name].[chunkhash:16].css'), 
    	new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      	filename: '[name].[hash].css',
      	chunkFilename: '[id].[hash].css'
    	}),
    	// 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    	new webpack.DefinePlugin({
    	  __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    	})
    ],
    // 提供公共代码
    optimization: {
    	splitChunks: {
    	  chunks: 'all',
    	  minChunks: 1,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: "vendor",
                    name: "vendor"
                }
            }
    }
  }
}