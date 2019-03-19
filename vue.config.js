module.exports = {
  // 基本路径
  publicPath: './',
  outputDir: 'dist',
  /* 放置静态资源的文件夹名称 */
  assetsDir: 'static',
  configureWebpack: {
    performance: {
      hints: false
    }
  }
}
