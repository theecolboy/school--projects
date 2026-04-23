import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Prints the app URL in the terminal so it stays easy to copy (with clearScreen: false). */
function printDevUrl() {
  return {
    name: 'print-dev-url',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        const addr = server.httpServer?.address()
        const port =
          addr && typeof addr === 'object' && 'port' in addr ? addr.port : 5173
        const url = `http://localhost:${port}/`
        console.log('')
        console.log('  >>> Open your app in the browser:')
        console.log(`  >>> ${url}`)
        console.log('')
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), printDevUrl()],
  clearScreen: false,
})
