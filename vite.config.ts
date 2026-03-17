import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

export default defineConfig({
  base: '/',
  plugins: [
    inspectAttr(),
    react(),
  ],
  build: {
    target: 'es2015',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});