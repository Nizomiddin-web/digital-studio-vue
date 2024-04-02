<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  is_add: {
    type: Boolean,
    default: false,
  },
});

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>

<template>
  <div class="bg-slate-100 w-1/4 mt-5 p-6 rounded-xl">
    <div class="flex justify-between items-center">
      <div class="font-bold text-xl">{{ item }}</div>
      <div v-if="is_add">
        <button class="">
          <span><img src="/plus-circle.png" alt="" /></span>
        </button>
      </div>
    </div>
    <div class="min-h-96" :id="id"  @drop="drop" @dragover.prevent ></div>
  </div>
</template>

<style scoped></style>
