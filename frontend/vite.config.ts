import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/taste-map-project', // GitHub Pages 경로
  plugins: [react()],
})
