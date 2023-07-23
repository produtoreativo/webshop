// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       'react-native': 'react-native-web',
//     },
//   },
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     global: 'window',
//   },
//   optimizeDeps: {
//     esbuildOptions: {
//       mainFields: ['module', 'main'],
//       resolveExtensions: ['.web.js', '.js', '.ts'],
//     },
//   },
//   resolve: {
//     alias: {
//       'react-native': 'react-native-web',
//     },
//   },
//   plugins: [react()],
// });

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
  resolve: {
    extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js"],
    alias: {
      "react-native": "react-native-web",
    },
  },
  plugins: [viteCommonjs(), react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});