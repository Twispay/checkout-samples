import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [solidPlugin(), basicSsl()],
  server: {
    port: 3002,
    https: true,
  },
  build: {
    target: "esnext",
  },
});
