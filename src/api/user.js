import { request, METHOD } from '@/utils/request';

const userApi = {
  login: '/auth/login',
  logout: '/auth/logout',
};

export async function login(username, password) {
  return request(
    userApi.login,
    METHOD.POST,
    { username, password },
  );
}

export async function logout() {
  return request({
    url: userApi.logout,
    method: 'post',
  });
}

export default {
  login,
  logout,
};
