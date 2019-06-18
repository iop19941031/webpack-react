const commonConfig = require('./webpack.base.config.js')

const path = require('path');
const merge = require('webpack-merge')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = merge(commonConfig, {
    mode: 'production', // webpack4新增属性，默认返回production,提供一些默认配置，例如cache:true   
    output: {
        filename: '[name].js', // 生成的js文件的名字
        path: resolve('dist'), // 生成的js存放目录
    },
})