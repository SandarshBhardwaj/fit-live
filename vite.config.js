// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
 
  publicDir: 'images', 
  build: {
    outDir: 'dist', 
    emptyOutDir: true
  }
});
