module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'react-app'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    "semi": 0,
    "max-len": 0,
    // "quotes": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  overrides: [
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.spec.js",
        "**/*.spec.jsx"
      ],
      env: {
        "jest": true
      },
      rules: {
          "max-len": 0,
      }
    }
  ]
};
