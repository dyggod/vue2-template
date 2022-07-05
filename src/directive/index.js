const directiveList = [];

const requiredModules = require.context('../directive', true, /index\.js$/);
requiredModules.keys().forEach((fileName) => {
  if (fileName !== './index.js') { // 排除本文件自身
    directiveList.push((requiredModules(fileName).default || requiredModules(fileName)));
  }
});

export default function registerDirective(vueInstance) {
  directiveList.forEach((directive) => {
    vueInstance.use(directive);
  });
}
