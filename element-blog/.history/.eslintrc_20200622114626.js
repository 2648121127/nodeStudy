module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "generator-star-spacing": 'off',
    "no-tabs":'off',
    "no-unused-vars":'off',
    "no-console":'off',
    "no-irregular-whitespace":'off',
    "no-debugger": 'off',
    // 缩进
    "indent": 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
