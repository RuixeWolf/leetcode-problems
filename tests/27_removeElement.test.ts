import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/27_removeElement.js'
import { removeElement } from '../src/27_removeElement.js'

describe('27. Remove Element', () => {
  testCases.forEach(({ input, expected }, index) => {
    test(`Test case index: ${index}`, () => {
      const newLength = removeElement(input.nums, input.val)
      expect(input.nums.splice(0, newLength)).toEqual(expected)
    })
  })
})
