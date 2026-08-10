import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://yajatsrivastava.github.io/FSD_Lab/', // <--- MUST MATCH YOUR EXACT REPO NAME
})