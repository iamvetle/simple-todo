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
					src: "maskable/maskable_icon.png",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "maskable/maskable_icon_x48.png",
					sizes: "48x48",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "maskable/maskable_icon_x72.png",
					sizes: "72x72",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "maskable/maskable_icon_x96.png",
					sizes: "96x96",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "maskable/maskable_icon_x128.png",
					sizes: "128x128",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "maskable/maskable_icon_x192.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "maskable/maskable_icon_x384.png",
					sizes: "384x384",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "maskable/maskable_icon_x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "android/android-launchericon-48-48.png",
					sizes: "48x48",
					type: "image/png",
				},
				{
					src: "android/android-launchericon-72-72.png",
					sizes: "72x72",
					type: "image/png",
				},
				{
					src: "android/android-launchericon-96-96.png",
					sizes: "96x96",
					type: "image/png",
				},
				{
					src: "android/android-launchericon-144-144.png",
					sizes: "144x144",
					type: "image/png",
				},
				{
					src: "android/android-launchericon-192-192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "android/android-launchericon-512-512.png",
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
	// ssr: false,
});
