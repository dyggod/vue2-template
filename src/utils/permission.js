/**
 * 判断账户是否拥有某一个权限
 * 对于路由没有meta或meta.permission的情况，直接返回true
 * 对perssions包含'*'的情况，直接返回true
 * @param permissions
 * @param route
 * @returns {boolean}
 */
export function hasRoutePermission(permissions, route) {
  const pass = '*';
  if (permissions.includes(pass)) {
    return true;
  }
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0, len = permissions.length; i < len; i += 1) {
      flag = route.meta.permission.includes(permissions[i]);
      if (flag) {
        return true;
      }
    }
    return false;
  }
  return true;
}

/**
 * 根据用户权限在所有的动态路由中过滤出可访问路由
 * @param {*} routes
 * @param {*} permissions
 * @returns
 */
export function generatePermissionRoutes(routes, permissions) {
  const permissionRoutes = [];
  for (let i = 0, len = routes.length; i < len; i += 1) {
    const route = routes[i];
    if (hasRoutePermission(permissions, route)) {
      permissionRoutes.push(route);
      if (route.children?.length > 0) {
        route.children = generatePermissionRoutes(route.children, permissions);
      }
    }
  }
  return permissionRoutes;
}
