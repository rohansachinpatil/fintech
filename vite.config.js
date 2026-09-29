import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        portfolio: fromRoot('./index.html'),
        fundingDemo: fromRoot('./demos/funding-01/index.html'),
        cinematicDemo: fromRoot('./demos/funding-02/index.html'),
        playfulDemo: fromRoot('./demos/funding-03/index.html'),
        waveDemo: fromRoot('./demos/funding-04/index.html'),
      },
    },
  },
})
