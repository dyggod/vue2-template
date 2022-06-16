const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  // 开发运行时的eslint规则
  lintOnSave: 'default',

  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/theme/theme.less')],
    },
  },

  css: {
    loaderOptions: {
      less: {
        // 配置less选项
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias // 添加别名
      .set('@', path.resolve(__dirname, './src'))
      .set('#', path.resolve(__dirname, './src/components'))
      .set('@store', path.resolve(__dirname, './src/store'));
  },
});
