import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      // Vite specific configurations
    }
  }
}