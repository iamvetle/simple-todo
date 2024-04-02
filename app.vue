<template>
  <div id="site-wrapper">
    <Link rel="manifest" href="/manifest.json" />
    <!-- ios support -->
    <Link rel="apple-touch-icon" href="ios/72.png" />
    <Link rel="apple-touch-icon" href="ios/128.png" />
    <Link rel="apple-touch-icon" href="ios/144.png" />
    <Link rel="apple-touch-icon" href="ios/152.png" />
    <Link rel="apple-touch-icon" href="ios/192.png" />
    <Link rel="apple-touch-icon" href="ios/512.png" />
    <Link rel="icon" href="/favicon.ico"/>
    <script></script>
    <Meta name="apple-mobile-web-app-status-bar" content="#ffffff" />
    <Meta name="theme-color" content="#ffffff" />

    <div class="min-h-screen flex flex-col px-2 mx-auto">
      <h1 class="text-center font-bold text-heading1 mt-doubleDistance w-full">
        Todo list
      </h1>

      <div
        class="flex flex-1 flex-col mt-doubleDistance mb-doubleDistance justify-between max-w-[550px] mx-auto w-full"
      >
        <div class="mx-auto w-full">
          <ClientOnly>
            <TodoList class="" />
            <template #fallback>
              <div></div>
            </template>
          </ClientOnly>
        </div>
        <TodoAddTask class="text-center min-mt-doubleDistance w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Todo",
  viewport: "width=device-width, initial-scale=1",
  description: "A simple todo app",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

// 80 character width might be 550px in width
</script>
