import { getToken, removeToken } from './local-storage';
import {
  RES_CODE, AUTH_TYPE, headerAuthName, HTTP_STATUS,
} from './request';

// 请求白名单
const whiteList = [
  '/auth/login',
];

const reqCommon = {
  /**
   * 发送请求之前的拦截器
   * @param config axios config
   * @param options 应用配置 包含: {router, store, message}
   * @returns {*}
   */
  onFulfilled(config, options) {
    const { url, headers } = config;
    if (!whiteList.includes(url)) {
      // header 中添加认证token
      headers[headerAuthName] = `${AUTH_TYPE.BEARER} ${getToken()}`;
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

const resCommon = {
  onFulfilled(response, options) {
    const { message } = options;
    if (response.status !== HTTP_STATUS.SUCCESS) {
      message.error('请求错误');
    }
    // token过期，重新登录
    if (response.data.code === RES_CODE.AUTHORIZATION_EXPIRED) {
      removeToken();
      message.error('登录过期，请重新登录');
      window.location.reload();
    }
    return response.data;
  },

  onNoApiAuth(response, options) {
    const { message } = options;
    if (response.data.code === RES_CODE.UNAUTHORIZED) {
      message.error('操作权限不足');
    }
    return Promise.reject(response.data.msg);
  },

  /**
   * 响应出错时执行
   * @param {*} error 错误对象
   * @param {*} options 应用配置
   * @returns {Promise<never>}
   */
  onRejected(error, options) {
    const { message } = options;
    message.error('响应出错');
    return Promise.reject(error);
  },
};

export default {
  reqInterceptors: [reqCommon],
  resInterceptors: [resCommon],
};
