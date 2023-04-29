module.exports = {
    globals: {
        React: true,
        JSX: true
    },
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Add our JS rules here
        './.eslintrc.js'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        'no-unused-vars': 'warn',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [
            'warn',
            {
                ignoreDeclarationMerge: true
            }
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-use-before-define': 'off'
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.cjs', '.js', '.ts']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
};
