<script setup>
import ProjectHeaderView from '../project/ProjectHeaderView.vue';
import Kanban from '@/views/kanban/KanbanView.vue'


</script>

<template>
    <div class="flex flex-col">
        <div>
            <ProjectHeaderView/>
            <TestCart/>
        </div>
        <div class="flex gap-4">
            <Kanban item="To do" is_add='true' id="todo"/>
            <Kanban item="In progress" id="inProgress"/>
            <Kanban item="Closed" id="closed"/>
            <Kanban item="Frozen" id="frozen"/>
        </div>
    </div>
</template>

<style scoped>
    
</style>