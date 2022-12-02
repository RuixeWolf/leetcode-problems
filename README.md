# LeetCode 算法题集

Ruixe 的 LeetCode 算法题集，使用 TypeScript 语言，集成 Jest 单元测试

## 运行单元测试

### 安装依赖

```shell
npm install
```

### 测试所有题解

```shell
npm run test
```

### 测试指定题解

```shell
npx jest [题目编号]
```

注：题解源码与单元测试文件的命名需要包含题目编号，如 `[题目编号]_[英文小驼峰题目名称].test.ts`

### 运行单个题解

```shell
ts-node --esm ./src/[题目文件名]
```

## 目录结构

```
├── src - 题目与题解源码
└── tests - 单元测试文件
    └── testCases - 测试用例
```
