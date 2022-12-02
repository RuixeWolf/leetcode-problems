import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/722_removeComments.js'
import { removeComments } from '../src/722_removeComments.js'

describe('722. Remove Comments', () => {
  testCases.forEach((testCase, index) => {
    test(`Test case index: ${index}`, () => {
      expect(removeComments(testCase.input)).toEqual(testCase.expected)
    })
  })
})
