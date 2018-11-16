module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
