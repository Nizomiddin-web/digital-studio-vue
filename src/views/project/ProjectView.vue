<script setup>
import { ref } from "vue";
import ProjectItem from "@/components/projects/ProjectItem.vue";

const projects = ref([
    {
        title:'ОсОО “Energi.kg”',
        created_at:'12/04/2021',
        updated_at:'15/04/2021',
        group:'Charos,Islom,Ibrohim'
    },
    {
        title:'ОсОО “Energi.kg”',
        created_at:'12/04/2021',
        updated_at:'15/04/2021',
        group:'Charos,Islom,Ibrohim'
    },
    {
        title:'ОсОО “Energi.kg”',
        created_at:'12/04/2021',
        updated_at:'15/04/2021',
        group:'Charos,Islom,Ibrohim'
    },
])
</script>

<template>
    <div class="p-4 bg-slate-100 rounded-xl">
        <div class="flex mb-8 justify-between">
            <div class="font-semibold text-xl">Projects</div>
            <div class="flex gap-3 items-center">
                <span><img src="/external-link.png" alt=""></span>
                <span>Export</span>
            </div>
        </div>
        <div>
            <div class="mb-3" v-for="(project, key) in projects" :key="key">
                <ProjectItem  :project="project"/> 
            </div>   
        </div>
    </div>
</template>

<style scoped>
    
</style>