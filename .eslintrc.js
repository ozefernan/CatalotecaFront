module.exports = {
  env: {
<<<<<<< HEAD
      browser: true,
      es6: true
  },
  extends: [
      'airbnb',
      'prettier',
      'prettier/react'
=======
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
>>>>>>> master
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
      ecmaFeatures: {
<<<<<<< HEAD
          jsx: true
=======
          'jsx': true
>>>>>>> master
      },
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  plugins: [
      'react',
      'prettier'
  ],
  rules: {
<<<<<<< HEAD
    'prettier/prettier':  'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off'
  }
=======
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js']}
    ],
    'import/prefer-default-export': 'off'
  },
>>>>>>> master
};
