import { mapActions } from 'pinia';
// 应用配置
const appOptions = {
  router: undefined,
  i18n: undefined,
  store: undefined,
};

/**
 * 设置应用配置
 * @param options
 */
export function setAppOptions(options) {
  const { router, store, i18n } = options;
  appOptions.router = router;
  appOptions.store = store;
  appOptions.i18n = i18n;
}

export function loadRoutes() {
  const { store } = appOptions;
  const actions = { ...mapActions(store.routesStore, ['generateRoutes']) };
  actions.generateRoutes();
}

export function loadRoutesWidthOut(appRouter) {
  console.log('appRouter: ', appRouter);
}

export function createRouterGuards(router) {
  router.beforEach((to, from, next) => {
    console.log('next: ', next);
    console.log('from: ', from);
    console.log('to: ', to);
  });
}
