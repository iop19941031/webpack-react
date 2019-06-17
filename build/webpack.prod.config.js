const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
    mode: 'production', // webpack4新增属性，默认返回production,提供一些默认配置，例如cache:true
    entry: {
        home: './src/index.js', // 设置入口文件
    },
    output: {
        filename: '[name].js', // 生成的js文件的名字
        path: resolve('dist'), // 生成的js存放目录
    },
    module: { // 配置loader
        rules: [
            {
                test: /\.m?js$/,
                include: resolve('src'), // 只解析src下面的文件,不推荐用exclude
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                include: resolve('src'),
                use: ['style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            // hashPrefix: 'hash',
                        }
                    }, // 将 CSS 转化成 CommonJS 模块
                    'postcss-loader'

                ]
            },
            {
                test: /\.less$/,
                include: resolve('src'),
                use: [
                    "style-loader", // 将 JS 字符串生成为 style 节点
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            // hashPrefix: 'hash',
                        }
                    }, // 将 CSS 转化成 CommonJS 模块
                    'postcss-loader',
                    "less-loader" // 将 Less 编译为 CSS
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            // hashPrefix: 'hash',
                        }
                    }, // 将 CSS 转化成 CommonJS 模块
                    {
                        loader: "postcss-loader" // 将 Sass 编译成 CSS
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
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
        ],
    },
    devServer: { // 配置webpack-dev-server， 在本地启动一个服务器运行
        host: 'localhost', // 服务器的ip地址 希望服务器外可以访问就设置 0.0.0.0
        port: 8088, // 端口
        open: false, // 自动打开页面
        hot: true, // 设置热更新(引用react热更新必须设置)
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: resolve('/dist/index.html'), // 生成的html文件存放的地址和文件名
            template: resolve("/index.html"), // 基于index.html模板进行生成html文件
        }),
    ]
}