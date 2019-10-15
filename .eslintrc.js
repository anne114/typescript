module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules:
    process.env.NODE_ENV === 'production'
      ? {}
      : {
          // allow paren-less arrow functions 要求箭头函数的参数使用圆括号
          'arrow-parens': 0,
          // allow async-await 强制 generator 函数中 * 号周围使用一致的空格
          'generator-star-spacing': 0,
          // allow debugger during development
          'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
          'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
          'no-undef': 0,
          // 'no-unused-vars': 1,
          'no-empty': 1,
          'prettier/prettier':
            process.env.NODE_ENV === 'production'
              ? 0
              : [
                  'error',
                  {
                    singleQuote: true,
                    trailingComma: 'es5',
                    bracketSpacing: true,
                    jsxBracketSameLine: false,
                  },
                ],
        },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
