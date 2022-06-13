import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

export function setupStore(app) {
  app.use(pinia);
}

export { pinia };
