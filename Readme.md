
# balance-svg-paths

  Make two paths equivalent in terms of structure while respecting their original shapes. So they can be easily tweened and animated. Currently its a pretty half-ass implementation. See [test/cases.js](test/cases.js) for an analysis.

## Installation

With your favorite package manager:

- [packin](//github.com/jkroso/packin): `packin add balance-svg-paths`
- [component](//github.com/component/component#installing-packages): `component install jkroso/balance-svg-paths`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install balance-svg-paths`

then in your app:

```js
var balance = require('balance-svg-paths')
```

## API

### balance(a, b)

  Define `a` and `b` using the same number of path segments while preserving their shapes. Where both `a` and `b` are [normalized](//github.com/jkroso/normalize-svg-path) paths. It returns an Array containing the balanced paths in the same order they were input.

```js
var a = [['c',0,0,50,0,50,0], ['c',0,0,0,50,0,50]]
var b = [['c',5,5,45,5,50,0]]
balance(a, b) // => [a, b.concat([['c',0,0,0,0,0,0]])]
```