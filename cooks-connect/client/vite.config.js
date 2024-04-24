import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config() // load env vars from .env

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_SPOONACULAR_API_KEY': JSON.stringify(env.REACT_APP_SPOONACULAR_API_KEY)
    },
    plugins: [react()],
  }
})
