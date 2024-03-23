<template>
  <div id="site-wrapper">
    <div class="min-h-screen flex flex-col px-2 mx-auto">

      <h1 class="text-center font-bold text-heading1 mt-doubleDistance w-full">Todo list</h1>

      <div class="flex flex-1 flex-col mt-doubleDistance mb-doubleDistance justify-between max-w-[550px] mx-auto w-full">

        <div class="mx-auto w-full">
          <TodoList class=""/>
        </div>
      <TodoAddTask class="text-center min-mt-doubleDistance w-full"/>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

// 80 character width might be 550px in width

</script>
