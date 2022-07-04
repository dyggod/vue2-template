import { request, METHOD } from '@/utils/request';

const userApi = {
  login: '/auth/login',
  logout: '/auth/logout',
  userInfo: '/users/current/info',
};

export async function login(username, password) {
  return request(
    userApi.login,
    METHOD.POST,
    { username, password },
  );
}

export async function logout() {
  return request(userApi.logout, METHOD.GET);
}

export async function getUserInfo() {
  return request(
    userApi.userInfo,
    METHOD.GET,
  );
}

export default {
  login,
  logout,
  getUserInfo,
};
