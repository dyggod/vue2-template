import Mock from 'mockjs';
import '@/mock/user/index';

// 设置全局延时
Mock.setup({
  timeout: '200-400',
});
