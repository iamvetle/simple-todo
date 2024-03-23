<template>
    <div>
        <div v-if="tasks.length > 0" class="flex w-full flex-col">
            <TodoListTask v-for="task, index in tasks" :key="task.id" :task="{
            'task': task,
            'index': index
        }" class="mt-beside" />

        </div>
        <div v-else class="flex w-full text-subheading justify-start ms-tight">You have no tasks</div>

    </div>
</template>


<script lang="ts">
type Task = {
    id: number;
    name: string;
    date_created: string;
    completed: boolean;
};
</script>

<script setup lang='ts'>
/**
 * Is list of todos
 */

import { useLocalStorage } from "@vueuse/core"

// Tasks are stored in local storage
const tasks = useLocalStorage<Task[]>("tasks", []);

</script>

<style scoped>
#todo-list {
    display: flex;
    flex-direction: column;
}
</style>