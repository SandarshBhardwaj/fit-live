// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
 
  publicDir: '../images', // Serve from /images folder
  build: {
    outDir: '../dist', // Output folder
    emptyOutDir: true
  }
});
