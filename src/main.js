import Vue from 'vue';
import Antd from 'ant-design-vue';
import { loadInterceptors } from '@/utils/request';
import interceptors from '@/utils/axios-interceptor';
import App from '@/App.vue';
import router, { setupRouter } from '@/router';
import { pinia } from '@/store';
import store from '@/store/modules';
import { setAppOptions } from '@/router/utils';
import './theme/index.less';

/**
 * 引导程序配置启动
 * @param {*} routerInstance 路由实例
 * @param {*} storeModules store模块
 */
function bootStrap(routerInstance, storeModules) {
  // 设置应用配置，用以路由处理
  setAppOptions({ routerInstance, storeModules });
  // 启动路由
  setupRouter(routerInstance);
  // 加载 axios 拦截器
  loadInterceptors(interceptors, { router, storeModules });
}

Vue.config.productionTip = false;

// 挂载antd
Vue.use(Antd);

bootStrap(router, store);

new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount('#app');
