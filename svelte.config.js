import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: false
    }),
    alias: {
      $lib: './src/lib'
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore missing assets
        if (path.startsWith('/images/') || path.includes('icon') || path.includes('favicon')) {
          return;
        }
        // Otherwise throw an error
        throw new Error(message);
      }
    }
  },
  preprocess: [vitePreprocess()]
};

export default config;
