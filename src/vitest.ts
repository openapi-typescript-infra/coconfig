import fs from 'fs';

export function vitestConfig() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { configDefaults, defineConfig } = require('vitest/config');

  const config: typeof configDefaults = {
    test: {
      watch: false,
      exclude: ['.trunk', '**/build/**', ...configDefaults.exclude],
    },
  };

  if (fs.existsSync('__tests__/vitest.setup.ts')) {
    config.test.globalSetup = '__tests__/vitest.setup.ts';
  }

  if (fs.existsSync('__tests__/vitest.test-setup.ts')) {
    config.test.setupFiles = '__tests__/vitest.test-setup.ts';
  }

  return defineConfig(config);
}
