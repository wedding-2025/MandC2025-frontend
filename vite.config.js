import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  
  build: {
    // Increase the chunk size warning limit (optional)
    chunkSizeWarningLimit: 2000, // Set the limit to 2 MB for chunk size warnings
    
    rollupOptions: {
      output: {
        // Manual chunking: Splitting dependencies like React and ReactDOM into separate chunks
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },

  server: {
    port: 3000, // Set frontend port to 3000
    // Uncomment and configure proxy if needed for form requests
    // proxy: {
    //   '/rsvp': {
    //     target: 'http://localhost:3500',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/rsvp/, ''), // Removes '/rsvp' from the path
    //   },
    // }
  },
});
