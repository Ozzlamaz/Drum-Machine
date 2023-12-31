import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/Drum-Machine/',
  }

  if (command !== 'serve') {
    config.base = '/Drum-Machine/'
  }

  return config
})

