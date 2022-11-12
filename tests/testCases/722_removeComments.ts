export default [
  {
    input: ['/*Test program */', 'int main()', '{ ', '  // variable declaration ', 'int a, b, c;', '/* This is a test', '   multiline  ', '   comment for ', '   testing */', 'a = b + c;', '}'],
    expected: ['int main()', '{ ', '  ', 'int a, b, c;', 'a = b + c;', '}']
  },
  {
    input: ['a/*comment', 'line', 'more_comment*/b'],
    expected: ['ab']
  },
  {
    input: ['struct Node{', '    /*/ declare members;/**/', '    int size;', '    /**/int val;', '};'],
    expected: ['struct Node{', '    ', '    int size;', '    int val;', '};']
  },
  {
    input: ['a//*b//*c', 'blank', 'd//*e/*/f'],
    expected: ['a', 'blank', 'd']
  }
]
