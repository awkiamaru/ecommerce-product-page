module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
      "plugin:import/recommended"
    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'src/setupTests.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
		'@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': 'warn',
    },
    "settings": {
        "jest": {
            "version": 26
        }
    },
  };