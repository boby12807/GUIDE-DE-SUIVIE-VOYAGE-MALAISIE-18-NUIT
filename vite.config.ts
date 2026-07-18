import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? "/GUIDE-DE-SUIVIE-VOYAGE-MALAISIE-18-NUIT/"
    : "/",
  plugins: [react(), tailwindcss()],
});
