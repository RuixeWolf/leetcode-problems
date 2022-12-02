import inquirer from 'inquirer'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'
import * as fs from 'fs/promises'

// 获取当前所在路径
const dirname = path.dirname(fileURLToPath(import.meta.url))

/** EJS 模板参数 */
const templateParams = {
  /** 题目编号 */
  titleNumber: 0,
  /** 题目中文标题 */
  titleChinese: '',
  /** 题目英文标题 */
  titleEnglish: '',
  /** LeetCode 入口函数名 */
  leetCodeFunctionName: '',
  /** LeetCode 题目链接 */
  problemLink: '',
  /** 题目难度（简单 中等 困难） */
  difficulty: '',
  /** JS 模块名称，格式：[题目编号]_[英文小驼峰题目名称] */
  moduleName: ''
}

/**
 * 将英文句子转换为小驼峰字符串
 * @param {string} sentence - 英文句子
 */
function getLowerCamelCaseBySentence (sentence: string): string {
  let result: string = ''
  const words = sentence.split(' ').map(word => word.toLowerCase())
  result += words.shift() ?? ''
  words.forEach(word => { result += word.charAt(0).toUpperCase() + word.slice(1) })
  return result
}

/**
 * 通过用户输入设置模板参数
 */
async function setTemplateParams (): Promise<void> {
  // 通过控制台用户输入或选择参数
  const answers = await inquirer.prompt(
    [
      { name: 'titleNumber', type: 'number', message: 'Title number:' },
      { name: 'titleChinese', type: 'string', message: 'Chinese title:' },
      { name: 'titleEnglish', type: 'string', message: 'English title:' },
      { name: 'leetCodeFunctionName', type: 'string', message: 'LeetCode function name:', default: 'main' },
      { name: 'problemLink', type: 'string', message: 'LeetCode link:' },
      { name: 'difficulty', type: 'list', message: 'Difficulty:', choices: ['Easy', 'Medium', 'Hard'], default: 'Medium' }
    ]
  )

  // 设置难度
  answers.difficulty = {
    Easy: '简单',
    Medium: '中等',
    Hard: '困难'
  }[answers.difficulty as string]

  // 设置模块名称
  templateParams.moduleName = `${answers.titleNumber as string}_${getLowerCamelCaseBySentence(answers.titleEnglish)}`

  // 合并模板参数
  Object.assign(templateParams, answers)
}

/**
 * 创建文件
 * @description 创建源码、单元测试、测试用例文件
 */
function createFiles (): void {
  // 创建源码文件
  const srcFilePath = path.join(dirname, `../src/${templateParams.moduleName}.ts`)
  ejs.renderFile(path.join(dirname, './templates/src.ts.ejs'), templateParams).then(result => {
    void fs.writeFile(srcFilePath, result)
  })

  // 创建单元测试文件
  const unitTestFilePath = path.join(dirname, `../tests/${templateParams.moduleName}.test.ts`)
  ejs.renderFile(path.join(dirname, './templates/unitTest.ts.ejs'), templateParams).then(result => {
    void fs.writeFile(unitTestFilePath, result)
  })

  // 创建测试用例文件
  const testCaseFilePath = path.join(dirname, `../tests/testCases/${templateParams.moduleName}.ts`)
  ejs.renderFile(path.join(dirname, './templates/testCase.ts.ejs'), templateParams).then(result => {
    void fs.writeFile(testCaseFilePath, result)
  })
}

// 程序入口
void (async function (): Promise<void> {
  // 设置模板参数
  await setTemplateParams()

  // 创建文件
  createFiles()
})()
