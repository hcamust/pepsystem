import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    // Forward /api/* to the Express checkout + webhook server (server/index.js)
    // so the browser can hit it on the same origin during local development.
    proxy: {
      '/api': 'http://localhost:4242',
    },
  }
})
