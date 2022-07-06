import { renderStatus, renderDateTime } from '@/utils/render-utils';

describe('function: renderStatus', () => {
  it('should return "否" when status is 0', () => {
    expect(renderStatus(0)).toBe('否');
  });
  it('should return "是" when status is 1', () => {
    expect(renderStatus(1)).toBe('是');
  });
  it('should return "未知" when status is undefined', () => {
    expect(renderStatus()).toBe('未知');
  });
  it('should return "未知" when status is null', () => {
    expect(renderStatus(null)).toBe('未知');
  });
  it('should return "未知" when status is NaN', () => {
    expect(renderStatus(NaN)).toBe('未知');
  });
  it('should return "未知" when status is not 0 or 1', () => {
    expect(renderStatus(2)).toBe('未知');
  });
});

describe('function: renderDateTime', () => {
  it('should return "2019-01-01 00:00:00" when dateTime is 1546272000000', () => {
    expect(renderDateTime(1546272000000)).toBe('2019-01-01 00:00:00');
  });
  it('should return "2019-01-01 00:00:00" when dateTime is new Date(1546272000000)', () => {
    expect(renderDateTime(new Date(1546272000000))).toBe('2019-01-01 00:00:00');
  });
});
