# ZetUI

A bunch of react components create by team ZetUED.

### How to use ?

```js
$ npm install 9web/ZetUI
```

```js
import {Button} from 'zet-ui';
```

### What's include ?

* Button

### Notice

We develop these components with ES6+, you should add it to webpack babel-loader.
So include is prefer not exclude

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


### MISC

* [Develop react with ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus)
