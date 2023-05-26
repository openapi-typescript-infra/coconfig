import fs from 'fs';
import path from 'path';

import type { CoConfigPassthroughEntry } from 'coconfig';

import { tsconfig, tsconfigBuild } from './tsconfig';
import { jestConfig } from './jest';
import { prettierConfig } from './prettier';
import { eslintRc } from './eslint';
import { commitLint } from './commitlint';

interface OtiCoConfig {
  '.eslintignore': string,
  '.npmignore': string,
  'tsconfig.json': CoConfigPassthroughEntry<typeof tsconfig>,
  'tsconfig.build.json': CoConfigPassthroughEntry<typeof tsconfigBuild>,
  'jest.config.cjs': CoConfigPassthroughEntry,
  '.prettierrc.cjs': CoConfigPassthroughEntry,
  '.eslintrc.cjs': CoConfigPassthroughEntry,
  '.commitlintrc.json': CoConfigPassthroughEntry,
}

export const config: OtiCoConfig = {
  '.eslintignore': fs.readFileSync(path.resolve(__dirname, '../templates/eslintignore'), 'utf8'),
  '.npmignore': fs.readFileSync(path.resolve(__dirname, '../templates/npmignore'), 'utf8'),
  'tsconfig.json': { configuration: tsconfig, stringify: true },
  'tsconfig.build.json': { configuration: tsconfigBuild, stringify: true },
  'jest.config.cjs': { configuration: jestConfig },
  '.prettierrc.cjs': { configuration: prettierConfig },
  '.eslintrc.cjs': { configuration: eslintRc },
  '.commitlintrc.json': { configuration: commitLint, stringify: true },
};
