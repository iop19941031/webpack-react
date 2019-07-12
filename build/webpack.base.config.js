const path = require('path')

const resolve = dir => path.join(__dirname, '..', dir)
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html模板
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    // 配置loader
    rules: [
      {
        test: /\.m?js$/,
        include: resolve('src'), // 只解析src下面的文件,不推荐用exclude
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        // include: resolve('src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false
              // hashPrefix: 'hash',
            }
          }, // 将 CSS 转化成 CommonJS 模块
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        // include: resolve('src'),
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          {
            loader: 'css-loader',
            options: {
              modules: true
              // hashPrefix: 'hash',
            }
          }, // 将 CSS 转化成 CommonJS 模块
          'postcss-loader',
          'less-loader' // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // 将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
              // hashPrefix: 'hash',
            }
          }, // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'postcss-loader' // 将 Sass 编译成 CSS
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('/dist/index.html'), // 生成的html文件存放的地址和文件名
      template: resolve('/index.html') // 基于index.html模板进行生成html文件
    })
  ]
}
