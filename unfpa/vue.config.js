module.exports = {
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