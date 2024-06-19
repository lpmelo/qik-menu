import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/venue": {
        target: "https://cdn-dev.preoday.com/challenge",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
