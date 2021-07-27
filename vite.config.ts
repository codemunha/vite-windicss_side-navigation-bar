import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import ViteComponents from "vite-plugin-components";
import WindiCSS from "vite-plugin-windicss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (id) => id.endsWith(".md"),

      // generate `components.d.ts` for ts support with Volar
      globalComponentsDeclaration: true,
    }),
  ],
});
