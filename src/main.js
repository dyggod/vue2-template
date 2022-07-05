import Vue from 'vue';
import Antd from 'ant-design-vue';
import { loadInterceptors } from '@/utils/request';
import interceptors from '@/utils/axios-interceptor';
import App from '@/App.vue';
import router, { setupRouter } from '@/router';
import { pinia } from '@/store';
import store from '@/store/modules';
import { setAppOptions } from '@/router/utils';
import { initI18n, LOCALES } from '@/locales';
import registerDirective from '@/directive';
import '@/mock';
import './utils/rem';
import './theme/index.less';

/**
 * 引导程序配置启动
 * @param {*} routerInstance 路由实例
 * @param {*} storeModules store模块
 */
function bootStrap(routerInstance, storeModules, message) {
  // 设置应用配置，关联路由与store的处理
  setAppOptions({ router: routerInstance, store: storeModules });
  // 启动路由
  setupRouter(routerInstance);
  // 加载 axios 拦截器
  loadInterceptors(interceptors, {
    router: routerInstance,
    store: storeModules,
    message,
  });
}

Vue.config.productionTip = false;

// 挂载antd
Vue.use(Antd);

// 注册自定义指令
registerDirective(Vue);

// 设置国际化配置
const i18n = initI18n(LOCALES.zh.value, LOCALES.en.value);

bootStrap(router, store, Vue.prototype.$message);

new Vue({
  pinia,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
