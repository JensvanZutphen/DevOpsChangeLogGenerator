import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				// Existing directories
				'src/lib',
				'src/routes',
				'.svelte-kit',
				'src',
				'node_modules',
				// Add the new directory
				path.resolve(__dirname, '.svelte-kit/generated/client')
			]
		}
	}
});