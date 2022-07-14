import globalSpin from './index.vue';

const Spin = {};

Spin.install = (Vue) => {
  const SpinConstructor = Vue.extend(globalSpin);
  const spin = new SpinConstructor();
  const spinEl = spin.$mount().$el;
  document.body.appendChild(spinEl);
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$spin = {
    show(options) {
      spin.start(options);
    },
    end() {
      spin.end();
    },
  };
};

export default Spin;
