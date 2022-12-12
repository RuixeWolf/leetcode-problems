/*
977. 有序数组的平方
难度：简单
题目链接：https://leetcode.cn/problems/squares-of-a-sorted-array/

给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]

示例 2：
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]

提示：
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 已按 非递减顺序 排序

进阶：
请你设计时间复杂度为 O(n) 的算法解决本问题
*/

import { fileURLToPath } from 'url'
import testCases from '../tests/testCases/977_squaresOfASortedArray.js'

/**
 * 计算有序数组的平方
 * - LeetCode 入口
 * @param {number[]} nums - 待计算的非递减顺序排序的整数数组
 * @returns {number[]} 非递减顺序排序的整数结果数组
 */
export function sortedSquares (nums: number[]): number[] {
  // 初始化返回值
  const result: number[] = new Array<number>(nums.length)

  // 使用双指针法，从原数组前后向中间遍历
  let leftIndex: number = 0
  let rightIndex: number = nums.length - 1
  let targetIndex: number = nums.length - 1
  while (leftIndex <= rightIndex) {
    // 计算两个指针所处位置的平方
    const leftResult = nums[leftIndex] * nums[leftIndex]
    const rightResult = nums[rightIndex] * nums[rightIndex]

    // 判断左右两边平方结果的大小，将较大的结果依次从右向左放置在结果数组中
    if (leftResult > rightResult) {
      result[targetIndex--] = leftResult
      leftIndex++
    } else {
      result[targetIndex--] = rightResult
      rightIndex--
    }
  }

  return result
}

// Debug
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { input, expected } = testCases[0]
  const output = sortedSquares(input)
  console.log({ input, output, expected })
}
