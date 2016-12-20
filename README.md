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
