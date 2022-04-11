import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: 'dist/types',
      copyDtsFiles: false,
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'HcEsriSearch',
      formats: ['es'],
      fileName: (format) => `hc-esri-search.${format}.js`,
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
