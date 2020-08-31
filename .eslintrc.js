module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "class-methods-use-this": 0,
    "no-console": 0,
    "max-len": [1, 150],
    "react/forbid-prop-types": 0, 
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
  },
};
