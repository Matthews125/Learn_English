import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev chạy ở '/'; bản build dùng base tương đối './' để chạy được ở mọi sub-path
// (GitHub Pages project site: https://<user>.github.io/<repo>/). App không dùng
// router nên base tương đối là an toàn và không cần biết tên repo.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
}))
