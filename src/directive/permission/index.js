import permission from './permission';

const install = (Vue) => {
  Vue.directive('permission', permission);
};

permission.install = install;

export default permission;
