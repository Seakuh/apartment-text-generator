import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/home-finder/", // Basis-URL für Ressourcen
  build: {
    outDir: "dist", // Output-Verzeichnis
  },
  plugins: [react()], // Plugin für JSX-Support
});
