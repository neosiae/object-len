# object-len

![npm](https://img.shields.io/npm/v/object-len?style=flat-square) ![Travis (.com)](https://img.shields.io/travis/com/neosiae/object-len?style=flat-square) ![npm](https://img.shields.io/npm/dw/object-len) ![npm bundle size](https://img.shields.io/bundlephobia/min/object-len?style=flat-square)

Get the number of properties in an object

## Install

> npm i object-len

## Usage

```javascript
const objectLength = require('object-len')

const o = {
  a: 1,
  b: 2,
  c: 3,
}

const oLength = objectLength(o)

console.log(oLength) // 3
```

## License

MIT
