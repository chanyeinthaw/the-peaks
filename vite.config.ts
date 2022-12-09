import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import reactSvgPlugin from 'vite-plugin-react-svg'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src')
    }
  },
  plugins: [react(), reactSvgPlugin()]
})
