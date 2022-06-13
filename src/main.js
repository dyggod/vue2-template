import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import { pinia } from './store';
import './theme/index.less';

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
