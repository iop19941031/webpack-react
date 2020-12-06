const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = dir => path.join(__dirname, '..', dir)
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html模板
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'asset/js/[name][hash].js', // 生成的js文件的名字
    chunkFilename: "asset/js/chunk.[chunkhash].js", // 长效缓存(/guides/caching)
    path: path.resolve(__dirname, '..', 'dist') // 生成的js存放目录
  },
  module: {
    // 配置loader
    rules: [
      {
        test: /\.js$/,
        include: resolve('src'), // 只解析src下面的文件,不推荐用exclude
        use: [
          {
            loader: "thread-loader",
            options: {
              // 产生的 worker 的数量，默认是 cpu 的核心数
              workers: 4,
              // 一个 worker 进程中并行执行工作的数量,默认为20
              workerParallelJobs: 50,
              // Allow to respawn a dead worker pool
              // respawning slows down the entire compilation
              // and should be set to false for development
              poolRespawn: false,
              // 闲置时定时删除 worker 进程
              // 默认为 500ms
              // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
              poolTimeout: 2000,
              // 池(pool)分配给 worker 的工作数量
              // 默认为 200
              // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
              poolParallelJobs: 50,
              // 池(pool)的名称
              // 可以修改名称来创建其余选项都一样的池(pool)
              name: "my-pool"
            }
          },
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf)$/,
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
  resolve: {
    alias: {
      '@': resolve('src'),
      '@@': resolve('src/assets')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        // https://github.com/jantimon/html-webpack-plugin#minification
        // filename: resolve('/dist/index.html'), // 生成的html文件存放的地址和文件名
        template: resolve('/public/index.html'),// 基于index.html模板进行生成html文件
      })
  ]
}
