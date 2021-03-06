module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/require-v-for-key': 'warn'
  }
}
