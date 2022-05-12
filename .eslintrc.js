module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-template-curly-in-string': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'dot-notation': 'off',
    'no-console': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'react/jsx-curly-newline': 'off',
    camelcase: 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': 'off',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
