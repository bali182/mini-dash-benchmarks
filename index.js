const { suite, milliseconds } = require('cathedra')
const chunk = require('./benchmarks/chunk')

module.exports = suite(
  chunk
)({
  name: 'lodash vs underscore vs mini-dash',
  until: milliseconds(3000)
})