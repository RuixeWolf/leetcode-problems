import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/977_squaresOfASortedArray.js'
import { sortedSquares } from '../src/977_squaresOfASortedArray.js'

describe('977. Squares of a Sorted Array', () => {
  testCases.forEach(({ input, expected }, index) => {
    test(`Test case index: ${index}, Input: ${input.toString()}`, () => {
      expect(sortedSquares(input)).toEqual(expected)
    })
  })
})
