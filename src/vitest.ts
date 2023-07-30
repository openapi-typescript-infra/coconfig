export function vitestConfig() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { configDefaults, defineConfig } = require('vitest/config');

  return defineConfig({
    test: {
      watch: false,
      exclude: ['.trunk', ...configDefaults.exclude],
    },
    resolve: {
      alias: [
        // This is a bit odd because it's relative to CWD, not the
        // vitest.config.ts file, but we don't know that path.
        { find: '@', replacement: 'src' },
      ],
    },
  });
}