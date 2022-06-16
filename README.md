# vue2-framework

本项目为密码服务平台前端项目，当前仅用作搭建框架使用，暂不进行业务开发。等待项目启动后，迁移仓库至开发小组所属管理仓库下。

## 技术栈简介

vue-cli + vue2 + ant-design-pro-vue + eslint + pinia + axios + jest

## 管理工具

采用[yarn](https://www.yarnpkg.cn/)作为包管理工具。

## 快速启动

### 安装依赖

```
yarn install
```

### 热更新运行

```
yarn serve
```

### 打包构建

```
yarn build
```

### 运行单元测试

```
yarn test:unit
```

### 运行 eslint 检查及修复

```
yarn lint
```

## 状态管理

本项目使用[pinia](https://pinia.web3doc.top/)代替 Vuex 作为状态管理库，使用更简洁的语法。参考文档时请注意使用适用于 vue2 版本的 api。

## 提交规范

本项目配置了 commitlint，并采用 commit 的常规规范扩展。请参考[config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)。
