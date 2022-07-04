import axios from 'axios';
import Cookie from 'js-cookie';

// 跨域认证信息 header 名
const xsrfHeaderName = 'Authorization_Token';

// 请求头中存放认证信息的字段
export const headerAuthName = 'Authorization';

// 请求配置
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.timeout = 5000; // 超时时间
axios.defaults.withCredentials = true; // 跨域认证
axios.defaults.xsrfHeaderName = xsrfHeaderName;
axios.defaults.xsrfCookieName = xsrfHeaderName;

//  HTTP状态码
export const HTTP_STATUS = {
  SUCCESS: 200,
  AUTHORIZATION_REQUIRED: 401,
  SERVICE_FAILURE: 500,
};

// 认证类型
export const AUTH_TYPE = {
  BEARER: 'Bearer',
  BASIC: 'basic',
  AUTHONE: 'AUTH1',
  AUTHTWO: 'auth2',
};

// HTTP 请求方法
export const METHOD = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  BATCHDELETE: 'batchDelete',
  PUT: 'put',
  PATCH: 'patch',
};

// 返回数据状态码
export const RES_CODE = {
  SUCCESS: 200, // 成功
  PARAMS_ERROR: 400, // 参数错误
  UNAUTHORIZED: 401, // 未授权
  AUTHORIZATION_EXPIRED: 400100, // 认证过期
  AUTHORIZATION_EXPIRING: 400200, // 认证即将过期
};

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<AxiosResponse<T>>}
 */
async function request(url, method, params, config) {
  switch (method) {
    case METHOD.GET:
      return axios.get(url, { params, ...config });
    case METHOD.POST:
      return axios.post(url, params, config);
    case METHOD.PUT:
      return axios.put(url, params, config);
    case METHOD.PATCH:
      return axios.patch(url, params, config);
    case METHOD.DELETE:
      return axios.delete(url, params, config);
    case METHOD.BATCHDELETE:
      return axios({
        method: 'delete',
        url,
        data: params,
        ...config,
      });
    default:
      return axios.get(url, { params, ...config });
  }
}

/**
 * 设置认证信息
 * @param auth {Object}
 * @param authType {AUTH_TYPE} 认证类型，默认：{AUTH_TYPE.BEARER}
 */
function setAuthorization(auth, authType = AUTH_TYPE.BEARER) {
  switch (authType) {
    case AUTH_TYPE.BEARER:
      Cookie.set(xsrfHeaderName, `Bearer ${auth.token}`, { expires: auth.expireAt });
      break;
    case AUTH_TYPE.BASIC:
    case AUTH_TYPE.AUTHONE:
    case AUTH_TYPE.AUTHTWO:
    default:
      break;
  }
}

/**
 * 移出认证信息
 * @param authType {AUTH_TYPE} 认证类型
 */
function removeAuthorization(authType = AUTH_TYPE.BEARER) {
  switch (authType) {
    case AUTH_TYPE.BEARER:
      Cookie.remove(xsrfHeaderName);
      break;
    case AUTH_TYPE.BASIC:
    case AUTH_TYPE.AUTHONE:
    case AUTH_TYPE.AUTHTWO:
    default:
      break;
  }
}

/**
 * 检查认证信息
 * @param authType
 * @returns {boolean}
 */
function checkAuthorization(authType = AUTH_TYPE.BEARER) {
  switch (authType) {
    case AUTH_TYPE.BEARER:
      if (Cookie.get(xsrfHeaderName)) {
        return true;
      }
      break;
    case AUTH_TYPE.BASIC:
    case AUTH_TYPE.AUTHONE:
    case AUTH_TYPE.AUTHTWO:
    default:
      break;
  }
  return false;
}

/**
 * 加载 axios 拦截器
 * @param interceptors
 * @param options
 */
function loadInterceptors(interceptors, options) {
  const { reqInterceptors, resInterceptors } = interceptors;

  // 加载请求拦截器
  reqInterceptors.forEach((item) => {
    let { onFulfilled, onRejected } = item;
    if (!onFulfilled || typeof onFulfilled !== 'function') {
      onFulfilled = (config) => config;
    }
    if (!onRejected || typeof onRejected !== 'function') {
      onRejected = (error) => Promise.reject(error);
    }
    axios.interceptors.request.use(
      (config) => onFulfilled(config, options),
      (error) => onRejected(error, options),
    );
  });

  // 加载响应拦截器
  resInterceptors.forEach((item) => {
    let { onFulfilled, onRejected } = item;
    if (!onFulfilled || typeof onFulfilled !== 'function') {
      onFulfilled = (response) => response;
    }
    if (!onRejected || typeof onRejected !== 'function') {
      onRejected = (error) => Promise.reject(error);
    }
    axios.interceptors.response.use(
      (response) => onFulfilled(response, options),
      (error) => onRejected(error, options),
    );
  });
}

/**
 * 将对象的每个属性值添加前缀
 * @param {object} urlObj
 * @param {string} prefix
 */
function addPrefix(urlObj, prefix) {
  Object.keys(urlObj).forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    urlObj[key] = `${prefix}${urlObj[key]}`;
  });
}

export {
  request,
  setAuthorization,
  removeAuthorization,
  checkAuthorization,
  loadInterceptors,
  addPrefix,
};
