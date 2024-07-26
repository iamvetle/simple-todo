<template>
	<div v-if="tasks.length > 0" v-auto-animate>
		<TodoListItem
			v-for="(task, index) in tasks"
			:key="task.date_created"
			:task="{
				task: task,
				index: index,
			}"
			class="mt-beside w-full"
		/>
	</div>
	<div
		v-else
		class="flex w-full text-subheading justify-start ms-tight font-light"
	>
		No tasks left
	</div>
</template>

<script lang="ts">
	type Task = {
		name: string;
		date_created: number;
		completed: boolean;
	};
</script>

<script setup lang="ts">
	/**
	 * Is list of todos
	 */

	import { useLocalStorage } from "@vueuse/core";
	import { vAutoAnimate } from "@formkit/auto-animate";

	// Tasks are stored in local storage
	const tasks = useLocalStorage<Task[]>("tasks", []);
</script>
