import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: "./tsconfig.build.json",
    compilerOptions: {
      paths: {
        "epc-rating": ["./src/index.ts"],
      }
    }
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "EpcRating",
      fileName: "epc-rating"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});