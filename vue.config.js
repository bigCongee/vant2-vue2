const PostcssPluginPx2rem = require('postcss-plugin-px2rem')
console.log('当前环境', process.env.NODE_ENV)
module.exports = {
  publicPath: './', // 基本路径
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          PostcssPluginPx2rem({
            exclude: /node_modules/i,
            rootValue: 75,
            minPixelValue: 3,
            mediaQuery: false,
          }),
        ],
      },
    },
  },
}
