import { defineConfig } from 'vitest/config'; 
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // <- Isso é fundamental!
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Caminho do seu setup
  },
})
