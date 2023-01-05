import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/209_minimumSizeSubarraySum.js'
import { minSubArrayLen } from '../src/209_minimumSizeSubarraySum.js'

describe('209. Minimum Size Subarray Sum', () => {
  testCases.forEach(({ input, expected }, index) => {
    test(`Test case index: ${index}`, () => {
      expect(minSubArrayLen(input.target, input.nums)).toEqual(expected)
    })
  })
})
