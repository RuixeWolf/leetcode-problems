export default [
  {
    input: {
      nums: [-1, 0, 3, 5, 9, 12],
      target: -1
    },
    expected: 0
  },
  {
    input: {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 0
    },
    expected: 1
  },
  {
    input: {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 3
    },
    expected: 2
  },
  {
    input: {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 5
    },
    expected: 3
  },
  {
    input: {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 9
    },
    expected: 4
  },
  {
    input: {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 12
    },
    expected: 5
  },
  {
    input: {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 2
    },
    expected: -1
  }
]
