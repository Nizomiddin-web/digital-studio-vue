<script setup>
import TaskItem from '@/components/tasks/TaskItem.vue';
import { ref } from 'vue';
const tasks = ref([
    {
        title:'Переход по действиям',
        created_at:'12/04/2021'
    },
    {
        title:'Уведомления',
        created_at:'12/04/2021'
    },
    {
        title:'Приоритеты',
        created_at:'12/04/2021'
    }
])
</script>

<template>
    <div class="p-6 bg-slate-100 rounded-md mb-6">
        <div class="font-bold mb-4">Tasks</div>
        <div v-for="(task,key) in  tasks" :key="key">
            <TaskItem :task=task />
        </div>
    </div>
</template>
