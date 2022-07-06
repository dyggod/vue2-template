import dayjs from 'dayjs';

/**
 * 将0 or 1 转换为中文
 */
export function renderStatus(status) {
  switch (status) {
    case 0:
      return '否';
    case 1:
      return '是';
    default:
      return '未知';
  }
}

/**
 * 将时间戳转换为日期格式
 */
export function renderDateTime(dateTime) {
  const date = dayjs(dateTime);
  return date.format('YYYY-MM-DD HH:mm:ss');
}
