<template>
    <div>
        <h1 data-aos="fade-up" class="text-2xl font-bold text-slate-200 mb-1">{{ title }}</h1>
        <p data-aos="fade-up" class="text-sm font-medium w-3/6">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    description?: string
}>()
</script>
