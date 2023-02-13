import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/59_spiralMatrixIi.js'
import { generateMatrix } from '../src/59_spiralMatrixIi.js'

describe('59. Spiral Matrix II', () => {
  testCases.forEach(({ input, expected }, index) => {
    test(`Test case index: ${index}, Input: ${input}`, () => {
      expect(generateMatrix(input)).toEqual(expected)
    })
  })
})
