import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript from "@rollup/plugin-typescript";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: "es2015",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "HookLib",
      fileName: (format) => `hook-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: resolve(__dirname, 'dist'),
        globals: {
          vue: "Vue"
        }
      },
      plugins: [typescript()]
    }
  },
});
