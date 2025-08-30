// vite.config.ts
import { defineConfig } from "file:///Users/ritvikgupta/Documents/Code/shivangi-portfolio-website/clickable-canvas-portfolio/node_modules/.pnpm/vite@5.4.19_@types+node@22.18.0/node_modules/vite/dist/node/index.js";
import react from "file:///Users/ritvikgupta/Documents/Code/shivangi-portfolio-website/clickable-canvas-portfolio/node_modules/.pnpm/@vitejs+plugin-react-swc@3.11.0_vite@5.4.19_@types+node@22.18.0_/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/ritvikgupta/Documents/Code/shivangi-portfolio-website/clickable-canvas-portfolio";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      ignored: ["**/node_modules/**", "**/dist/**", "**/.git/**", "**/vite.config.ts.timestamp-*"]
    }
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcml0dmlrZ3VwdGEvRG9jdW1lbnRzL0NvZGUvc2hpdmFuZ2ktcG9ydGZvbGlvLXdlYnNpdGUvY2xpY2thYmxlLWNhbnZhcy1wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yaXR2aWtndXB0YS9Eb2N1bWVudHMvQ29kZS9zaGl2YW5naS1wb3J0Zm9saW8td2Vic2l0ZS9jbGlja2FibGUtY2FudmFzLXBvcnRmb2xpby92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcml0dmlrZ3VwdGEvRG9jdW1lbnRzL0NvZGUvc2hpdmFuZ2ktcG9ydGZvbGlvLXdlYnNpdGUvY2xpY2thYmxlLWNhbnZhcy1wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICB3YXRjaDoge1xuICAgICAgaWdub3JlZDogWycqKi9ub2RlX21vZHVsZXMvKionLCAnKiovZGlzdC8qKicsICcqKi8uZ2l0LyoqJywgJyoqL3ZpdGUuY29uZmlnLnRzLnRpbWVzdGFtcC0qJ11cbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXViLFNBQVMsb0JBQW9CO0FBQ3BkLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsc0JBQXNCLGNBQWMsY0FBYywrQkFBK0I7QUFBQSxJQUM3RjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
