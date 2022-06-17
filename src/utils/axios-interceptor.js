import Cookie from 'js-cookie';

const reqCommon = {
  /**
   * 发送请求之前的拦截器
   * @param config axios config
   * @param options 应用配置 包含: {router, store, message}
   * @returns {*}
   */
  onFulfilled(config, options) {
    const { message } = options;
    const { url, xsrfCookieName } = config;
    if (url.indexOf('login') === -1 && xsrfCookieName && !Cookie.get(xsrfCookieName)) {
      message.warning('认证 token 已过期，请重新登录');
    }
    return config;
  },
  /**
   * 请求出错的拦截器
   * @param error 错误对象
   * @param options 应用配置 包含: {router, store, message}
   * @returns {Promise<never>}
   */
  onRejected(error, options) {
    const { message } = options;
    message.error(error.message);
    return Promise.reject(error);
  },
};

// TODO: 待完善响应拦截器，操作 token
const resCommon = {
  // 在响应数据之前执行
  onFulfilled(response, options) {
    return response;
  },

  /**
   * 响应出错时执行
   * @param {*} error 错误对象
   * @param {*} options 应用配置
   * @returns {Promise<never>}
   */
  onRejected(error, options) {
    const { message } = options;
    const { response } = error;
    message.error('响应出错');
    return Promise.reject(error);
  },
};

export default {
  reqInterceptors: [reqCommon],
  resInterceptors: [resCommon],
};
