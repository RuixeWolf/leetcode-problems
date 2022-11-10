export default [
  { input: 'A man, a plan, a canal: Panama', expected: true },
  { input: 'race a car', expected: false },
  { input: ' ', expected: true },
  { input: '.', expected: true },
  { input: '.,', expected: true },
  { input: '0P', expected: false }
]
