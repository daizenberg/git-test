// jshint esnext:true
// jshint asi:true

import assert from 'assert'
import { getFullName } from '../src/string-processor'

describe('StringProcessor', () => {

  describe('getFullName', () => {
    it('should return "James H. Harvey" when passed {"James", "Harald", "Harvey"}', () => {
      var person = { first: "James", second: "Harald", last: "Harvey"}
      var full = getFullName(person)
      assert.equal(full, "James H. Harvey")
    })

    it('{fist last} should result in "first last"', () => {
      var person = { first: "First", last: "Last"}
      var full = getFullName(person)
      assert.equal(full, "First Last")
    })

    var tests = [
      { args: {first: "First", second: "Second", last: "Last"}, result: "First S. Last" },
      { args: {first: "First", last: "Last"}, result: "First Last" },
      { args: {first: "First"}, result: "First" },
      { args: {last: "Last"}, result: "Last" }
    ]

    tests.forEach(test => {
      it(JSON.stringify(test), () => {
        var full = getFullName(test.args)
        assert.equal(full, test.result)
      })
    })

    it('should return undefined when passed  undefined', () => {
      var full = getFullName(undefined)
      assert.equal(full, undefined)
    })

  })
})
