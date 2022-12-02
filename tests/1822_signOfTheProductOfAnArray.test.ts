import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/1822_signOfTheProductOfAnArray.js'
import { arraySign } from '../src/1822_signOfTheProductOfAnArray.js'

describe('1822. Sign of the Product of an Array', () => {
  testCases.forEach((testCase, index) => {
    test(`Test case index: ${index}`, () => {
      expect(arraySign(testCase.input)).toBe(testCase.expected)
    })
  })
})
