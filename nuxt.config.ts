// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
	future: { compatibilityVersion: 4 },
	compatibilityDate: "2024-07-16",
	pwa: {
		minify: false,
		injectManifest: {
			maximumFileSizeToCacheInBytes: undefined,
		},
		registerType: "autoUpdate",
		manifest: {
			name: "Todo",
			short_name: "Todo",
			id: "/",
			description: "Keep your tasks orginazed",
			start_url: "/",
			scope: "/",
			display: "standalone",
			display_override: ["window-controls-overlay"],
			theme_color: "#ffffff",
			background_color: "#ffffff",
			icons: [
				{
					src: "android/android-chrome-192x192.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "android/android-chrome-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "android/android-chrome-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "android/android-chrome-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
			],
		},
		manifestFilename: "manifest.json",
		workbox: {
			navigateFallback: "/",
			// * THIS IS IMPORTANT
			globPatterns: ["**/*.{js,wasm,css,html,svg,png,ico}"],
		},
		devOptions: { enabled: true, type: "module" },
	},
	ssr: false,
});
