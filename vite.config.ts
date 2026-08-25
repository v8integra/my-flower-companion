import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo is deployed as a GitHub Pages project site at
// https://v8integra.github.io/myFlowerCompanion/ — base must match the repo name.
export default defineConfig({
  base: "/myFlowerCompanion/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
