const fn = require('./fn')
test('1+1 should 2', () => {
  expect(fn.add(1,1)).toBe(2)
})
