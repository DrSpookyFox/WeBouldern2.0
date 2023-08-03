import { defineConfig,loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
 
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      host: true,
      port: 8000,
  },
    define: {
      'process.env.REACT_APP_WEATHER_API': JSON.stringify(env.REACT_APP_WEATHER_API),
    },
  }
})



// {
//   plugins: [react()],
//   server: {
//     host: true,
//     port: 8000,
//   },