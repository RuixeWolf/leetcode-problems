import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/704_binarySearch'
import { search } from '../src/704_binarySearch'

describe('704. Binary Search', () => {
  testCases.forEach(({ input, expected }, index) => {
    test(`Test case index: ${index}`, () => {
      expect(search(input.nums, input.target)).toBe(expected)
    })
  })
})
