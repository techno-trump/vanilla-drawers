import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'Drawers',
			fileName: (format, entryAlias) => `drawers.${format}.js`,
			formats: ["umd", "es"],
		},
	}
});