// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@vueuse/nuxt",
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  // ssr:false
  ignore: [
    "**/*.stories.{js,cts,mts,ts,jsx,tsx}",
    "**/*.{spec,test}.{js,cts,mts,ts,jsx,tsx}",
    "**/*.d.{cts,mts,ts}",
    "**/.{pnpm-store,vercel,netlify,output,git,cache,data}",
    ".nuxt/analyze",
    ".nuxt",
    "**/-*.*",
    "Dockerfile",
    "Dockerignore",
    ".github",
    ".devcontainer",
    ".vscode"
  ]
})
