module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "@/assets/scss/global/typography.scss";`,
          additionalData: `@import "@/assets/scss/index.scss";`
        }
      }
    }
  };