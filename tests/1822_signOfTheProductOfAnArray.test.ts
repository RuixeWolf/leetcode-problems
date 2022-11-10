import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/1822_signOfTheProductOfAnArray'
import { arraySign } from '../src/1822_signOfTheProductOfAnArray'

describe('1822. Sign of the Product of an Array', () => {
  testCases.forEach((testCase, index) => {
    test(`Test case index: ${index}`, () => {
      expect(arraySign(testCase.input)).toBe(testCase.expected)
    })
  })
})
