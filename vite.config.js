import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/Portfolio/",
  };

  if (command !== "serve") {
    config.base = "/Portfolio/";
  }

  return config;
});

//base: "https://saram7619.github.io/deploying-vite-project-example/"
