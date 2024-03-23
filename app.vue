<template>
  <div id="site-wrapper">
    <div class="min-h-screen flex flex-col px-2 mx-auto">

      <h1 class="text-center text-heading1 mt-doubleDistance w-full">Todo list</h1>

      <div class="flex-1 flex-col mt-distance">

        <div class="mx-auto max-w-[550px] ">
          <TodoList/>
          <TodoAddTask class="text-center mt-doubleDistance w-full"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// 80 character width might be 550px in width

</script>
