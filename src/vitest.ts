import fs from 'fs';
import path from 'path';

export function vitestConfig() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { configDefaults, defineConfig } = require('vitest/config');

  const config: typeof configDefaults = {
    test: {
      watch: false,
      exclude: ['.trunk', '**/build/**', ...configDefaults.exclude],
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
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
