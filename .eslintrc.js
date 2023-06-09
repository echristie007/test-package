// eslint-disable-next-line
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },

    'rules': {
        // enable additional rules
        'indent': ['off'], // prettier
        'max-len': ['off'], // prettier
        'no-tabs': ['off'], // prettier
        'brace-style': ['off'], // prettier
        'quotes': ['off'], // prettier
        'spaced-comment': ['off'], // prettier
        'no-trailing-spaces': ['off'], // prettier
        'camelcase': ['error'],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'curly': ['error'],
        'eqeqeq': ['error'],
        'no-eval': ['error'],
        'no-var': ['error'],
        'react/react-in-jsx-scope': ['off'],
        'react/prop-types': ['off'],
        'prefer-const': ['error'],
    },
};
