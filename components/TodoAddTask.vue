<template>
    <div>
        <input type="text" v-model="task" @keydown.enter="addTask">
    </div>
</template>

<script setup lang='ts'>
import { useLocalStorage } from '@vueuse/core';    

const tasks = useLocalStorage<string[]>("tasks", [])
const task = ref("");
const addTask = () => {
    alert("addtask");

    if (task.value.trim() != "") {
        tasks.value.push(task.value)
    }

    console.log(task.value)

}


</script>