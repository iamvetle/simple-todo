<template>
    <div class="flex justify-between">
        <div class="flex break-words hyphens-auto overflow-auto" lang="en">
            <div class="mt-1">
                <CheckedCheckbox @click="updateTask" v-if="completed" width="1.5em" height="1.5em" fill="green"/>
                <Checkbox @click="updateTask" v-else width="1.5em" height="1.5em" :fill="checkboxIconColor"
                
                @mouseover="checkboxIconColor = 'green'"
                @mouseleave="checkboxIconColor = 'black'"
                
                />
            </div>
            <p class="flex ms-tight text-subheading" :class=textColor>{{ task.task.name }}</p>
        </div>

        <div class="mt-1">

            <Delete @click="deleteTask" width="1.5em" height="1.5em" :fill="deleteIconColor"
                @mouseover="deleteIconColor = 'red'" @mouseleave="deleteIconColor = 'black'" />
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

const deleteIconColor = ref("black")
const deleteTask = () => {
    localTasks.value.splice(propIndex.value, 1)
}

const checkboxIconColor = ref("black")
const completed = computed(() => propTask.value.completed == true ? true : false)
const updateTask = () => {
    if (completed.value === true) {
        localTasks.value[propIndex.value].completed = false
    }

    if (completed.value === false) {
        localTasks.value[propIndex.value].completed = true
    }
}

const textColor = computed(() => completed.value === true ? "line-through" : "")
// const buttonColor = computed(() => completed.value === true ? "bg-green-500" : "bg-blue-800")


</script>./CheckedCheckbox.vue