/*
59. 螺旋矩阵II
难度：中等
题目链接：https://leetcode.cn/problems/spiral-matrix-ii/
解析：https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html#_59-%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5ii

给你一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix。

示例 1：
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]

示例 2：
输入：n = 1
输出：[[1]]

提示：
1 <= n <= 20
*/

import { fileURLToPath } from 'url'
import testCases from '../tests/testCases/59_spiralMatrixIi.js'

/**
 * 螺旋矩阵II
 * - LeetCode 入口
 * @param {number} n - 正整数 N
 * @returns {string} 螺旋矩阵
 */
export function generateMatrix (n: number): number[][] {
  // 初始化长宽为 N 的矩阵，所有值使用 0 填充
  const result: number[][] = new Array(n).fill(0).map(
    () => new Array(n).fill(0)
  )

  // 初始化坐标轴
  let x = 0; let y = 0

  // 初始化每一条边所走的步数
  // 每一次走边长减一的步数，然后顺时针转弯走下一条边
  // 上一条边的最后一个点作为下一条边的起点，每一条边按照左闭右开绘制
  // 顺时针按照上、右、下、左走完四条边后开始向内开启下一圈，每圈步数 - 2
  let steps = n - 1

  // 初始化填充值
  let value = 1

  // 填充螺旋矩阵直到步长为 0
  while (steps > 0) {
    // 填充上边
    for (let step = 0; step < steps; step++) result[x][y++] = value++

    // 填充右边
    for (let step = 0; step < steps; step++) result[x++][y] = value++

    // 填充下边
    for (let step = 0; step < steps; step++) result[x][y--] = value++

    // 填充左边
    for (let step = 0; step < steps; step++) result[x--][y] = value++

    // 一圈完成，边长 - 2
    steps -= 2

    // 将坐标设置向内一圈的起点
    y++; x++
  }

  // N 为奇数时需要手动填充矩阵最中心的值
  if ((n & 1) === 1) {
    const middleXY = Math.floor(n / 2)
    result[middleXY][middleXY] = value
  }

  return result
}

// Debug
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { input, expected } = testCases[0]
  const output = generateMatrix(input)
  console.log({ input, output, expected })
}
