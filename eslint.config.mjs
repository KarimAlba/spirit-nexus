import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from "eslint-plugin-prettier";
import tsSortKeysPlugin from 'eslint-plugin-typescript-sort-keys';
import eslintPluginUnicorn from 'eslint-plugin-unicorn'; 
import unusedImports from "eslint-plugin-unused-imports";
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
 
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: prettier,
      "typescript-sort-keys": tsSortKeysPlugin,
      unicorn: eslintPluginUnicorn,
      'unused-imports': unusedImports,
      'sort-keys-fix': sortKeysFix,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'react/display-name': 'off',
      'valid-jsdoc': 'off',
      'import/no-unresolved': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-event-target': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      // Warnings
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: '*',
          next: ['interface', 'type'],
        },
      ],
      'no-console': 'warn',
      // Enabled Rules
      'object-shorthand': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          noSortAlphabetically: true,
          callbacksLast: true,
          ignoreCase: true,
          shorthandFirst: true,
          reservedFirst: true,
          multiline: 'last',
        },
      ],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx', '.jsx'],
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'multiline-block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'return',
            'throw',
            'try',
            'while',
            'do',
            'if',
            'switch',
            'function',
            'for',
            'multiline-const',
          ],
        },
        {
          blankLine: 'always',
          prev: 'multiline-const',
          next: '*',
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      semi: ['error', 'always'],
      'no-mixed-requires': 'error',
      'sort-keys-fix/sort-keys-fix': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'unicorn/filename-case': 'off',
      // 'dirs/dirnames': [
      //   2,
      //   {
      //     pattern:
      //       '^(\[\[\.\.\.[a-zA-Z0-9-_]+\]\]|\[\.\.\.[a-zA-Z0-9-_]+\]|\[[a-zA-Z0-9-_]+\]|[a-zA-Z0-9-_.]+)$',
      //   },
      // ],
      'typescript-sort-keys/interface': [
        'error',
        'asc',
        {
          caseSensitive: true,
          natural: false,
          requiredFirst: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: false,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore',
        },
      ],
      'import/no-unresolved': 'off',
      'jsx-a11y/html-has-lang': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          aspects: ['invalidHref', 'preferButton'],
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
        },
      ],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
        },
      ],
      'no-console': 'warn',
      'no-mixed-requires': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: '*',
          prev: 'multiline-block-like',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: ['const', 'let', 'var'],
        },
        {
          blankLine: 'any',
          next: ['const', 'let', 'var'],
          prev: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          next: [
            'return',
            'throw',
            'try',
            'while',
            'do',
            'if',
            'switch',
            'function',
            'for',
            'multiline-const',
          ],
          prev: '*',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'multiline-const',
        },
      ],
      'prettier/prettier': [
        'error',
        {
          jsxSingleQuote: true,
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: 'all',
          printWidth: 100,
          bracketSameLine: false,
          useTabs: false,
          arrowParens: 'always',
          endOfLine: 'auto',
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'react/display-name': 'off',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx', '.jsx', '.cjs'],
        },
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          multiline: 'last',
          reservedFirst: true,
          shorthandFirst: true,
        },
      ],
      'react/no-array-index-key': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-unused-state': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      semi: ['error', 'always'],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^(react)(\\/.*|$)', '^(react-dom)(\\/.*|$)', '(^next)(\\/.*|$)'],
            ['^@?\\w'],
            [
              '^(src/api)(\\/.*|$)',
              '^(src/hooks)(\\/.*|$)',
              '^(src/store)(\\/.*|$)',
              '^(src/helpers)(\\/.*|$)',
              '^(src/types)(\\/.*|$)',
              '^(src/constants)(\\/.*|$)',
            ],
            ['^\\.'],
            ['(jpe?g|png|webp|svg|avif)$'],
            ['(css|scss)$'],
          ],
        },
      ],
      'typescript-sort-keys/interface': [
        'error',
        'asc',
        {
          caseSensitive: true,
          natural: false,
          requiredFirst: true,
        },
      ],
      'typescript-sort-keys/string-enum': [
        'error',
        'asc',
        {
          caseSensitive: true,
        },
      ],
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-event-target': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      'valid-jsdoc': 'off',
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])
 
export default eslintConfig
