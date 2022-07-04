# Router

## 路由数据结构

以下结构是本项目路由数据构成，无论是菜单或基础路由都应有此结构.

```jasvascript
/**
 * @param path 路由路径 [必须]
 * @param name 路由名称, 不能重名 [必须]
 * @param redirect 重定向地址, 访问这个路由时, 自定进行重定向 [可选]
 * @param meta 路由元信息（路由附带扩展信息）
 * @param meta.permission 进入该路由所需的权限列表 [可选]，如果未给该字段则表示所有用户均可进入
 * @param meta.disabled 禁用整个菜单 [可选]
 * @param meta.title 菜单名称 [可选]
 * @param meta.icon 菜单图标 [可选]
 * @param meta.keepAlive 缓存该路由 [可选]
 * @param meta.sort 排序越小越排前 [可选]
 *
 * */
```

## 文件说明

> index.js: 路由实例化及挂载守卫等初始操作，暴露一个启动函数`setupRouter`

> base.js: 提供非菜单路由，如 404、登录等

> routes.js: 提供所有路由

> guard.js: 提供路由守卫，供实例化时操作

> utils.js: 提供路由与 store 的关联操作的工具函数
