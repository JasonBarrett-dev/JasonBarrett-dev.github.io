import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: 'app.html'
        }),
        paths: {
            // For Github Pages we need to serve the website from a folder with the same name as the repository.
            base: dev ? '' : process.env.BASE_PATH
        }
    }
};

export default config;
