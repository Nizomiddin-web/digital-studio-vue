<script setup>
    defineProps({
        data:{
            type:Object,
            required:true
        },
    })

function drag(e) {
  e.dataTransfer.dropEffect='move'
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData("text", e.target.id);
  console.log(e)
  console.log('ishladi bu ham')
}

</script>
<template>
    <div class="flex flex-col gap-2 bg-slate-300  rounded-md p-2 mt-2" :id="data.id" draggable="true" @dragstart="drag">
        <div class="flex justify-between">
            <div class="font-semibold">{{data.title}}</div>
            <div class="rounded-2xl ">{{data.status}}</div>
        </div>
        <div class="flex justify-between">
            <div class="text-slate-400">Participant:</div>
            <div>{{data.name}}</div>
        </div>
        <div class="flex justify-between">
            <div class="text-slate-400">Date added:</div>
            <div>{{data.date}}</div>
        </div>
    </div>
</template>
<style scoped>
</style>
    


