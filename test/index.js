'use strict'

require('mocha')
const assert = require('assert')
const isNumber = require('../')
const fixtures = require('./fixtures')

describe('is a number', () => {
  fixtures.isNumber.forEach((num, idx) => {
    it(JSON.stringify(num) + ' should be a number', () => {
      assert.equal(isNumber(num), true)
    })
  })
})

describe('is not a number', () => {
  fixtures.isNotNumber.forEach((num, idx) => {
    it(JSON.stringify(num) + ' should not be a number', () => {
      assert.equal(isNumber(num), false)
    })
  })
})
