module.exports = {
  "parser": '@typescript-eslint/parser',
  "parserOptions": {
    "project": 'tsconfig.json',
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "plugins": ['@typescript-eslint/eslint-plugin'],
  "extends": [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  "root": true,
  "rules": {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
