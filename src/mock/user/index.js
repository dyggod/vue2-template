import Mock from 'mockjs';
import { resSuccess } from '../common/res';

const token = Mock.mock({
  token: '@string(10, 20)',
});

const userInfo = Mock.mock({
  id: '@string(20, 30)',
  username: '@string(2, 5)',
  nickName: '@string(2, 5)',
  roleName: '管理员',
  createTime: '@datetime()',
});

const permissions = [
  'system:view',
  'dashboard:view',
];

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/auth/login`, 'post', () => resSuccess(token));

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/auth/logout`, 'get', () => { resSuccess(); });

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/users/current/info`, 'get', () => resSuccess({
  permissions,
  user: userInfo,
}));
