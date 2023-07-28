import type { JestConfigWithTsJest } from 'ts-jest';

export const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(\\.|/)(test|spec)\\.[jt]sx?$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
};
