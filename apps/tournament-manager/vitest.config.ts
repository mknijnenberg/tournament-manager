import {defineConfig, coverageConfigDefaults} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    logHeapUsage: true,
    setupFiles: './src/tests/setupFiles.ts',
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      clean: true,
      enabled: true,
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      reporter: ['text', 'json', 'html'],
      exclude: [
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
