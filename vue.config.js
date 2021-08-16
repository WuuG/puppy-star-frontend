module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/variable.scss";`,
      },
    },
  },
};
