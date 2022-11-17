import testCases from '../tests/testCases/722_removeComments'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
`
722. 删除注释
https://leetcode.cn/problems/remove-comments/
难度：中等

给一个 C++ 程序，删除程序中的注释。这个程序source是一个数组，其中source[i]表示第 i 行源码。 这表示每行源码由 '\n' 分隔。
在 C++ 中有两种注释风格，行内注释和块注释。
字符串// 表示行注释，表示//和其右侧的其余字符应该被忽略。
字符串/* 表示一个块注释，它表示直到下一个（非重叠）出现的*/之间的所有字符都应该被忽略。（阅读顺序为从左到右）非重叠是指，字符串/*/并没有结束块注释，因为注释的结尾与开头相重叠。
第一个有效注释优先于其他注释。

如果字符串//出现在块注释中会被忽略。
同样，如果字符串/*出现在行或块注释中也会被忽略。
如果一行在删除注释之后变为空字符串，那么不要输出该行。即，答案列表中的每个字符串都是非空的。

样例中没有控制字符，单引号或双引号字符。
比如，source = "string s = "/* Not a comment. */";" 不会出现在测试样例里。
此外，没有其他内容（如定义或宏）会干扰注释。

我们保证每一个块注释最终都会被闭合， 所以在行或块注释之外的/*总是开始新的注释。
最后，隐式换行符可以通过块注释删除。 有关详细信息，请参阅下面的示例。
从源代码中删除注释后，需要以相同的格式返回源代码。

示例 1:
输入: source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
输出: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
解释: 示例代码可以编排成这样:
/*Test program */
int main()
{
  // variable declaration
int a, b, c;
/* This is a test
   multiline
   comment for
   testing */
a = b + c;
}
第 1 行和第 6-9 行的字符串 /* 表示块注释。第 4 行的字符串 // 表示行注释。
编排后:
int main()
{

int a, b, c;
a = b + c;
}

示例 2:
输入: source = ["a/*comment", "line", "more_comment*/b"]
输出: ["ab"]
解释: 原始的 source 字符串是 "a/*comment\nline\nmore_comment*/b", 其中我们用粗体显示了换行符。删除注释后，隐含的换行符被删除，留下字符串 "ab" 用换行符分隔成数组时就是 ["ab"].

提示:
1 <= source.length <= 100
0 <= source[i].length <= 80
source[i] 由可打印的 ASCII 字符组成。
每个块注释都会被闭合。
给定的源码中不会有单引号、双引号或其他控制字符。
`

/**
 * 去除 C++ 程序的注释
 * - LeetCode 入口
 * @param {string[]} source - 源码行数组
 * @returns {string[]} 去除注释后的代码行数组
 */
function removeComments (source: string[]): string[] {
  // 使用换行符合并所有代码行
  const sourceString = source.join('\n')

  // 初始化状态
  let charIndex = 0
  let resultString = ''

  // 遍历代码字符
  while (charIndex < sourceString.length) {
    // 获取当前字符与下一个字符
    const currentChar = sourceString[charIndex]
    const nextChar = sourceString[charIndex + 1]

    // 1. 处理字符串
    if (currentChar === '"') {
      // 寻找下一个“"”
      const nextIndex = sourceString.indexOf('"', charIndex)
      // 找不到下一个“"”则说明直到代码结束都时该字符串也没有结束，将剩下的字符添加至 resultString，直接结束遍历
      if (nextIndex === -1) {
        resultString += sourceString.substring(charIndex, sourceString.length)
        break
      }
      // 将当前字符串代码添加至 resultString
      resultString += sourceString.substring(charIndex, nextIndex + 1)
      // 将字符索引设置为下一个“"”字符之后
      charIndex = nextIndex + 1
      continue
    }

    // 2. 跳过单行注释（不为字符串时，判断当前字符与下一个字符的组合是否为“//”）
    if (currentChar + nextChar === '//') {
      // 寻找下一个换行符的位置
      const nextIndex = sourceString.indexOf('\n', charIndex)
      // 找不到下一个换行符则说明直到代码结束都不在有换行符，直接结束遍历
      if (nextIndex === -1) break
      // 将字符索引设置为下一个换行符
      charIndex = nextIndex
      continue
    }

    // 3. 跳过多行注释（不为字符串时，判断当前字符与下一个字符的组合是否为 “/*”）
    if (currentChar + nextChar === '/*') {
      // 将字符索引设置为下一个 “*/” 之后，开始查找的索引为当前 “/*” 之后
      const nextIndex = sourceString.indexOf('*/', charIndex + 2)
      if (nextIndex === -1) break
      charIndex = nextIndex + 2
      continue
    }

    // 将当前字符添加至去除注释的代码字符串
    resultString += currentChar
    charIndex += 1
  }

  // 使用换行符拆分去除注释后的代码字符串并去除空行
  return resultString.split('\n').filter(line => line !== '')
}

// Debug
if (require.main === module) {
  const testCase = testCases[0]
  console.log({ input: testCase.input, output: removeComments(testCase.input), expected: testCase.expected })
}

export { removeComments }
