import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    plugins: [react()],
    base: env.VITE_AMBIENT === "development" ? "" : "/qik-menu",
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
  };
});
