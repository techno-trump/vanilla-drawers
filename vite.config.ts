import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		minify: true,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'Drawers',
			fileName: (format, entryAlias) => `drawers.${format}.js`,
			formats: ["umd", "es"],
		},
	}
});