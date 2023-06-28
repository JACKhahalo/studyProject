import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['path'],
      output: {
        globals: {
          path: 'window.path', // 将 path 模块映射到浏览器环境中的全局对象
        },
      },
    },
  },
  resolve: {
    alias: {
      __dirname: '/@dirname',
    },
  },
});
