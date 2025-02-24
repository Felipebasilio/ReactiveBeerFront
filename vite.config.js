import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src/components"),
      "@assets": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src/assets"),
    },
  },
});
