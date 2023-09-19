import fs from 'fs';
import path from 'path';

import type { CoConfigPassthroughEntry } from 'coconfig';

import { tsconfig, tsconfigBuild } from './tsconfig';
import { vitestConfig } from './vitest';
import { prettierConfig } from './prettier';
import { eslintRc } from './eslint';
import { commitLint } from './commitlint';
import { hasPackage } from './has-package';

interface OtiCoConfig {
  '.eslintignore': string;
  '.npmignore': string;
  'tsconfig.json': CoConfigPassthroughEntry<typeof tsconfig>;
  'tsconfig.build.json': CoConfigPassthroughEntry<typeof tsconfigBuild>;
  'vitest.config.ts'?: CoConfigPassthroughEntry;
  '.prettierrc.js'?: CoConfigPassthroughEntry;
  '.eslintrc.js'?: CoConfigPassthroughEntry;
  '.prettierrc.cjs'?: CoConfigPassthroughEntry;
  '.eslintrc.cjs'?: CoConfigPassthroughEntry;
  '.commitlintrc.json': CoConfigPassthroughEntry;
}

const baseConfig: OtiCoConfig = {
  '.eslintignore': fs.readFileSync(path.resolve(__dirname, '../templates/eslintignore'), 'utf8'),
  '.npmignore': fs.readFileSync(path.resolve(__dirname, '../templates/npmignore'), 'utf8'),
  'tsconfig.json': { configuration: tsconfig, stringify: true },
  'tsconfig.build.json': { configuration: tsconfigBuild, stringify: true },
  '.prettierrc.js': { configuration: prettierConfig },
  '.eslintrc.js': { configuration: eslintRc },
  '.commitlintrc.json': { configuration: commitLint, stringify: true },
};

if (hasPackage('vitest')) {
  Object.assign(baseConfig, {
    'vitest.config.ts': { configuration: vitestConfig },
  });
}

try {
  const { type } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (type === 'module') {
    baseConfig['.eslintrc.cjs'] = baseConfig['.eslintrc.js'];
    delete baseConfig['.eslintrc.js'];

    baseConfig['.prettierrc.cjs'] = baseConfig['.prettierrc.js'];
    delete baseConfig['.prettierrc.js'];

    eslintRc.settings = {
      'import/resolver': {
        typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    };

    tsconfig.compilerOptions.module = 'Node16';
    tsconfig.compilerOptions.moduleResolution = 'node16';
    (tsconfig['ts-node'] as Record<string, boolean>).esm = true;
  }
} catch (error) {
  // Do nothing
}

export const config = baseConfig;
