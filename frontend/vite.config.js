import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: "/Group_E/",
  base: process.env.BASE_URL || "/",
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  preview: {
    port: 8080,
    host: true
  }
})
