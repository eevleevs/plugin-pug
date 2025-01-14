/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // Needed for vitest
      src: resolve(__dirname, './src'),
      tests: resolve(__dirname, './tests'),
    },
  },
});
