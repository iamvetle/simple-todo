<template>
    <div class="flex justify-between">
        <div class="flex break-words hyphens-auto overflow-auto" lang="en" >
            <span class="">&#x2022</span>
            <p class="flex ms-tight text-subheading" :class=textColor>{{ task.task.name }}</p>
        </div>

        <div class="flex flex-row">
            <!-- COMPLETED -->
            <button @click="updateTask" class="ms-by h-fit text-white text-mention p-1 rounded-sm" :class="buttonColor">
                finished
            </button>
            <!-- DELETE -->
            <button class="h-fit bg-red-500 stroke-black hover:bg-red-300 text-white text-mention p-1 rounded-sm ms-beside" @click="deleteTask">del</button>
        </div>
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
/** Is <li> element */
import { useLocalStorage } from '@vueuse/core';

const props = defineProps<{
    task: {
        task: Task,
        index: number,
    }
}>();

const localTasks = useLocalStorage<Task[]>("tasks", []);

const propIndex = toRef(() => props.task.index);
const propTask = toRef(() => props.task.task);

const deleteTask = () => {
    localTasks.value.splice(propIndex.value, 1)
}

const completed = computed(() => propTask.value.completed == true ? true : false)
const updateTask = () => {
    if (completed.value === true) {
        localTasks.value[propIndex.value].completed = false
    }

    if (completed.value === false) {
        localTasks.value[propIndex.value].completed = true
    }
}

const textColor = computed(() => completed.value === true ? "line-through": "")
const buttonColor = computed(() => completed.value === true ? "bg-green-500" : "bg-blue-500")


</script>