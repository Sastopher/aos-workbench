module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "airbnb",
  parserOptions: {
    generators: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'max-len': [2, 100, 2],
    'eqeqeq': [2, 'allow-null']
  },
  globals: {
    _: true
  },
  env: {
    commonjs: true
  }
};