import { describe, test, expect } from '@jest/globals'
import testCases from './testCases/706_designHashMap'
import { main } from '../src/706_designHashMap'

describe('706. Design Hash Map', () => {
  testCases.forEach((testCase, index) => {
    test(`Test case index: ${index}`, () => {
      expect(main(testCase.input.operations, testCase.input.params)).toEqual(testCase.expected)
    })
  })
})
