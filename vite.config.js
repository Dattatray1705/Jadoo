
import { defineConfig } from "vite"; //set vite config
import react from "@vitejs/plugin-react"; //Vite मध्ये React support देतो.
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
