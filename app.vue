<template>
  <div class="min-h-screen flex flex-col">
    <h1 class="text-center text-heading1 mt-doubleDistance">Todo list</h1>

    <div class="flex-1 flex-col mt-distance">
      <div class="mx-auto max-w-[550px] ">
        <TodoList class="flex justify-center w-full"/>
        <TodoAddTask class="text-center mt-doubleDistance w-full"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// 80 character width might be 550px in width

</script>
