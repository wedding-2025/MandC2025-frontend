import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set frontend port to 3000
    // proxy: {
    //   // Proxy RSVP form requests
    //   '/rsvp': {
    //     target: 'http://localhost:3500',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/rsvp/, ''), // Removes '/rsvp' from the path
    //   },
    // }
  },
});
