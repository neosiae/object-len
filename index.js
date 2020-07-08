const isObject = require('is-object')

module.exports = function (o) {
  if (!isObject(o)) {
    throw new TypeError(`Expected object but got ${typeof o}`)
  }

  return Object.keys(o).length
}
