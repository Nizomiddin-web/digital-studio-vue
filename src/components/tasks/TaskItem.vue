<script setup>
defineProps({
    task:{
        type:Object,
        required:true
    }
})
</script>
<template>
  <div class="bg-slate-200 rounded-md p-1 mb-3">
    <div class="font-semibold">{{ task.title }}</div>
    <div class="flex gap-2">
      <span><img src="/sunset.png" alt="" /></span
      ><span>{{ task.created_at }}</span>
    </div>
  </div>
</template>

