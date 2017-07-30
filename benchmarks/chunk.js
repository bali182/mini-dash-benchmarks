const { suite, benchmark } = require('cathedra')
const { createArray, counter } = require('../utils')

const chunkL = require('lodash/chunk')
const chunkM = require('mini-dash/chunk')

const lodash = benchmark((array, chunkSize) => chunkL(array, chunkSize))({ name: 'lodash' })
const minidash = benchmark((array, chunkSize) => chunkM(array, chunkSize))({ name: 'mini-dash' })

const chunkSuite = suite(
  lodash,
  minidash
)

const chunkSmallArray = chunkSuite({
  name: 'chunk small array (10 elements) into 2 element sub-arrays',
  initialize: () => [
    createArray(10, counter()),
    2
  ]
})

const chunkMediumArray = chunkSuite({
  name: 'chunk medium array (200 elements) into 3 element sub-arrays',
  initialize: () => [
    createArray(200, counter()),
    3
  ]
})

const chunkSizeableArray = chunkSuite({
  name: 'chunk sizeable array (5000 elements) into 10 element sub-arrays',
  initialize: () => [
    createArray(5000, counter()),
    10
  ]
})

const chunkLargeArray = chunkSuite({
  name: 'chunk sizeable array (20000 elements) into 10 element sub-arrays',
  initialize: () => [
    createArray(20000, counter()),
    10
  ]
})

module.exports = suite(
  chunkSmallArray,
  chunkMediumArray,
  chunkSizeableArray,
  chunkLargeArray
)({ name: 'chunk' })