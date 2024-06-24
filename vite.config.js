import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/qik-menu",
  server: {
    proxy: {
      "/venue": {
        target: "https://cdn-dev.preoday.com/challenge",
        changeOrigin: true,
        secure: false,
      },
      "/menu": {
        target: "https://cdn-dev.preoday.com/challenge",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
