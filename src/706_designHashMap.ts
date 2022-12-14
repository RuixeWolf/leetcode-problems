/*
706. 设计哈希映射
https://leetcode.cn/problems/design-hashmap/
难度：简单

不使用任何内建的哈希表库设计一个哈希映射（HashMap），实现 MyHashMap 类。

MyHashMap() 用空映射初始化对象
void put(int key, int value) 向 HashMap 插入一个键值对 (key, value) 。如果 key 已经存在于映射中，则更新其对应的值 value 。
int get(int key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
void remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。

示例：

输入：
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
输出：
[null, null, null, 1, -1, null, 1, null, -1]

解释：
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // myHashMap 现在为 [[1,1]]
myHashMap.put(2, 2); // myHashMap 现在为 [[1,1], [2,2]]
myHashMap.get(1);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]]
myHashMap.get(3);    // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]]
myHashMap.put(2, 1); // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值）
myHashMap.get(2);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]]
myHashMap.remove(2); // 删除键为 2 的数据，myHashMap 现在为 [[1,1]]
myHashMap.get(2);    // 返回 -1（未找到），myHashMap 现在为 [[1,1]]

提示：

0 <= key, value <= 106
最多调用 104 次 put、get 和 remove 方法
*/

import { fileURLToPath } from 'url'
import testCases from '../tests/testCases/706_designHashMap.js'

class MyHashMap {
  mapLikedArray: number[][] = []

  constructor (mapLikedArray?: number[][]) {
    if (mapLikedArray != null) this.mapLikedArray = mapLikedArray
  }

  put (key: number, value: number): void {
    const index = this.mapLikedArray.findIndex(item => item[0] === key)
    if (index === -1) {
      this.mapLikedArray.push([key, value])
      return
    }
    this.mapLikedArray[index][1] = value
  }

  get (key: number): number {
    const value = this.mapLikedArray.find(item => item[0] === key)
    return value === undefined ? -1 : value[1]
  }

  remove (key: number): void {
    const index = this.mapLikedArray.findIndex(item => item[0] === key)
    if (index > -1) this.mapLikedArray.splice(index, 1)
  }
}

export function main (
  operations: string[],
  params: number[][]
): Array<number | null> {
  const operationRecords: Array<number | null> = [null]
  const myHashMap = new MyHashMap()

  operations.forEach((operation, index) => {
    switch (operation) {
      case 'put': {
        myHashMap.put(params[index][0], params[index][1])
        operationRecords.push(null)
        break
      }
      case 'get': {
        operationRecords.push(myHashMap.get(params[index][0]))
        break
      }
      case 'remove': {
        myHashMap.remove(params[index][0])
        operationRecords.push(null)
        break
      }
    }
  })

  return operationRecords
}

// Debug
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { input, expected } = testCases[0]
  const output = main(input.operations, input.params)
  console.log({ input, output, expected })
}
