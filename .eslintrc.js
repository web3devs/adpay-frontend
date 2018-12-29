module.exports = {
  env: {
    es6: true,
    browser: true,
    // node: false,
  },
  extends: [
    'airbnb',
    // 'plugin:jest/recommended',
    // 'jest-enzyme',
    'eslint:recommended',
    // 'plugin:node/recommended',
    'plugin:prettier/recommended',
    // "prettier/flowtype",
    'prettier/react',
    // "prettier/standard"
    // 'react-app'
  ],
  plugins: [
    // 'babel',
    'import',
    'jsx-a11y',
    // 'node',
    'react',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 'off', // Don't play nicely with Windows.

    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'arrow-body-style': 'off', // Not our taste?
    'function-paren-newline': 'off', // Incompatible with prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Incompatible with prettier

    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-console': 'off', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn

    'no-param-reassign': 'off', // Not our taste?
    'no-unused-vars': 'off',
    radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.

    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': ['off', { extensions: ['.js'] }], // airbnb is using .jsx

    // 'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-find-dom-node': 'off', // I don't know
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Is still buggy
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['to'] },
    ],
    // "jsx-a11y/label-has-for": [2, {
    // 	"required": {
    // 		"every": ["id"]
    // 	}
    // }], // for nested label htmlFor error

    // "node/exports-style": ["error", "module.exports"],
    // "node/no-unsupported-features/es-syntax": "off",
    // "node/prefer-global/buffer": ["error", "always"],
    // "node/prefer-global/console": ["error", "always"],
    // "node/prefer-global/process": ["error", "always"],
    // "node/prefer-global/url-search-params": ["error", "always"],
    // "node/prefer-global/url": ["error", "always"],

    'prettier/prettier': ['warn'],
  },
};
