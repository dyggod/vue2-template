import { HTTP_STATUS } from '@/utils/request';

export function resSuccess(data = {}, code = HTTP_STATUS.SUCCESS, msg = '') {
  return {
    code,
    msg,
    data: { ...data },
  };
}

export function resError(data = {}, code = HTTP_STATUS.SERVICE_FAILURE, msg = '错误') {
  return {
    code,
    msg,
    data,
  };
}
