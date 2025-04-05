import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rebrun_homepage/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
})