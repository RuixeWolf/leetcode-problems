export default [
  {
    input: {
      operations: ['MyHashMap', 'put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get'],
      params: [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
    },
    expected: [null, null, null, 1, -1, null, 1, null, -1]
  },
  {
    input: {
      operations: ['MyHashMap', 'remove', 'put', 'remove', 'remove', 'get', 'remove', 'put', 'get', 'remove', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'remove', 'put', 'put', 'get', 'put', 'get', 'put', 'put', 'get', 'put', 'remove', 'remove', 'put', 'put', 'get', 'remove', 'put', 'put', 'put', 'get', 'put', 'put', 'remove', 'put', 'remove', 'remove', 'remove', 'put', 'remove', 'get', 'put', 'put', 'put', 'put', 'remove', 'put', 'get', 'put', 'put', 'get', 'put', 'remove', 'get', 'get', 'remove', 'put', 'put', 'put', 'put', 'put', 'put', 'get', 'get', 'remove', 'put', 'put', 'put', 'put', 'get', 'remove', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'put', 'remove', 'remove', 'get', 'remove', 'put', 'put', 'remove', 'get', 'put', 'put'],
      params: [[], [27], [65, 65], [19], [0], [18], [3], [42, 0], [19], [42], [17, 90], [31, 76], [48, 71], [5, 50], [7, 68], [73, 74], [85, 18], [74, 95], [84, 82], [59, 29], [71, 71], [42], [51, 40], [33, 76], [17], [89, 95], [95], [30, 31], [37, 99], [51], [95, 35], [65], [81], [61, 46], [50, 33], [59], [5], [75, 89], [80, 17], [35, 94], [80], [19, 68], [13, 17], [70], [28, 35], [99], [37], [13], [90, 83], [41], [50], [29, 98], [54, 72], [6, 8], [51, 88], [13], [8, 22], [85], [31, 22], [60, 9], [96], [6, 35], [54], [15], [28], [51], [80, 69], [58, 92], [13, 12], [91, 56], [83, 52], [8, 48], [62], [54], [25], [36, 4], [67, 68], [83, 36], [47, 58], [82], [36], [30, 85], [33, 87], [42, 18], [68, 83], [50, 53], [32, 78], [48, 90], [97, 95], [13, 8], [15, 7], [5], [42], [20], [65], [57, 9], [2, 41], [6], [33], [16, 44], [95, 30]]
    },
    expected: [null, null, null, null, null, -1, null, null, -1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 90, null, -1, null, null, 40, null, null, null, null, null, 29, null, null, null, null, 17, null, null, null, null, null, null, null, null, null, 33, null, null, null, null, null, null, 18, null, null, -1, null, null, -1, 35, null, null, null, null, null, null, null, -1, -1, null, null, null, null, null, -1, null, null, null, null, null, null, null, null, null, null, null, null, null, -1, null, null, null, null, 87, null, null]
  }
]
