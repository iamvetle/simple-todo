<template>
	<VitePwaManifest />
	<div id="site-wrapper">
		<!-- ios support -->
		<Link rel="apple-touch-icon" href="ios/72.png" />
		<Link rel="apple-touch-icon" href="ios/128.png" />
		<Link rel="apple-touch-icon" href="ios/144.png" />
		<Link rel="apple-touch-icon" href="ios/152.png" />
		<Link rel="apple-touch-icon" href="ios/192.png" />
		<Link rel="apple-touch-icon" href="ios/512.png" />
		<div class="min-h-screen flex flex-col px-2 mx-auto">
			<h1
				class="text-center font-bold text-heading1 mt-doubleDistance w-full"
			>
				Tasks to do
			</h1>

			<div
				class="flex flex-1 flex-col mt-doubleDistance justify-between max-w-[550px] mx-auto w-full"
			>
				<div class="mx-auto w-full mb-distance">
					<ClientOnly>
						<TodoList class="" />
						<template #fallback>
							<div></div>
						</template>
					</ClientOnly>
				</div>
				<TodoAddTask class="text-center w-full pb-doubleDistance" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: "Todo list",
		viewport: "width=device-width, initial-scale=1",
		description: "A simple app for organizing tasks to do",
	});

	useHead({
		htmlAttrs: {
			lang: "en",
		},

		meta: [
			{
				name: "theme-color",
				content: "#ffffff",
			},
			{
				name: "apple-mobile-web-app-status-bar",
				content: "#ffffff",
			},
		],
		link: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
			{
				rel: "manifest",
				href: "/manifest.json",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "ios/apple-touch-icon.png",
			},
		],
	});

	// 80 character width might be 550px in width
</script>
