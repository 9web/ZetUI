# ZetUI

A bunch of react components create by team ZetUED.

### How to use ?

We haven't publish it to npm, you can install it from github directly.
```js
$ npm install 9web/ZetUI
```

```js
import {Button} from 'zet-ui';
```

### What's include ?

* Button

### Notice


* Progress

### API

| 属性      | 说明           | 类型     | 默认值         |
|----------|---------------|----------|---------------|
| type     | 类型，可选 `line` `circle` | string   | line      |
| percent  | 百分比 | number | 0 |
| format   | 内容的模板函数 | function(percent)   | `percent => percent + '%'` |
| status   | 状态，可选：`success` `exception` `normal` | string   | - |
| showInfo | 是否显示进度数值 | boolean | true  |
| strokeWidth `(type=line)` | 进度条线的宽度，单位 px | number | 10 |
| strokeWidth `(type=circle)` | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |
| width `(type=circle)` | 圆形进度条画布宽度，单位 px | number | 132 |


These components developed with ES6+, when use they should transformed by webpack babel-loader.
When config webpack js loader you should use `include` not `exclude`

```js
{
    test: /\.js$/,
    loaders: ['babel'],
    include: [
        path.join(__dirname, 'src'),    // your source code
        path.join(__dirname, 'node_modules/zet-ui/')
    ]
}
```

### How to Test ?

### Ref

* [blueprint](https://github.com/palantir/blueprint)
* [ant-design](https://github.com/ant-design/ant-design)


### MISC

* [Develop react with ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus)
