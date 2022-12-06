# LeetCode 算法题集

Ruixe 的 LeetCode 算法题集，使用 TypeScript 语言，集成 Jest 单元测试

## 新建题目

创建新的题目源码、单元测试与测试用例文件

```shell
# NPM
npm run create-files

# Yarn
yarn create-files
```

## 运行单元测试

### 安装依赖

```shell
# NPM
npm install

# Yarn
yarn
```

### 测试所有题解

```shell
# NPM
npm run test

# Yarn
yarn test
```

### 测试指定题解

```shell
# NPM
npx jest [题目编号或名称]

# Yarn
yarn jest [题目编号或名称]
```

注：题解源码与单元测试文件的命名需要包含题目编号，如 `[题目编号]_[英文小驼峰题目名称].test.ts`

### 运行单个题解

```shell
ts-node --esm ./src/[题目文件名]
```

## 目录结构

```
├── creator - 题目文件创建器
├── src - 题目与题解源码
└── tests - 单元测试文件
    └── testCases - 测试用例
```
