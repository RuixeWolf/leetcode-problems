import { describe, expect, test } from '@jest/globals'
import testCases from './testCases/125_validPalindrome.js'
import { isPalindrome } from '../src/125_validPalindrome.js'

describe('125. Valid palindrome', () => {
  testCases.forEach(testCase => {
    test(`Input: "${testCase.input}"`, () => {
      expect(isPalindrome(testCase.input)).toBe(testCase.expected)
    })
  })
})
