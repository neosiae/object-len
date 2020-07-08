const test = require('tape')
const objectLength = require('./index')

test('Gets the number of properties', (t) => {
  const o = {
    a: 1,
    b: 2,
    c: 3,
  }

  t.equal(objectLength(o), 3)

  t.end()
})

test('Throws an error when the argument is not an object', (t) => {
  const o = 'not an object'

  t.throws(() => {
    const length = objectLength(o)
  })

  t.end()
})
