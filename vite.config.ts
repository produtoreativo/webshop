import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "window",
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
      { find: '@redux-webshop', replacement: './src/redux' },
    ],
  },
  plugins: [viteCommonjs(), react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});