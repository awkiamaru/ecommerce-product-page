import { defineConfig } from 'vite'
import { join } from 'path'
import paths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
		outDir: 'build'
	},
	plugins: [react(), paths(), svgr({ svgrOptions: { icon: true } })],
  resolve: {
		alias: [
			{
				find: /~(.+)/,
				replacement: join(process.cwd(), 'node_modules/$1')
			}
		]
	}
})
