/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
    coverage: {
      all: true,
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{tsx,ts}"],
    },
  },
});
