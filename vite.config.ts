import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestIcons = [
  {
    src: "favicon/android-chrome-192x192.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    src: "favicon/android-chrome-512x512.png",
    sizes: "512x512",
    type: "image/png",
  },
];

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My Awesome App",
        short_name: "PWA App",
        icons: manifestIcons,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
