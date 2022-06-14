import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setAppOptions } from './router/utils';
import { pinia } from './store';
import store from './store/modules';
import './theme/index.less';

Vue.config.productionTip = false;

Vue.use(Antd);

setAppOptions({ router, store });

setupRouter(router);

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
