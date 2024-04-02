<script setup>
defineProps({
  payment: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-36 rounded-2xl p-4 bg-slate-200 items-center justify-beetwen ">
    <div class="font-semibold">{{ payment.title }}</div>
    <div class="flex gap-10">
      <div class="flex gap-2">
        <span ><img src="/sunrise.png" alt="" /></span
        ><span>{{ payment.created_at }}</span>
      </div>
      <div class="flex gap-2">
        <span><img src="/sunset.png" alt="" /></span
        ><span>{{ payment.updated_at }}</span>
      </div>

    </div>
    <div class="font-semibold ml-12">
        <span>$ {{ payment.price}}</span>
      </div>
  </div>
</template>
<style scoped></style>