module.exports = {
  extends: 'airbnb',
  parserOptions: {
    generators: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'max-len': [2, 100, 2],
    'eqeqeq': [2, 'allow-null'],
    'react/prefer-stateless-function': 0,
    'no-param-reassign': [2, { "props": false }]
  },
  globals: {
    _: true
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  }
};
