export const tsconfig = {
  include: ['@types/**/*', 'src/**/*', '__tests__/**/*', '__mocks__/**/*', 'coconfig.ts'],
  exclude: ['node_modules', 'build'],
  'ts-node': {
    transpileOnly: true,
    files: true,
    esm: true,
  },
  compilerOptions: {
    lib: ['ES2022', 'DOM'],
    module: 'Node16',
    moduleResolution: 'node16',
    target: 'ES2022',
    declaration: true,
    sourceMap: true,
    outDir: './build',
    incremental: true,
    isolatedModules: true,
    strict: true,
    baseUrl: './src',
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    experimentalDecorators: true,
  },
};

export const tsconfigBuild = {
  extends: './tsconfig.json',
  exclude: [
    'src/**/*.spec.ts',
    'src/**/*.test.ts',
    '__tests__/**/*.ts',
    '__mocks__/**/*.ts',
    'coconfig.ts',
  ],
};
