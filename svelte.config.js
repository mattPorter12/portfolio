import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter(),
    paths: {
      base: 'https://storage.googleapis.com/portfolio_bucket_mp', // Leave blank for root
      assets: 'https://storage.googleapis.com/portfolio_bucket_mp',
    },
  },
};

