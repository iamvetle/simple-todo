<template>
    <li>{{ task }} 1</li>
</template>

<script setup lang='ts'>
/** Is <li> element */
    
defineProps<{
    task:string;
}>();


</script>