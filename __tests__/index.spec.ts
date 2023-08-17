import { expect, test } from 'vitest';

import { config } from '../src';

test('index', () => {
  expect(config).toBeTruthy();
});
