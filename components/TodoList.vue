<template>
    <div>
        <div v-if="tasks.length > 0">
            <ul id="todo-list" v-for="task in tasks" :key="task">
                <TodoListTask :task v-if="task"/>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
/**
 * Is list of todos
 */

import { useLocalStorage}  from "@vueuse/core"

// Tasks are stored in local storage
const tasks = useLocalStorage<string[]>("tasks", []);

</script>

<style scoped>

#todo-list {
    display:flex;
    flex-direction: column;
}

</style>