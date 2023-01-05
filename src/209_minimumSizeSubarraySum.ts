/*
209. 长度最小的子数组
难度：中等
题目链接：https://leetcode.cn/problems/minimum-size-subarray-sum/

给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

示例 2：
输入：target = 4, nums = [1,4,4]
输出：1

示例 3：
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0

提示：
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105

进阶：
如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
*/

import { fileURLToPath } from 'url'
import testCases from '../tests/testCases/209_minimumSizeSubarraySum.js'

/**
 * 长度最小的子数组
 * - LeetCode 入口
 * @param {number} target - 要大于或等于的正整数
 * @param {number[]} nums - 整数数组
 * @returns {number} 相加大于等于目标整数的最小子数组的长度
 */
export function minSubArrayLen (target: number, nums: number[]): number {
  // 使用无限初始化返回值，在之后的操作中要判断子数组长度是否比返回值要小
  let result: number = Infinity
  // 初始化子数组每个元素相加的值
  let sum: number = 0

  // 使用滑动窗口算法，初始化滑动窗口的起止下标为 0
  // 每一次循环将窗口的右指针（结束指针）加一（向右移动一位），直到移动到整个数组的末位
  for (let leftIndex = 0, rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    // 每一次循环中将右指针所在的值累计相加
    sum += nums[rightIndex]

    // 遇到子数组相加的值达到目标值
    // 计算子数组长度，用更小的长度替换 result
    // sum 减去当前子数组左指针（起始指针）所在的值
    // 将左指针加一（向右移动一位），缩小窗口范围，继续判断更小的窗口中的值相加是否能满足目标
    while (sum >= target) {
      const subArrayLength = rightIndex - leftIndex + 1
      if (subArrayLength < result) result = subArrayLength
      sum -= nums[leftIndex]
      leftIndex++
    }
  }

  // 如果经历操作后返回值依然为初始的无限，则说明整个 nums 的值相加也无法满足目标，按要求返回 0
  // 否则返回操作中找到的最小子数组长度
  return result === Infinity ? 0 : result
}

// Debug
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { input, expected } = testCases[0]
  const output = minSubArrayLen(input.target, input.nums)
  console.log({ input, output, expected })
}
