import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif)$/.test(assetInfo.name)) {
            return 'images/[name][extname]'; 
          }
          return 'assets/[name][extname]';
        }
      }
    }
  }
});