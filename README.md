# vue2-template

本项目为密码服务平台前端项目，当前仅用作搭建框架使用，暂不进行业务开发。等待项目启动后，迁移仓库至开发小组所属管理仓库下。

## 技术栈简介

vue-cli + vue2 + ant-design-vue@1 + pinia + axios + jest。

同时项目使用 [commitizen](https://www.npmjs.com/package/commitizen)、[standard-version](https://www.npmjs.com/package/standard-version)、[commitlint](https://commitlint.js.org/#/) 做提交和版本管理。

使用 eslint + airbnb 做代码风格约束。

使用 [mockjs](http://mockjs.com/) 做 mock 数据。

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

同时配置了提交工具[commitizen](https://www.npmjs.com/package/commitizen)。

提交时统一使用命令：

```
yarn commit

// 运行后出现以下问题
?Select the type of change that you're committing                  // 选择你的提交类型，请参考commit规范说明
?What is the scope of this change (e.g. component or file name)    // 输入你的修改范围，文件名
?Write a short, imperative tense description of the change         // 输入简述
?Provide a longer description of the change                        // 输入详细描述
?Are there any breaking changes                                    // 是否是重大破坏性修改，通常输入No
?Does this change affect any open issues                           // 是否有影响的issues
```

## 版本发布

**_注意：只有项目管理者有权限发布版本_**

自动升级版本并更改 changelog:

```
yarn release
```

指定版本:

```
yarn release -- --release-as  xx.xx.xx
```
