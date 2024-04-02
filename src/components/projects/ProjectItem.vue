<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-4 rounded-2xl p-4 bg-slate-200 items-center justify-center">
    <div class="w-1/3 font-semibold">{{ project.title }}</div>
    <div class="flex gap-10">
      <div class="flex gap-2">
        <span ><img src="/sunrise.png" alt="" /></span
        ><span>{{ project.created_at }}</span>
      </div>
      <div class="flex gap-2">
        <span><img src="/sunset.png" alt="" /></span
        ><span>{{ project.updated_at }}</span>
      </div>
      <div class="flex gap-2">
        <span><img src="/users.png" alt="" /></span
        ><span>{{ project.group }}</span>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
