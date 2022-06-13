const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
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
});
