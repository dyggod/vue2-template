import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import { pinia } from './store';
import router, { setupRouter } from './router';
import store from './store/modules';
import { setAppOptions } from './router/utils';
import './theme/index.less';

Vue.config.productionTip = false;

// 挂载antd
Vue.use(Antd);

// 设置应用配置，用以路由处理
setAppOptions({ router, store });

// 启动路由
setupRouter(router);

new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount('#app');
