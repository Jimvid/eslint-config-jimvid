module.exports = {
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react']
        }
    },
    env: {
        browser: true,
        node: true,
        jquery: true,
        jest: true
    },
    plugins: ['html', 'import-no-duplicates-prefix-resolved-path'],
    rules: {
        // General rules
        'no-use-before-define': 'warn',
        'no-debugger': 0,
        'no-alert': 0,
        'no-console': 0,
        'no-await-in-loop': 0,
        'space-before-function-paren': 0,
        'comma-dangle': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'prefer-arrow-callback': [
            'error',
            { allowNamedFunctions: false, allowUnboundThis: true }
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all'
            }
        ],
        'import/prefer-default-export': 0,
        'no-param-reassign': [
            2,
            {
                props: false
            }
        ],
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-mutable-exports': 0,
        'import/no-duplicates': 0,
        'import-no-duplicates-prefix-resolved-path/no-duplicates': [
            'error',
            {
                prefixResolvedPathWithImportName: true
            }
        ],
        'no-restricted-imports': ['error'],
        // React specific
        'react/display-name': 1,
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/forbid-prop-types': 0,
        'react/no-unescaped-entities': 0,
        'react/function-component-definition': 0,
        'jsx-a11y/accessible-emoji': 0,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                assert: 'either'
            }
        ],
        'react/require-default-props': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx']
            }
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        // Prettier
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'none',
                tabWidth: 4,
                singleQuote: true,
                endOfLine: 'auto'
            }
        ]
    }
};
