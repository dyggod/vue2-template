const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const { modifyVars } = require('./src/theme/antd.config');

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
      // 载入 antd 样式文件，并可使用其 less 变量
      patterns: [path.resolve(__dirname, './src/theme/index.less')],
    },
  },

  css: {
    loaderOptions: {
      less: {
        // 配置less选项
        lessOptions: {
          modifyVars: modifyVars(),
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
