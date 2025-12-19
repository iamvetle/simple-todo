<template>
	<div class="flex justify-between max-w-[550px]">
		<div
			class="flex break-words hyphens-auto overflow-auto mt-1 items-center"
			lang="en"
		>
			<div>
				<CheckedCheckbox
					@click="updateTask"
					v-if="completed"
					width="1.5em"
					height="1.5em"
					fill="green"
				/>
				<Checkbox
					@click="updateTask()"
					v-else
					width="1.5em"
					height="1.5em"
					:fill="checkboxIconColor"
					@mouseover="checkboxIconColor = 'green'"
					@mouseleave="checkboxIconColor = 'black'"
				/>
			</div>
			<p
				class="flex ms-tight text-subheading"
				@dblclick="editText()"
				:id="task.task.id.toString()"
			>
				{{ task.task.name }}
			</p>
		</div>

		<div>
			<Delete
				@click="deleteTask()"
				width="1.5em"
				height="1.5em"
				:fill="deleteIconColor"
				@mouseover="deleteIconColor = 'red'"
				@mouseleave="deleteIconColor = 'black'"
			/>
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

<script setup lang="ts">
	/** Is <li> element */
	import { useLocalStorage } from "@vueuse/core";

	const props = defineProps<{
		task: {
			task: Task;
			index: number;
		};
	}>();

	const propIndex = toRef(() => props.task.index);
	const propTask = toRef(() => props.task.task);

	const localTasks = useLocalStorage<Task[]>("tasks", []);

	const lastPElementText: Ref<null | string> = ref(null);

	function editText() {
		const pElement = document.getElementById(
			propTask.value.id.toString()
		) as HTMLParagraphElement;

		console.log(pElement?.innerHTML);

		const inputElement = document.createElement("input");
		inputElement.type = "text";
		inputElement.id = pElement.id;

		Array.from(pElement.classList).forEach((className) => {
			inputElement.classList.add(className);
		});

		inputElement.style.width = "500px";
		inputElement.style.outline = "none";

		inputElement.value = pElement.innerHTML;
		lastPElementText.value = pElement.innerHTML;

		pElement.appendChild(inputElement);
		pElement.replaceWith(inputElement);

		inputElement.focus();

		inputElement.addEventListener("blur", () => {
			const pElement = document.createElement("p");
			pElement.innerHTML = inputElement.value;

			Array.from(inputElement.classList).forEach((className) => {
				pElement.classList.add(className);
			});
			pElement.id = inputElement.id;

			if (inputElement.value.trim() != "") {
				(localTasks.value[propIndex.value] as any).name =
					inputElement.value;
			} else {
				pElement.innerHTML = lastPElementText.value as string;
			}

			inputElement.appendChild(pElement);
			inputElement.replaceWith(pElement);

			pElement.ondblclick = editText;
		});
	}

	const deleteIconColor = ref("black");

	const deleteTask = () => {
		localTasks.value.splice(propIndex.value, 1);
	};

	const checkboxIconColor = ref("black");
	const completed = computed(() =>
		propTask.value.completed == true ? true : false
	);

	onMounted(() => {
		const element = document.getElementById(propTask.value.id.toString());

		if (completed.value === true) {
			element?.classList.add("line-through");
		}

		if (completed.value === false) {
			element?.classList.remove("line-through");
		}
	});

	const updateTask = () => {
		const element = document.getElementById(propTask.value.id.toString());

		// * assumens that the index is there
		if (completed.value === true) {
			(localTasks.value[propIndex.value] as any).completed = false;
			element?.classList.remove("line-through");
		}

		if (completed.value === false) {
			(localTasks.value[propIndex.value] as any).completed = true;
			element?.classList.add("line-through");
		}
	};
</script>
