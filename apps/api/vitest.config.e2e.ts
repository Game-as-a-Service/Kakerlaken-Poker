import tsconfigPaths from 'vite-tsconfig-paths';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./test/**/*.e2e-spec.ts'],
    globals: true,
    root: './',
  },
  plugins: [swc.vite(), tsconfigPaths()],
});
