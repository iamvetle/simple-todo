<template>
	<div id="add-task" class="text-subheading flex flex-col">
		<input
			type="text"
			v-model="taskName"
			@keydown.enter="addTask"
			placeholder="Write a new task..."
			class="border-b border-sm w-full p-2 focus:outline-none"
		/>
		<button
			@click="addTask"
			class="h-fit mt-beside hover:bg-blue-500 text-body ms-2 text-white bg-blue-800 p-2 rounded-sm"
		>
			Add task
		</button>
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

<script setup lang="ts">
	import { useLocalStorage, useNow, useDateFormat } from "@vueuse/core";

	const tasks = useLocalStorage<Task[]>("tasks", []);
	const taskName = ref<string>("");
	const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");

	const addTask = () => {
		// alert("addtask");

		if (taskName.value.trim() != "") {
			const lastIndex = tasks.value.length;

			const task = <Task>{
				id: lastIndex,
				name: taskName.value,
				date_created: formatted.value,
				completed: false,
			};

			tasks.value.push(task);
			console.log(task); // print to self
			taskName.value = "";
		}
	};
</script>
