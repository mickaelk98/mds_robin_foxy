import { defineConfig } from 'vitest/config';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            reporter: ['text', 'html'],
        },
        include: ['__test__/**/*.test.ts'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './app'),
        },
    },
});
