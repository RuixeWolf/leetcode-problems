/*
27. 移除元素
难度：简单
题目链接：https://leetcode.cn/problems/remove-element/

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

说明:
为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

示例 1：
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

示例 2：
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。

提示：
0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/

import { fileURLToPath } from 'url'
import testCases from '../tests/testCases/27_removeElement.js'

/**
 * 移除指定元素并返回移除元素后的数组长度
 * - LeetCode 入口
 * @param {number[]} nums - 原数组
 * @param {number} val - 指定移除的值
 * @returns {number} 移除元素后的数组长度
 */
export function removeElement (nums: number[], val: number): number {
  // 定义快慢指针，快指针每次遍历时都向后移一位
  let fastIndex = 0
  // 慢指针在快指针的值为要删除的值时，慢指针位置不变
  let slowIndex = 0

  // 遍历数组，将要删除的值用它之后的元素覆盖
  while (fastIndex < nums.length) {
    // 每一次遍历时判断快指针所对应的值是否不为要删除的值
    if (nums[fastIndex] !== val) {
    // 将慢指针所在位置设置为快指针所对应的值，且慢指针向后移一位
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
    // 每次遍历将快指针向后移一位
    fastIndex++
  }

  // 完成遍历移动数组元素后，慢指针就是删除元素后数组的长度
  return slowIndex
}

// Debug
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { input, expected } = testCases[0]
  const newLength = removeElement(input.nums, input.val)
  const output = input.nums.splice(0, newLength)
  console.log({ input, output, expected })
}
