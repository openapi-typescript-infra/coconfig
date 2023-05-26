export const eslintRc = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['jest'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': [0],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-duplicates': 'error', // Prevents multiple import statements from the same module/file
    'import/no-default-export': 'error', // Default exports are the devil in a monorepo.
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: ['./tsconfig.json'] },
      plugins: ['@typescript-eslint'],
    }
  ],
};
