import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
  // Базовые правила ESLint
  eslint.configs.recommended,

  // Правила TypeScript
  ...tseslint.configs.recommended,

  // Правила Playwright для тестов
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.ts'],
  },

  // Общие настройки для всех TS файлов
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Игнорируемые файлы
  {
    ignores: ['node_modules/', 'playwright-report/', 'test-results/'],
  },
];