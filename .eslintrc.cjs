module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'styled-system', 'babel.config.js', 'scripts/reset-project.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@stylistic', 'react-native'],
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': [2, { allowAllCaps: false, allowNamespace: true, allowLeadingUnderscore: true }],
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-element-newline': ['error', { 'multiline': true, 'minItems': 5 }],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/type-annotation-spacing': ['error'],
    '@stylistic/type-generic-spacing': ['error'],
    '@stylistic/object-curly-newline': ['error', { 'multiline': true }], 
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-require-imports': [0]
  },
}
