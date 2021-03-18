module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        extraFileExtensions: [ '.vue' ],
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/explicit-function-return-type': [ 'off', {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
        } ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'no-constant-condition': [ 'error', { 'checkLoops': false } ],
        'no-async-promise-executor': 'off',
        'no-prototype-builtins': 'off',
        'semi': [ 'error', 'always' ],
        'arrow-parens': [ 'error', 'always' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'vue/attributes-order': 'off',
        'vue/html-indent': [ 'error', 4 ],
        'indent': [ 'off', 4 ],
        'no-trailing-spaces': 'off',
        'array-bracket-spacing': 'off',
        'quote-props': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'template-curly-spacing': 'off',
        'yoda': 'off',
        'no-useless-constructor': 'off',
        'operator-linebreak': 'off',
        'keyword-spacing': 'off',
        'no-unused-expressions': 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
