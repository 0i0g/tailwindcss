module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-empty-interface': 0,
    // 'react/jsx-key': 2,
    'arrow-body-style': 1,
    // 'import/no-duplicates': 1,
    // 'react/self-closing-comp': 1,
    '@typescript-eslint/no-shadow': 0,
    // 'import/no-useless-path-segments': 1,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/naming-convention': 0,
    'object-curly-spacing': [1, 'always'],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'prefer-destructuring': [
      1,
      {
        object: true,
        array: false,
      },
    ],
  },
};
