module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/variable.scss";`,
      },
    },
  },
  // 配置本地跨域
  devServer: {
    proxy: {
      "/local": {
        target: "http://localhost:3000/api",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/local": "", // rewrite path
        },
      },
    },
  },
};
