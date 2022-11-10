/*
273. 整数转换英文表示
https://leetcode.cn/problems/integer-to-english-words/
难度：困难

将非负整数 num 转换为其对应的英文表示。

示例 1：
输入：num = 123
输出："One Hundred Twenty Three"

示例 2：
输入：num = 12345
输出："Twelve Thousand Three Hundred Forty Five"

示例 3：
输入：num = 1234567
输出："One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

提示：0 <= num <= 2^31 - 1
*/

/** 特殊数字字典（0 ~ 19） */
const DIGIT_MAP_0_19: Record<string | number, string> = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen'
}
/** 十位字典（20 ~ 90） */
const DIGIT_DECIMAL_MAP: Record<string | number, string> = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety'
}

/**
 * 解析十位与个位的英文（0 ~ 99）
 * @param {string} numStr - 数字字符串
 * @returns {string} 0 ~ 99 所对应的英文
 */
function parseDecimal (numStr: string): string {
  // 保留个位和十位
  numStr = numStr.substring(numStr.length - 2)
  // 小于或等于 19 直接使用特殊数字字典解析
  const num = Number.parseInt(numStr)
  if (num <= 19) return DIGIT_MAP_0_19[num] ?? ''
  // 大于 19 分别解析个位和十位
  let result: string = ''
  // 解析十位
  result = DIGIT_DECIMAL_MAP[numStr[numStr.length - 2]]
  // 解析个位（个位不为 0）
  if (numStr[numStr.length - 1] !== '0') {
    result = `${result} ${DIGIT_MAP_0_19[numStr[numStr.length - 1]]}`
  }
  return result ?? ''
}

/**
 * 解析百位及以下的英文（0 ~ 999）
 * @param numStr - 数字字符串
 * @returns {string} 0 ~ 999 所对应的英文
 */
function parseHundred (numStr: string): string {
  if (numStr.length < 3) return parseDecimal(numStr)
  // 保留最后的数字到百位
  numStr = numStr.substring(numStr.length - 3)
  // 解析百位的英文
  let result: string = ''
  if (numStr[0] !== '0') result = `${DIGIT_MAP_0_19[numStr[0]]} Hundred`
  // 个位和十位不为 0 时解析个位与十位的英文
  const decimalStr = numStr.substring(1)
  if (decimalStr !== '00') result = (result !== '' ? `${result} ` : '') + parseDecimal(decimalStr)
  return result
}

/**
 * 数字转英文
 * + LeetCode 入口
 * @param {number} num - 0 ~ 2^31 - 1 之间的整数
 * @returns {string} 数字所对应的英文
 */
function numberToWords (num: number): string {
  const numStr: string = num.toString(10)
  let result: string = ''
  // 解析 Hundred 及以下
  result = parseHundred(numStr)
  if (numStr.length <= 3) return result

  // 解析 Thousand
  const thousandStr = numStr.substring(numStr.length - 6, numStr.length - 3)
  if (thousandStr !== '000') result = `${parseHundred(thousandStr)} Thousand` + (result !== '' ? ` ${result}` : '')
  if (numStr.length <= 6) return result

  // 解析 Million
  const millionStr = numStr.substring(numStr.length - 9, numStr.length - 6)
  if (millionStr !== '000') result = `${parseHundred(millionStr)} Million` + (result !== '' ? ` ${result}` : '')
  if (numStr.length <= 9) return result

  // 解析 Billion
  const billionStr = numStr.substring(numStr.length - 11, numStr.length - 9)
  if (billionStr !== '000') result = `${parseHundred(billionStr)} Billion` + (result !== '' ? ` ${result}` : '')
  return result
}

export { numberToWords }
