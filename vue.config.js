module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Safe birth even here | UNFPA";
        return args;
      })
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/global/typography.scss";
          @import "@/assets/scss/index.scss";`
        }
      }
    }
  };