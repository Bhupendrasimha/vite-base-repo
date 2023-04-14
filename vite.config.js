import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    open:"./index.html",
    port:3000
  },
  preview:{
    port:8080,
    strictPort:true,
  },
 // css:{
    // preprocessorOptions: {
    //   less: {
    //     modifyVars: {
    //       'primary-color': '#0077ea',
    //       'link-color': '#5F36D3',
    //       'heading-color': '#f00',
    //     },

    //     javascriptEnabled: true,
    //   },
    // },
 // }
  
 
})
