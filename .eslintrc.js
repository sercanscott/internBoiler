module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'jsx-a11y'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
  },
};
