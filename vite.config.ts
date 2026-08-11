/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  define: {
    global: "window"
  },
  // optimizeDeps: {
  //   include: ["@react-navigation/native"],
  //   esbuildOptions: {
  //     mainFields: ["module", "main"],
  //     resolveExtensions: [".web.js", ".js", ".ts"],
  //     plugins: [esbuildCommonjs(["@react-navigation/elements"])],
  //   },
  // },
  // resolve: {
  //   alias: [
  //     { find: '@src', replacement: resolve(__dirname, './src') },
  //     { find: '@utils', replacement: resolve(__dirname, './src/utils') },
  //     { find: '@themes', replacement: resolve(__dirname, './src/themes') },
  //     { find: '@components', replacement: resolve(__dirname, './src/components') },
  //     { find: '@dlsCss', replacement: resolve(__dirname, './src/design/dls.min.css') }
  //   ]
  // },
  resolve: {
    extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js"],
    alias: [
    // "react-native": "react-native-web",
    {
      find: '@webshop-store',
      replacement: './src/store'
    }]
  },
  plugins: [viteCommonjs(), react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});