import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    // 打包配置
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: "eSearchOCR",
            formats: ['es', 'umd', 'iife'],
            fileName: (format) => `eSearchOCR.${format}.js`,
        },
    },
});
