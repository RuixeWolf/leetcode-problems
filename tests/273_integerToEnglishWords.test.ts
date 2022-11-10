import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/273_integerToEnglishWords'
import { numberToWords } from '../src/273_integerToEnglishWords'

describe('273. Integer to english words', () => {
  testCases.forEach((testCase, index) => {
    test(`Test case index: ${index}, Input: ${testCase.input}`, () => {
      expect(numberToWords(testCase.input)).toBe(testCase.expected)
    })
  })
})
