## Spin(全局加载提示)

### type
```
options {
  msg: string,      // 加载时的提示信息，[可选]
  duration: number  // 延时多久自动关闭，单位ms，[可选]
}
```
### event

| 事件名 | 参数 | 描述         |
| ------ | ---- | ------------ |
| show | options \|\| 无   | 显示加载框  |
| end | 无    | 结束加载框  |

### example

开启
```
this.$spin();


this.$spin.show({
  msg: 'loading...',
  duration: 2000
});
```

// 关闭
```
this.$spin.end();
```
