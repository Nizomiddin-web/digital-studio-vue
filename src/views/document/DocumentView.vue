<script setup>
import DocumentItem from '@/components/documents/DocumentItem.vue';
import { ref } from 'vue';
const documents = ref([
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
    <div class="p-4 bg-slate-100 rounded-md">
        <div class="flex justify-between">
            <div class="font-bold mb-4">Document</div>
            <span><img src="/upload.png" alt=""></span>
        </div>
        <div v-for="(document,key) in  documents" :key="key">
            <DocumentItem :document="document" />
        </div>
    </div>
</template>
