import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    // host： '0.0.0.0'， 使用当前的ip地址，没有这个就是以localhost作为本地地址
    // port：3000 端口号为3000
    open: false,  // 是否在默认浏览器中自动打开该地址
    proxy: { // 使用代理
      '/api': { // 当有 /api开头的地址是 ，代理到target地址
        target: 'http://localhost:5678', // 需要跨域代理到本地路径
        changeOrigin: true, // 是否改变请求源头
        rewrite: (path) => path.replace(/^\/api/, '') // 路径重写
      }
    }
  }
})
