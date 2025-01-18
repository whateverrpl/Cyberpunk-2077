import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
          output: {
            // Настраиваем пути для ассетов (включая шрифты)
            assetFileNames: (assetInfo) => {
              if (/\.woff2?$/.test(assetInfo.name || '')) {
                return 'assets/fonts/[name][extname]';
              }
              return 'assets/[name][extname]';
            },
          },
        },
      },
    base: '/Cyberpunk-2077/'
});