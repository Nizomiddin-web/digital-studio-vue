<script setup>
import { ref } from "vue";
const keyItem = ref("");
const list = ref([
  {
    item: "Client",
    to: "/client",
  },
  {
    item: "Task manager",
    to: "/task-manager",
  },
  {
    item: "Inbox",
    to: "/inbox",
  },
  {
    item: "Contacts",
    to: "/contacts",
  },
]);
</script>
<template>
  <div
    class="h-screen bg-slate-100 flex flex-col w-1/6 gap-20 items-center p-4 text-xl fixed"
  >
    <div class="mt-12">
      <img src="/logo-1.png" alt="rasm" />
    </div>
    <div class="p-4">
      <div class="flex flex-col gap-6">
        <div v-for="(item, key) in list" :key="key">
          <RouterLink
            :to="item.to"
            @click="keyItem = key"
            :class="{ 'font-semibold': keyItem === key }"
          >
            <span class="font-semibold" v-if="keyItem === key">-</span
            >{{ item.item }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
