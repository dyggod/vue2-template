import { hasRoutePermission, generatePermissionRoutes } from '@/utils/permission';

describe('function: hasRoutePermission', () => {
  it('should return true when permissions contains "*"', () => {
    const permissions = ['*'];
    const route = {
      path: '/user',
      meta: {
        permission: ['user:view'],
      },
    };
    expect(hasRoutePermission(permissions, route)).toBe(true);
  });
  it('should return true when route.meta.permission is undefined', () => {
    const permissions = ['user:view'];
    const route = {
      path: '/user',
      meta: {
        title: '用户管理',
        icon: 'user',
        sort: 1,
      },
    };
    expect(hasRoutePermission(permissions, route)).toBe(true);
  });
  it('should return false when route.meta.permission is empty', () => {
    const permissions = ['user:view'];
    const route = {
      path: '/user',
      meta: {
        title: '用户管理',
        icon: 'user',
        sort: 1,
        permission: [],
      },
    };
    expect(hasRoutePermission(permissions, route)).toBe(false);
  });
  it('should return true when route.meta.permission contains "user:view"', () => {
    const permissions = ['user:view', 'user:add'];
    const route = {
      path: '/user',
      meta: {
        title: '用户管理',
        icon: 'user',
        sort: 1,
        permission: ['user:view'],
      },
    };
    expect(hasRoutePermission(permissions, route)).toBe(true);
  });
});

describe('function: generatePermissionRoutes', () => {
  it('should return empty array when permissions is empty', () => {
    const routes = [
      {
        path: '/user',
        meta: {
          title: '用户管理',
          icon: 'user',
          sort: 1,
          permission: ['user:view'],
        },
      },
    ];
    const permissions = [];
    expect(generatePermissionRoutes(routes, permissions)).toEqual([]);
  });
  it('should return empty array when routes is empty', () => {
    const routes = [];
    const permissions = ['user:view'];
    expect(generatePermissionRoutes(routes, permissions)).toEqual([]);
  });
  it('should return right array when permission matched routes', () => {
    const routes = [
      {
        path: '/user',
        meta: {
          title: '用户管理',
          icon: 'user',
          sort: 1,
          permission: ['user:view'],
        },
      },
      {
        path: '/role',
        meta: {
          title: '角色管理',
          icon: 'user',
          sort: 2,
          permission: ['role:view'],
        },
      },
    ];
    const permissions = ['user:view', 'role:view'];
    expect(generatePermissionRoutes(routes, permissions)).toEqual(routes);
  });
  it('should return right array when permission matched routes', () => {
    const routes = [
      {
        path: '/user',
        meta: {
          title: '用户管理',
          icon: 'user',
          sort: 1,
          permission: ['user:view'],
        },
        children: [
          {
            path: '/user/add',
            meta: {
              title: '添加用户',
              icon: 'user',
              sort: 1,
              permission: ['adduser:view'],
            },
          },
          {
            path: '/user/edit',
            meta: {
              title: '编辑用户',
              icon: 'user',
              sort: 2,
              permission: ['edituser:view'],
            },
          },
        ],
      },
    ];
    const permissions = ['user:view', 'adduser:view'];
    expect(generatePermissionRoutes(routes, permissions)).toEqual([
      {
        path: '/user',
        meta: {
          title: '用户管理',
          icon: 'user',
          sort: 1,
          permission: ['user:view'],
        },
        children: [
          {
            path: '/user/add',
            meta: {
              title: '添加用户',
              icon: 'user',
              sort: 1,
              permission: ['adduser:view'],
            },
          },
        ],
      },
    ]);
  });
});
