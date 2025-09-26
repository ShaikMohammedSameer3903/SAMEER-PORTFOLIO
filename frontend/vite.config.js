import { defineConfig } from 'vite'

// Vite config with dev proxy so frontend can call /api and forward to backend
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})
