import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three-core': ['three'],
          'vendor-r3f': ['@react-three/fiber', '@react-three/drei'],
          'vendor-ui': ['lucide-react', 'gsap', 'canvas-confetti'],
        },
      },
    },
  },
});
