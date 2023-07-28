export function vitestConfig() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { configDefaults, defineConfig } = require('vitest/config');

  return defineConfig({
    test: {
      watch: false,
      exclude: ['.trunk', ...configDefaults.exclude],
    },
  });
}