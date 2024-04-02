<script setup>
defineProps({
  document: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="bg-slate-200 rounded-md p-1 mb-3">
    <div class="flex justify-between items-center">
      <div>
        <div class="font-semibold">{{ document.title }}</div>
        <div class="flex justify-between">
          <div class="flex gap-2">
            <span><img src="/sunset.png" alt="" /></span
            ><span>{{ document.created_at }}</span>
          </div>
        </div>
      </div>
      <div><img src="/download.png" alt="" /></div>
    </div>
  </div>
</template>
