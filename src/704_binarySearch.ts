import testCases from '../tests/testCases/704_binarySearch'

/*
704. 二分查找
https://leetcode.cn/problems/binary-search/
难度：简单

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

示例 1:
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

示例 2:
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1

提示：
你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
*/

/**
 * 二分查找元素下标
 * - LeetCode 入口
 * @param nums - 待查找的整型数组，要求为升序且没有重复元素
 * @param target - 待查找的数字
 * @returns {number} 元素下标
 */
function search (nums: number[], target: number): number {
  // 使用左右指针，每次查找 [left, right) 最中间的值
  let left = 0
  let right = nums.length

  while (left < right) {
    // 使用位运算获取左右中间的下标，位运算 >> 1 等同于 Math.floor()
    const middle = left + ((right - left) >> 1)
    // 要查找的目标为当前正中间的元素，返回正中间的下标
    if (target === nums[middle]) return middle
    // 要查找的目标大于当前正中间的元素，将查找区间更新为右区间
    if (target > nums[middle]) left = middle + 1
    // 要查找的目标小于当前正中间的元素，将查找区间更新为左区间
    if (target < nums[middle]) right = middle
  }

  // 没有查找到对应的元素
  return -1
}

// Debug
if (require.main === module) {
  const { input, expected } = testCases[6]
  const output = search(input.nums, input.target)
  console.log({ input, output, expected })
}

export { search }
