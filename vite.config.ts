import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/zangyuhan-newresume/', // 必须和你的GitHub仓库名完全一致
  plugins: [react()],
})