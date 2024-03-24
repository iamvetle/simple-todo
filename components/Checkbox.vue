<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24">
	<path :fill="fill" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5z" />
</svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    fill?:string;
    width?:string;
    height?:string;
}>(),
{
    fill:"black",
    width:"1em",
    height:"1em"
}
);
</script>