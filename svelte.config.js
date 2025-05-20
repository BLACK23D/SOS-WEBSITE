import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Use hash-based routing for better compatibility with static hosting
  kit: {
    // Use SPA mode for better compatibility with cPanel hosting
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    alias: {
      $lib: './src/lib'
    },
    // Disable prerendering for SPA mode
    prerender: {
      entries: [],
      crawl: false,
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore all prerendering errors
        console.warn(`Ignoring prerender error for path: ${path}`);
        return;
      }
    },
    // Paths configuration for better True Host compatibility
    paths: {
      base: '',
      assets: ''
    },
    // Using hash-based routing for better compatibility with static hosting
    router: {type: 'hash'},
    version: {
      name: Date.now().toString()
    }
  },
  preprocess: [vitePreprocess()]
};

export default config;
