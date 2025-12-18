import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/pages/**', './src/widgets/**'],
    rules: {
      'fsd/no-segmentless-slices': 'off',
    },
  },
  {
    // disable the `typo-in-layer-name` rule for Pages layer (_pages because of Next.js)
    files: ['./src/**'],
    rules: {
      'fsd/typo-in-layer-name': 'off',
    },
  },
  {
    files: ['./src/entities/**'],
    rules: {
      'fsd/forbidden-imports': 'off',
    },
  },
]);
